<template>
  <div class="section-column code-output-column">
    <div class="output-container">
      <div v-if="!schema" class="no-schema-message">
        Enter a valid json data in the previous tab to continue.
      </div>
      <div v-if="schema">
        <div
          class="output-box"
          v-for="outputFile in generatedOutputFileList"
          :key="outputFile.name"
        >
          <div class="output-box-title">{{ outputFile.name }}</div>
          <div>
            <pre><code v-html="outputFile.content"> </code></pre>
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
import PJava from "prismjs/components/prism-java";
import PSql from "prismjs/components/prism-sql";
console.log(PJava, PSql);

export default {
  name: "CodeOutput",
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
    displayOutput() {
      if (this.generated === null) return;

      console.log(Prism.languages);

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

      console.log({ list });

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
    max-height: 80vh;
    overflow: scroll;
  }

  .output-box-title {
    background: #e2e2e2;
    padding: 10px;
    text-align: right;
  }

  .no-schema-message {
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
