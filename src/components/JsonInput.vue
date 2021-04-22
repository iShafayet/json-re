<template>
  <div class="section-column input-column">
    <div class="input-textarea-container">
      <q-input
        class="input-textarea"
        v-model="inputText"
        filled
        type="textarea"
        rows="40"
        @input="inputTextChanged"
      />
    </div>

    <div class="error-message" v-html="errorMessage" v-if="errorMessage"></div>
  </div>
</template>

<script>
import * as fixtures from "../components/fixtures.js";

import { JsonRe } from "../components/json-re-core.js";

export default {
  name: "JsonInput",
  props: {},
  data() {
    return {
      // inputText: "{\n\n}",
      inputText: JSON.stringify(fixtures.sampleInput1, null, 2),
      errorMessage: "",
      enableDoneButton: true
    };
  },
  methods: {
    kickstart() {
      this.inputTextChanged();
    },

    inputTextChanged() {
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

<style lang="scss">
.input-column {
  .input-textarea-container {
    height: 80vh !important;
    background: #f2f2f2;
  }

  // NOTE this forces the style on all textarea
  .input-textarea-container textarea {
    font-family: "Courier New", Courier, monospace;
    resize: none !important;
    max-height: calc(80vh - 3px) !important;
    padding: 6px !important;
  }

  .input-textarea-container .q-field__control {
    padding: 0px !important;
  }

  .error-message {
    color: red;
  }
}
</style>
