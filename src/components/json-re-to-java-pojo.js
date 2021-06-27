import { toPascalCase } from "./utils.js";

const ROOT_OBJECT_NAME = "RootObject";
const DEFAULT_OBJECT_POSTFIX = "Object";

class JsonReSchemaToJavaPojoConverter {
  constructor() {
    this.pojos = {};
  }

  _makePojo(schema, name) {
    var pojo = {
      name,
      fields: {},
      arrayDepth: schema.type === "array" ? 1 : 0
    };
    this.pojos[name] = pojo;

    // Not much to do for an array. Move onto it's child
    if (schema.type === "array") {
      schema = schema.childKey;
    }

    // Code should never reach here.
    if (schema.type !== "object") {
      throw new Error("Unforseen event: Expected Object.");
    }

    for (let key in schema.keys) {
      let value = schema.keys[key];

      if (
        value.type === "null" ||
        (value.type === "array" &&
          (value.childKey === null || value.childKey.type === "null"))
      ) {
        continue;
      }

      pojo.fields[key] = {
        name: key,
        javaType: null,
        schema: value
      };

      pojo.fields[key].arrayDepth = 0;
      while (value.type === "array") {
        // Array
        value = value.childKey;
        pojo.fields[key].arrayDepth += 1;
      }

      if (value.type === "object") {
        // Object
        let valueName = this._getPojoName(key, value);
        this._makePojo(value, valueName);
        pojo.fields[key].javaType = valueName;
      } else {
        // Primitives
        switch (value.type) {
          case "string":
            pojo.fields[key].javaType = "String";
            break;
          case "number":
            pojo.fields[key].javaType = "double";
            break;
          case "boolean":
            pojo.fields[key].javaType = "boolean";
            break;
          default:
            throw new Error("Unforseen event: Expected known type.");
        }
      }
    }
  }

  _generatePojoContent(pojo, target) {
    let { options } = target;

    const indent = "    ";

    let classAnnotations = [];
    if (options.lombokGetter) classAnnotations.push("@Getter");
    if (options.lombokSetter) classAnnotations.push("@Setter");
    if (options.lombokData) classAnnotations.push("@Data");
    if (options.lombokBuilder) classAnnotations.push("@Builder");
    if (classAnnotations.length !== 0) classAnnotations.push("");

    let content = classAnnotations.join("\n") + `public class ${pojo.name} {\n`;

    let keys = Object.keys(pojo.fields);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let field = pojo.fields[key];

      if (options.javaxValidations) {
        if (!field.schema.allowNull) {
          content += `${indent}@NotNull\n`;
        }
        if (
          field.schema.type === "string" &&
          "minLen" in field.schema &&
          "maxLen" in field.schema
        ) {
          content += `${indent}@Size(min=${field.schema.minLen}, max=${field.schema.maxLen})\n`;
        }
        if (
          field.schema.type === "number" &&
          "min" in field.schema &&
          "max" in field.schema
        ) {
          content += `${indent}@Min(value=${field.schema.min})\n`;
          content += `${indent}@Max(value=${field.schema.max})\n`;
        }
      }

      let arrayModifier = "";
      for (let i = 0; i < field.arrayDepth; i++) arrayModifier += "[]";

      content += `${indent}private ${field.javaType}${arrayModifier} ${field.name};\n`;
      if (options.javaxValidations && i !== keys.length - 1) content += "\n";
    }

    content += "}\n";

    pojo.content = content;
  }

  convert(schema, target) {
    schema = JSON.parse(JSON.stringify(schema));

    let pojoName = this._getRootPojoName(schema);
    this._makePojo(schema, pojoName);

    for (let key in this.pojos) {
      this._generatePojoContent(this.pojos[key], target);
    }

    let keys = Object.keys(this.pojos);
    return keys.map(key => this.pojos[key]);
  }

  _getRootPojoName(schema) {
    let preferredName = ROOT_OBJECT_NAME;
    if (schema.type === "object") {
      if (schema.preferredName) {
        preferredName = schema.preferredName;
      }
    }
    if (
      schema.type === "array" &&
      schema.childKey &&
      schema.childKey.type === "object"
    ) {
      if (schema.childKey.preferredName) {
        preferredName = schema.childKey.preferredName;
      }
    }
    return preferredName;
  }

  _getPojoName(key, value) {
    return value.preferredName
      ? value.preferredName
      : toPascalCase(key) + DEFAULT_OBJECT_POSTFIX;
  }
}

export { JsonReSchemaToJavaPojoConverter };
