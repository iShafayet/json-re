import { toSnakeCase } from "./utils.js";

class JsonReSchemaToSqlConverter {
  constructor() {
    this.tables = {};
  }

  _makeTable(schema, name) {
    var pojo = (this.tables[name] = {
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
        sqlType: null,
        allowNull: value.allowNull
      };

      if (value.type === "object") {
        // Object
        let valueName = toSnakeCase(key) + "_table";
        this._makeTable(value, valueName);
        pojo.fields[key].sqlType = "INT(11)";
        pojo.fields[key].foreignKeyOf = valueName;
        pojo.fields[key].name = valueName + "_id";
      } else if (value.type === "array") {
        // Array

        // TODO refactor - start
        value = value.childKey;
        pojo.fields[key].isArray = true;
        if (value.type === "object") {
          // Object
          let valueName = toSnakeCase(key) + "_table";
          this._makeTable(value, valueName);
          pojo.fields[key].sqlType = "INT(11)";
          pojo.fields[key].foreignKeyOf = valueName;
          pojo.fields[key].name = valueName + "_id";
        } else if (value.type === "array") {
          // Array
        } else {
          // Primitives
          switch (value.type) {
            case "string":
              pojo.fields[key].sqlType = "VARCHAR(255)";
              break;
            case "number":
              pojo.fields[key].sqlType = "DOUBLE(11, 10)";
              break;
            case "boolean":
              pojo.fields[key].sqlType = "BOOL";
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
            pojo.fields[key].sqlType = "VARCHAR(255)";
            break;
          case "number":
            pojo.fields[key].sqlType = "DOUBLE(11, 10)";
            break;
          case "boolean":
            pojo.fields[key].sqlType = "BOOL";
            break;
          default:
            throw new Error("Unforseen event: Expected Object.");
        }
      }
    }
  }

  _generateTableContent(pojo) {
    const indent = "    ";
    let content = `CREATE TABLE ${pojo.name} (\n`;

    let keyList = Object.keys(pojo.fields);
    if (!("id" in pojo.fields)) {
      keyList.unshift("id");
      pojo.fields.id = { type: "number", sqlType: "INT(11)", name: "id" };
    }
    pojo.fields.id.isPrimaryKey = true;

    for (let i = 0; i < keyList.length; i++) {
      let key = keyList[i];
      let field = pojo.fields[key];
      // console.log(field);

      let delimiter = i + 1 < keyList.length ? "," : "";
      content += `${indent}${toSnakeCase(field.name)}`;
      content += ` ${field.sqlType}`;
      if (!field.allowNull) {
        content += " NOT NULL";
      }
      if (field.isPrimaryKey) {
        content += ` PRIMARY KEY`;
      }
      if (field.foreignKeyOf) {
        content += `${delimiter}\n`;
        content += `${indent}${indent}CONSTRAINT fk_${toSnakeCase(
          field.name
        )} \n`;
        content += `${indent}${indent}FOREIGN KEY (${toSnakeCase(
          field.name
        )}) \n`;
        content += `${indent}${indent}REFERENCES ${field.foreignKeyOf}(id)`;
      }
      content += `${delimiter}\n`;
    }

    content += ");\n";

    content = content.replace(/\ ,/g, ",");
    content = content.replace(/\ ,/g, ",");

    pojo.content = content;
  }

  convert(schema, target) {
    schema = JSON.parse(JSON.stringify(schema));

    this._makeTable(schema, toSnakeCase("RootTable"));

    for (let key in this.tables) {
      this._generateTableContent(this.tables[key]);
    }

    let keys = Object.keys(this.tables);
    return keys.map(key => this.tables[key]);
  }
}

export { JsonReSchemaToSqlConverter };
