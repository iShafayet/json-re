<template>
  <div class="section-column code-generating-column">
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
      <q-checkbox
        v-model="target.treatNullAsString"
        label="Treat null values as nullable string."
        @input="generateCode"
      />
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
        },
        treatNullAsString: true
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
}
</style>
