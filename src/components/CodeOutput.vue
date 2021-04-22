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
            <code
              ><pre>{{ outputFile.content }}</pre></code
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      this.generatedOutputFileList = this.generated;
    }
  }
};
</script>

<style lang="scss">
.code-output-column {
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
