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
      isArray: schema.type === "array"
    };
    this.pojos[name] = pojo;

    // Not much to do for an array. Move onto it's child
    if (schema.type === "array") {
      schema = schema.childKey;
    }

    // console.log(schema);
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
        javaType: null
      };

      if (value.type === "object") {
        // Object
        let valueName = this._getPojoName(key, value);
        this._makePojo(value, valueName);
        pojo.fields[key].javaType = valueName;
      } else if (value.type === "array") {
        // Array

        // TODO refactor - start
        value = value.childKey;
        pojo.fields[key].isArray = true;
        if (value.type === "object") {
          // Object
          let valueName = this._getPojoName(key, value);
          this._makePojo(value, valueName);
          pojo.fields[key].javaType = valueName;
        } else if (value.type === "array") {
          // Array
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
              throw new Error("Unforseen event: Expected Object.");
          }
        }
        // TODO refactor - end
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
            throw new Error("Unforseen event: Expected Object.");
        }
      }
    }
  }

  _generatePojoContent(pojo) {
    const indent = "    ";
    let content = `public class ${pojo.name} {\n`;

    for (let key in pojo.fields) {
      let field = pojo.fields[key];
      // console.log(field);
      content += `${indent}private ${field.javaType}${
        field.isArray ? "[]" : ""
      } ${field.name};\n`;
    }

    content += "}\n";

    pojo.content = content;
  }

  convert(schema, target) {
    schema = JSON.parse(JSON.stringify(schema));

    let pojoName = this._getRootPojoName(schema);
    this._makePojo(schema, pojoName);

    for (let key in this.pojos) {
      this._generatePojoContent(this.pojos[key]);
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
