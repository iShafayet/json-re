<template>
  <div class="section-column code-generating-column">
    <div class="code-generation-config-container">
      <div v-if="!schema" class="no-schema-message">
        Enter a valid json data in the first tab to continue.
      </div>
      <div v-if="schema">
        <q-select
          outlined
          v-model="target.type"
          :options="targetTypes"
          label="Select target type"
          style="margin-top: 20px; width: 100%"
          @input="generateCode"
        />

        <div style="margin-top: 20px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeGenerationConfig",
  props: {
    schema: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
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
        type: {
          label: "Java POJO",
          value: "java-pojo"
        }
      }
    };
  },

  methods: {
    kickstart() {
      this.generateCode();
    },

    generateCode() {
      this.$emit("config-updated", this.target);
    }
  }
};
</script>

<style lang="scss">
.code-generating-column {
  .code-generation-config-container {
    padding: 10px;
    background: #f2f2f2;
    height: calc(80vh);
    overflow: auto;
  }

  .no-schema-message {
    font-family: "Courier New", Courier, monospace !important;
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
