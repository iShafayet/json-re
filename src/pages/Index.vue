<template>
  <q-page class="page index-page">
    <!-- mobile-tabs - start -->
    <q-tabs
      mobile-arrows
      outside-arrows
      v-if="$q.platform.is.mobile"
      v-model="unifiedTab"
      inline-label
      align="justify"
      raised
      class="bg-primary text-white shadow-1 input-tabs"
    >
      <q-tab name="json" icon="code" label="JSON" />
      <q-tab name="schema" icon="preview" label="Schema preview" />
      <q-tab name="configuration" icon="settings" label="Configure output" />
      <q-tab name="generated" icon="code" label="Generated code" />
    </q-tabs>
    <!-- mobile-tabs - end -->

    <!-- desktop-tabs - start -->
    <div class="row">
      <!-- input columns - start -->
      <div
        class="column col col-xs-12 col-sm-6"
        :hidden="
          !(
            $q.platform.is.mobile &&
            unifiedTab !== 'json' &&
            unifiedTab !== 'schema'
          )
        "
      >
        <q-tabs
          v-if="!$q.platform.is.mobile"
          v-model="inputTab"
          inline-label
          align="justify"
          raised
          class="bg-primary text-white shadow-1 input-tabs"
        >
          <q-tab name="json" icon="code" label="JSON" />
          <q-tab name="schema" icon="preview" label="Schema preview" />
        </q-tabs>

        <JsonInput
          :hidden="
            (!$q.platform.is.mobile && inputTab !== 'json') ||
              ($q.platform.is.mobile && unifiedTab !== 'json')
          "
          @schema-generated="schemaGenerated"
          ref="jsonInputRef"
        />
        <SchemaPreview
          :hidden="
            (!$q.platform.is.mobile && inputTab !== 'schema') ||
              ($q.platform.is.mobile && unifiedTab !== 'schema')
          "
          ref="schemaPreviewRef"
        />
      </div>
      <!-- input columns - end -->

      <!-- output columns - start -->
      <div
        class="column col col-xs-12 col-sm-6"
        :hidden="
          !(
            $q.platform.is.mobile &&
            unifiedTab !== 'configuration' &&
            unifiedTab !== 'generated'
          )
        "
      >
        <q-tabs
          v-if="!$q.platform.is.mobile"
          v-model="outputTab"
          inline-label
          align="justify"
          class="bg-primary text-white shadow-1 output-tabs"
        >
          <q-tab
            name="configuration"
            icon="settings"
            label="Configure output"
          />
          <q-tab name="generated" icon="code" label="Generated code" />
        </q-tabs>

        <CodeOutput
          :hidden="
            (!$q.platform.is.mobile && outputTab !== 'generated') ||
              ($q.platform.is.mobile && unifiedTab !== 'generated')
          "
          :schema="schema"
          :target="target"
          :generated="generated"
          ref="codeOutputRef"
        />
        <CodeGenerationConfig
          :hidden="
            (!$q.platform.is.mobile && outputTab !== 'configuration') ||
              ($q.platform.is.mobile && unifiedTab !== 'configuration')
          "
          :schema="schema"
          @config-updated="configUpdated"
          ref="configRef"
        />
      </div>
      <!-- output columns - end -->
    </div>
    <!-- desktop-tabs - end -->
  </q-page>
</template>

<script>
import * as fixtures from "../components/fixtures.js";

import { JsonReSchemaToJavaPojoConverter } from "../components/json-re-to-java-pojo.js";
import { JsonReSchemaToSqlConverter } from "../components/json-re-to-sql.js";

import JsonInput from "../components/JsonInput.vue";
import SchemaPreview from "../components/SchemaPreview.vue";
import CodeGenerationConfig from "../components/CodeGenerationConfig.vue";
import CodeOutput from "../components/CodeOutput.vue";

export default {
  name: "PageIndex",
  components: { JsonInput, SchemaPreview, CodeGenerationConfig, CodeOutput },
  data() {
    return {
      $q: null, // to suppress editor errors.

      unifiedTab: "json",
      inputTab: "json",
      outputTab: "generated",
      // outputTab: "configuration",

      target: null,
      schema: null,
      generated: null
    };
  },

  mounted() {
    this.$refs.configRef.kickstart();
    this.$refs.jsonInputRef.kickstart();
  },

  methods: {
    generateJavaPojo() {
      let converter = new JsonReSchemaToJavaPojoConverter();
      let generated = converter.convert(this.schema, this.target);

      console.log({ generated });
      this.generated = generated;

      setTimeout(() => {
        this.$refs.codeOutputRef.displayOutput();
      }, 100);
    },

    generateSql() {
      let converter = new JsonReSchemaToSqlConverter();
      let generated = converter.convert(this.schema, this.target);

      console.log({ generated });
      this.generated = generated;

      setTimeout(() => {
        this.$refs.codeOutputRef.displayOutput();
      }, 100);
    },

    generateCode() {
      if (!this.target || !this.target.type) return;
      if (!this.schema) return;

      if (this.target.type.value === "java-pojo") {
        this.generateJavaPojo();
      } else if (this.target.type.value === "sql-tables") {
        this.generateSql();
      }
    },

    configUpdated(target) {
      this.target = target;

      console.log({ target });
      this.generateCode();
    },

    schemaGenerated(schema) {
      this.schema = schema;

      if (this.schema === null) {
        this.generated = null;
      }

      this.$refs.schemaPreviewRef.generatePreview(this.schema);

      this.generateCode();
    }
  }
};
</script>

<style lang="scss">
.page.index-page {
  width: 100%;
  font-size: 14px;

  .input-tabs,
  .output-tabs {
    margin: 10px;
  }

  .section-column {
    padding: 10px;
    padding-top: 0px;
  }

  .column-title {
    margin: 10px;
  }
}
</style>
