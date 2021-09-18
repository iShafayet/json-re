<template>
  <div class="section-column code-generating-column">
    <div
      class="code-generation-config-container"
      ref="codeGenerationConfigContainerRef"
    >
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

        <div class="java-pojo-options" v-if="target.type.value == 'java-pojo'">
          <div class="option-group">
            <div class="option-group-title">
              Apply javax.validation.constraints
            </div>
            <q-checkbox
              v-model="target.options.javaxValidations"
              label="Generate validation annotations"
              @input="generateCode"
            />
          </div>
          <div class="option-group">
            <div class="option-group-title">
              Apply lombok annotations
            </div>
            <q-checkbox
              v-model="target.options.lombokBuilder"
              label="@Builder"
              @input="generateCode"
            />
            <q-checkbox
              v-model="target.options.lombokData"
              label="@Data"
              @input="generateCode"
            />
            <q-checkbox
              v-model="target.options.lombokGetter"
              label="@Getter"
              @input="generateCode"
            />
            <q-checkbox
              v-model="target.options.lombokSetter"
              label="@Setter"
              @input="generateCode"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonMixin } from "./common-mixin";

export default {
  name: "CodeGenerationConfig",
  mixins: [CommonMixin],
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
        options: {
          javaxValidations: true,
          lombokGetter: false,
          lombokSetter: false,
          lombokData: true,
          lombokBuilder: true
        }
      }
    };
  },

  methods: {
    resizeWorkingArea() {
      let el = this.$refs.codeGenerationConfigContainerRef;
      this.calculateAndSetWorkingAreaHeight(el, 50 + 80);
    },

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

  .java-pojo-options {
    padding: 8px;
  }

  .option-group-title {
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>
