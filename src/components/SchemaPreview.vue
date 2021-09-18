<template>
  <div class="section-column processing-column">
    <div class="preview-schema-container" ref="schemaPreviewRef">
      <div v-if="!schema" class="no-schema-message">
        Enter a valid json data in the first tab to continue.
      </div>
      <EditableJsonEntity
        :indent="0"
        :injectedSchema="schema"
        baseName="<root>"
        @schema-modified="schemaModifiedInEditableEntity"
      />
    </div>
  </div>
</template>

<script>
import EditableJsonEntity from "../components/EditableJsonEntity.vue";

import { CommonMixin } from "./common-mixin";

export default {
  name: "SchemaPreview",
  props: {},
  components: { EditableJsonEntity },
  mixins: [CommonMixin],

  data() {
    return {
      schema: null
    };
  },
  methods: {
    resizeWorkingArea() {
      let el = this.$refs.schemaPreviewRef;
      this.calculateAndSetWorkingAreaHeight(el, 50 + 80);
    },
    generatePreview(schema) {
      this.schema = schema;
    },
    schemaModifiedInEditableEntity() {
      this.schema.isModified = true;
      this.$emit("schema-modified", this.schema);
      console.log("Modified schema", this.schema);
    }
  }
};
</script>

<style lang="scss">
.processing-column {
  .preview-schema-container {
    padding: 10px;
    background: #f2f2f2;
    height: calc(80vh);
    overflow: auto;
    overflow-x: scroll;
  }

  .no-schema-message {
    font-family: "Courier New", Courier, monospace !important;
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
