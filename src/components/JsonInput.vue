<template>
  <div class="section-column input-column">
    <div class="input-textarea-container">
      <prism-editor
        class="json-editor height-300"
        v-model="inputText"
        :highlight="highlighter"
        :line-numbers="true"
        @input="inputTextChangedInternal"
      ></prism-editor>
    </div>

    <div
      class="error-message row items-center"
      v-html="errorMessage"
      v-if="errorMessage"
    ></div>

    <div class="config-area" v-if="!errorMessage">
      <q-checkbox
        v-model="treatNullAsString"
        label="Treat null values as nullable string."
      />
    </div>
  </div>
</template>

<script>
import * as fixtures from "../components/fixtures.js";

import {
  JsonRe,
  convertNullToNullableString
} from "../components/json-re-core.js";

import Prism from "prismjs";
import "prismjs/components/prism-json";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { debounce } from "debounce";

export default {
  name: "JsonInput",
  props: {},
  components: {
    PrismEditor
  },
  data() {
    return {
      // inputText: "{\n\n}",
      inputText: JSON.stringify(fixtures.sampleInput1, null, 2),
      errorMessage: "",
      enableDoneButton: true,
      treatNullAsString: true
    };
  },
  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.json, "json");
    },

    kickstart() {
      this.inputTextChanged();
    },

    inputTextChangedInternal: debounce(function(e) {
      this.inputTextChanged();
    }, 200),

    inputTextChanged() {
      this.errorMessage = "";

      let json = null;
      try {
        json = JSON.parse(this.inputText);
      } catch (ex) {
        console.warn(ex);
        this.errorMessage = ex.message;
      }
      this.generateSchema(json);
    },

    generateSchema(json) {
      let schema = null;

      if (json === null) {
        this.$emit("schema-generated", null);
        return;
      }

      try {
        let jsonRe = new JsonRe();
        schema = jsonRe.process(json);

        if (this.treatNullAsString) {
          convertNullToNullableString(schema);
        }

        console.log({ schema });
      } catch (ex) {
        console.warn(ex);
        this.errorMessage = ex.message;
      }

      this.$emit("schema-generated", schema);
    }
  }
};
</script>

<style lang="scss" src="../css/prism.scss"></style>
<style lang="scss">
.input-column {
  * {
    font-family: "Courier New", Courier, monospace !important;
  }
  .input-textarea-container {
    height: calc(80vh - 40px) !important;
    background: #f2f2f2;
  }

  .json-editor {
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  .prism-editor__textarea:focus {
    outline: none;
  }

  .error-message {
    padding-left: 12px;
    height: 40px;
    color: rgb(255, 255, 255);
    background: #cc3f3f;
    font-weight: bold;
  }

  .config-area {
    height: 40px;
    background: #cfcdcd;
  }
}
</style>
