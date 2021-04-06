class JsonRe {
  constructor(
    opt = {
      onStringAndNumberCollision: "prefer-string",
      onNullCollision: "allow"
    }
  ) {
    this.opt = opt;
    this.schema = {};
  }

  _getType(value) {
    if (value === null) return "null";
    if (typeof value === "object") {
      if (Array.isArray(value)) return "array";
      return "object";
    }
    return typeof value;
  }

  _throwTypeMismatch(trace, expected, received) {
    var message = `Type mismatch in: ${trace}. Expected ${expected}, received ${received}.`;
    throw new Error(message);
  }

  _process(node, schema, trace) {
    let type = this._getType(node);
    if (schema.type && schema.type !== type) {
      if (this.opt.onNullCollision === "allow" && type === "null") {
        schema.allowNull = true;
        return;
      }

      if (
        ((type === "string" && schema.type === "number") ||
          (type === "number" && schema.type === "string")) &&
        this.opt.onStringAndNumberCollision === "prefer-string"
      ) {
        schema.type = "string";
        schema.coerce = true;
        return;
      }

      if (this.opt.onNullCollision === "allow" && schema.type === "null") {
        schema.allowNull = true;
      } else {
        this._throwTypeMismatch(trace, schema.type, type);
      }
    }
    schema.type = type;

    if (type === "array") {
      if (!schema.childKey) schema.childKey = null;
      for (let index = 0; index < node.length; index += 1) {
        let itemNode = node[index];
        if (!schema.childKey) schema.childKey = {};
        this._process(itemNode, schema.childKey, `${trace}[${index}]`);
      }
    } else if (type === "object") {
      if (!schema.keys) schema.keys = {};

      let keys = Object.keys(node);
      for (let key of keys) {
        let val = node[key];
        if (!schema.keys[key]) schema.keys[key] = {};
        this._process(val, schema.keys[key], `${trace}.${key}`);
      }
    }
  }

  process(jsonNode) {
    // NOTE check for cyclic dependencies and get rid of
    // non-enumerable properties.
    jsonNode = JSON.parse(JSON.stringify(jsonNode));

    this._process(jsonNode, this.schema, "~");
    return this.schema;
  }
}

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

export { JsonRe, prettyPrintSchema };
