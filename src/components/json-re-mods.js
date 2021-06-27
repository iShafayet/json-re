import { toPascalCase } from "./utils.js";

let prettyPrintSchema = (schema, name = "<root>", indent = "") => {
  let output = "";
  // output += indent + (schema.allowNull ? "nullable " : "") + schema.type + " " + name + "\n";
  output += `${indent}${name}: ${schema.type}${
    schema.allowNull ? " (nullable)" : ""
  }${schema.coerce ? " (coerce)" : ""}\n`;

  if (schema.type === "array" && schema.childKey) {
    output += prettyPrintSchema(schema.childKey, "<array-item>", indent + "  ");
  } else if (schema.type === "object") {
    for (let key in schema.keys) {
      output += prettyPrintSchema(schema.keys[key], key, indent + "  ");
    }
  }
  return output;
};

let convertNullToNullableString = schema => {
  if (schema.type === "array") {
    return convertNullToNullableString(schema.childKey);
  } else if (schema.type === "object") {
    for (let key in schema.keys) {
      convertNullToNullableString(schema.keys[key]);
    }
    return;
  } else if (schema.type === "null") {
    schema.type = "string";
    schema.allowNull = true;
    return;
  }
};

let generatePreferredNames = (schema, keyName = "Root") => {
  if (schema.type === "array") {
    generatePreferredNames(schema.childKey, keyName);
  } else if (schema.type === "object") {
    schema.preferredName = toPascalCase(keyName);
    for (let key in schema.keys) {
      generatePreferredNames(schema.keys[key], key);
    }
  } else {
    ("pass");
  }
};

export {
  prettyPrintSchema,
  convertNullToNullableString,
  generatePreferredNames
};
