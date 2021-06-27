<template>
  <div class="section-column input-column">
    <div class="input-textarea-container">
      <prism-editor
        class="json-editor"
        v-model="inputText"
        :highlight="highlighter"
        :line-numbers="true"
        @input="inputTextChangedDebouncer"
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
        @input="inputTextChangedDebouncer"
      />
    </div>
  </div>
</template>

<script>
import * as fixtures from "../components/fixtures.js";

import { JsonRe } from "../components/json-re-core.js";

import {
  convertNullToNullableString,
  generatePreferredNames
} from "../components/json-re-mods";

import Prism from "prismjs";
import "prismjs/components/prism-json";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import { debounce } from "debounce";

import { CommonMixin } from "./common-mixin";

export default {
  name: "JsonInput",
  props: {},
  mixins: [CommonMixin],
  components: {
    PrismEditor
  },
  data() {
    return {
      // inputText: "{\n\n}",
      inputText: JSON.stringify(fixtures.sampleInput1, null, 2),
      errorMessage: "",
      enableDoneButton: true,
      treatNullAsString: true,

      previous: {
        inputText: null,
        treatNullAsString: true
      },
      isSchemaExternallyModified: false
    };
  },
  methods: {
    notifyOfSchemaModification() {
      this.isSchemaExternallyModified = true;
    },
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.json, "json");
    },

    kickstart() {
      this.inputTextChanged();
    },

    inputTextChangedDebouncer: debounce(function(e = null) {
      this.inputTextChanged();
    }, 200),

    async inputTextChanged() {
      this.errorMessage = "";

      if (this.previous.inputText !== null && this.isSchemaExternallyModified) {
        let message =
          "The changes you made to the schema will be lost. Continue?";
        let confirmed = await this.confirm("Confirm change", message);
        if (!confirmed) {
          this.inputText = this.previous.inputText;
          this.treatNullAsString = this.previous.treatNullAsString;
          return;
        }
        this.isSchemaExternallyModified = false;
      }

      this.previous.inputText = this.inputText;
      this.previous.treatNullAsString = this.treatNullAsString;

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

        generatePreferredNames(schema);

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

  .prism-editor__textarea,
  .prism-editor__editor {
    overflow-wrap: anywhere !important;
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
