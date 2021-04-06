<template>
  <q-page class="page">
    <div class="row">
      <div class="col main-column input-column">
        <div class="column-title">Step 1. Input JSON</div>
        <div class="input-textarea-container">
          <q-input
            class="input-textarea"
            v-model="inputText"
            filled
            type="textarea"
            rows="40"
          />
        </div>
        <q-btn
          color="primary"
          label="Generate schema"
          icon-right="send"
          style="margin-top: 20px; width: 100%;"
          @click="jsonInputDoneClicked"
        />
      </div>
      <div class="col main-column processing-column">
        <div class="column-title">Step 2. Preview schema pseudocode</div>
        <div class="preview-schema-container">
          <code v-html="schemaPreviewText"></code>
        </div>
        <q-select
        v-if="isSchemaPreviewSuccessful"
          outlined
          v-model="target.type"
          :options="targetTypes"
          label="Select target type"
          style="margin-top: 20px; width: 100%"
        />
        <div v-if="target.type && target.type.value == 'java-pojo'">
          <q-btn
            color="primary"
            label="Generate Java POJO"
            icon-right="send"
            style="margin-top: 20px; width: 100%;"
            @click="generateJavaPojoClicked"
          />
        </div>
      </div>
      <div class="col main-column output-column">
        <div class="column-title">Step 3. Generate deserialization code</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { JsonRe } from "../components/json-re-core.js";

export default {
  name: "PageIndex",
  data() {
    return {
      isSchemaPreviewSuccessful: false,
      targetTypes: [
        {
          label: "Java POJO",
          value: "java-pojo"
        },
        {
          label: "SQL Tables",
          value: "sql-tables"
        }
      ],
      target: {
        type: null
      },
      // inputText: "{\n\n}",
      inputText: JSON.stringify(
        [
          {
            userId: 1,
            name: {
              first: "Abdur",
              last: "Rahim"
            },
            country: "Bangladesh",
            age: 23,
            favoriteNumbers: [1, 4, 1],
            lastLogin: null
          },
          {
            userId: 2,
            name: {
              first: "Abd",
              middle: "Bin",
              last: "Karim"
            },
            country: "Saudi Arabia",
            age: 43,
            favoriteNumbers: [333],
            lastLogin: "2021-04-06T09:32:07.911Z"
          },
          {
            userId: 3,
            name: {
              first: "John",
              last: null
            },
            country: "United States",
            age: 34,
            favoriteNumbers: [32, 4343, 34]
          },
          {
            userId: 4,
            name: null,
            country: "Canada",
            isUnderage: true,
            age: "5",
            favoriteNumbers: [9]
          }
        ],
        null,
        2
      ),
      schemaPreviewText: ""
    };
  },
  methods: {
    generateJavaPojoClicked() {
      alert("Under construction");
    },
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
    jsonInputDoneClicked() {
      this.isSchemaPreviewSuccessful = false;
      try {
        let inputJson = JSON.parse(this.inputText);

        let jsonRe = new JsonRe();
        let schema = jsonRe.process(inputJson);
        console.log("Schema", schema);

        let pretty = this.prettyPrintSchemaAsHtml(schema);
        console.log(pretty);

        this.schemaPreviewText = pretty;

        this.isSchemaPreviewSuccessful = true;
      } catch (ex) {
        console.error(ex);
        this.schemaPreviewText = `<span style="color: red;">${ex.message}</span>`;
      }
    }
  }
};
</script>

<style lang="scss">
.page {
  width: 100%;
  font-size: 14px;
}

.input-column {
}

.main-column {
  padding: 10px;
}

.input-textarea-container {
  height: 60vh !important;
  background: #f2f2f2;
}

// NOTE this forces the style on all textarea
.input-textarea-container textarea {
  font-family: "Courier New", Courier, monospace;
  resize: none !important;
  max-height: calc(60vh - 3px) !important;
}

.column-title {
  margin: 10px;
}

.preview-schema-container {
  padding: 10px;
  background: #f2f2f2;
  height: 60vh;
}
</style>
<style lang="scss">
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
</style>
