import { toPascalCase } from "./utils.js";

class JsonReSchemaToJavaPojoConverter {
  constructor() {
    this.pojos = {};
  }

  _makePojo(schema, name) {
    var pojo = (this.pojos[name] = {
      name,
      fields: {},
      isArray: schema.type === "array"
    });

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
        let valueName = toPascalCase(key) + "Object";
        this._makePojo(value, valueName);
        pojo.fields[key].javaType = valueName;
      } else if (value.type === "array") {
        // Array

        // TODO refactor - start
        value = value.childKey;
        pojo.fields[key].isArray = true;
        if (value.type === "object") {
          // Object
          let valueName = toPascalCase(key) + "Object";
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

    this._makePojo(schema, "RootObject");

    for (let key in this.pojos) {
      this._generatePojoContent(this.pojos[key]);
    }

    let keys = Object.keys(this.pojos);
    return keys.map(key => this.pojos[key]);
  }
}

export { JsonReSchemaToJavaPojoConverter };
