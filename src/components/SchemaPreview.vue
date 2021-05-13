<template>
  <div class="section-column processing-column">
    <div class="preview-schema-container">
      <div v-if="!schema" class="no-schema-message">
        Enter a valid json data in the first tab to continue.
      </div>
      <code v-html="schemaPreviewText" v-if="schema"></code>
    </div>
  </div>
</template>

<script>
export default {
  name: "SchemaPreview",
  props: {},
  data() {
    return {
      schemaPreviewText: "",
      schema: null
    };
  },
  methods: {
    prettyPrintSchemaAsHtml(schema, name = "&lt;root&gt;", indent = "") {
      let output = "";

      let stName = name =>
        `<span class="st-name${
          name.indexOf("&lt;") == 0 ? " st-name-sp" : ""
        }">${name}</span>`;

      let stType = type => `<span class="st-type">${type}</span>`;

      output += `${indent}${stName(name)}: ${stType(schema.type)}
        ${schema.allowNull ? " (nullable)" : ""}${
        schema.coerce ? " (coerce)" : ""
      }<br>`;

      if (schema.type === "array" && schema.childKey) {
        output += this.prettyPrintSchemaAsHtml(
          schema.childKey,
          "&lt;array-item&gt;",
          indent + '<span class="st-div"></span>'
        );
      } else if (schema.type === "object") {
        for (let key in schema.keys) {
          output += this.prettyPrintSchemaAsHtml(
            schema.keys[key],
            key,
            indent + '<span class="st-div"></span>'
          );
        }
      }
      return output;
    },
    generatePreview(schema) {
      this.schema = schema;
      if (schema !== null) {
        let html = this.prettyPrintSchemaAsHtml(schema);
        this.schemaPreviewText = html;
      }
    }
  }
};
</script>

<style lang="scss">
.processing-column {
  .preview-schema-container {
    padding: 10px;
    background: #f2f2f2;
    height: calc(80vh);
    overflow: auto;
  }

  .st-name {
    color: rgb(255, 0, 106);
  }

  .st-name-sp {
    color: rgb(230, 131, 255);
  }

  .st-type {
    color: rgb(21, 5, 168);
    font-weight: bold;
  }

  .st-div {
    display: inline-block;
    min-width: 20px;
    min-height: 1px;
  }

  .no-schema-message {
    font-family: "Courier New", Courier, monospace !important;
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
