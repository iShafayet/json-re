<template>
  <div class="section-column code-output-column">
    <div class="output-container" ref="outputContainerRef">
      <div v-if="!schema" class="no-schema-message">
        Enter a valid json data in the first tab to continue.
      </div>
      <div v-if="schema">
        <div
          class="output-box"
          v-for="outputFile in generatedOutputFileList"
          :key="outputFile.name"
        >
          <div class="output-box-title">{{ outputFile.name }}</div>
          <div>
            <pre
              class="output-pre"
            ><code class="output-code" v-html="outputFile.content"></code></pre>
            <!-- <code
              ><pre>{{ outputFile.content }}</pre>
            </code> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/components/prism-sql";
import { CommonMixin } from "./common-mixin";

export default {
  name: "CodeOutput",
  mixins: [CommonMixin],
  props: {
    schema: {
      type: Object,
      default: null
    },
    target: {
      type: Object,
      default: null
    },
    generated: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      generatedOutputFileList: []
    };
  },
  methods: {
    resizeWorkingArea() {
      let el = this.$refs.outputContainerRef;
      this.calculateAndSetWorkingAreaHeight(el, 10);
    },
    displayOutput() {
      if (this.generated === null) return;

      let language = "javascript";
      let languageLibrary = Prism.languages.javascript;
      if (this.target.type.value === "sql-tables") {
        language = "sql";
        languageLibrary = Prism.languages.sql;
      } else if (this.target.type.value === "java-pojo") {
        language = "java";
        languageLibrary = Prism.languages.java;
      }

      let list = this.generated;
      for (let item of list) {
        item.content = Prism.highlight(item.content, languageLibrary, language);
      }

      this.generatedOutputFileList = list;
    }
  }
};
</script>

<style lang="scss" src="../css/prism.scss"></style>
<style lang="scss">
.code-output-column {
  * {
    font-family: "Courier New", Courier, monospace !important;
  }

  .output-container {
    padding: 10px;
    background: #f2f2f2;
    height: 80vh;
    // max-height: 80vh;
    overflow: scroll;
  }

  .output-box-title {
    background: #e2e2e2;
    padding: 10px;
    text-align: right;
  }

  .output-pre {
    overflow: auto !important;
    max-width: calc(50vw - 45px);
  }

  .no-schema-message {
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
