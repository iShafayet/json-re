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
        schema.hadNullCollision = true;
        return;
      }

      if (
        ((type === "string" && schema.type === "number") ||
          (type === "number" && schema.type === "string")) &&
        this.opt.onStringAndNumberCollision === "prefer-string"
      ) {
        type = "string";
        schema.wasCoerced = true;
      } else {
        if (this.opt.onNullCollision === "allow" && schema.type === "null") {
          schema.allowNull = true;
        } else {
          this._throwTypeMismatch(trace, schema.type, type);
        }
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
    } else if (type == "string") {
      this._guessStringLengthBounds(node, schema, trace);
    } else if (type == "number") {
      this._guessStringLengthBounds(node, schema, trace);
    } else {
      ("pass");
    }
  }

  process(jsonNode) {
    // NOTE in order to check for cyclic dependencies and get rid of
    // non-enumerable properties.
    jsonNode = JSON.parse(JSON.stringify(jsonNode));

    this._process(jsonNode, this.schema, "~");
    return this.schema;
  }

  _guessStringLengthBounds(node, schema, trace) {
    if (schema.type === "string" || schema.type === "number") {
      // NOTE Also keeping lengths for numbers since a later
      // entry may be coerced to string

      if (!("minLen" in schema)) {
        schema.minLen = Number.MAX_SAFE_INTEGER;
      }
      if (!("maxLen" in schema)) {
        schema.maxLen = 0;
      }

      if (String(node).length < schema.minLen) {
        schema.minLen = String(node).length;
      }
      if (String(node).length > schema.maxLen) {
        schema.maxLen = String(node).length;
      }
    }

    if (schema.type === "number") {
      if (!("min" in schema)) {
        schema.min = Number.MAX_SAFE_INTEGER;
      }
      if (!("max" in schema)) {
        schema.max = 0;
      }

      if (node < schema.min) {
        schema.min = node;
      }
      if (node > schema.max) {
        schema.max = node;
      }
    }
  }
}

export { JsonRe };
