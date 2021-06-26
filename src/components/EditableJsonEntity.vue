<template>
  <span class="editable-json-entity">
    <template v-if="schema">
      <!-- self-affirming items - start -->

      <template v-if="baseName">
        <span class="baseNameText">{{ baseName }}</span>
        <span class="colonText">:&nbsp;</span>
      </template>

      <span class="typeText">{{ schema.type }}&nbsp;</span>

      <span class="optionText" v-if="schema.type == 'object'">
        <input
          class="input nameInput"
          v-model="schema.preferredName"
          @input="schemaModified"
        />
      </span>

      <span class="optionText"
        >nullable(<input
          type="checkbox"
          class="checkbox"
          v-model="schema.allowNull"
          @input="schemaModified"
        />)</span
      >

      <span class="optionText" v-if="schema.type == 'string'">
        minlen(<input
          type="number"
          class="input minLenInput"
          v-model="schema.minLen"
          @input="schemaModified"
          min="-1"
        />) maxlen(<input
          type="number"
          class="input maxLenInput"
          v-model="schema.maxLen"
          @input="schemaModified"
          min="-1"
        />)
      </span>

      <span class="optionText" v-if="schema.type == 'number'">
        min(<input
          type="number"
          class="input minInput"
          v-model="schema.min"
          @input="schemaModified"
          min="-1"
        />) max(<input
          type="number"
          class="input maxInput"
          v-model="schema.max"
          @input="schemaModified"
          min="-1"
        />)
      </span>

      <!-- self-affirming items - end -->
      <br />
      <!-- child container - start -->

      <template v-if="schema.type == 'array'">
        <span v-html="spacify(indent + 1)"></span>

        <EditableJsonEntity
          :indent="indent + 1"
          :injectedSchema="schema.childKey"
          baseName="<array-item>"
          @schema-modified="schemaModifiedFromChild"
        />
      </template>

      <template v-else-if="schema.type == 'object'">
        <span v-for="key in Object.keys(schema.keys)" :key="key">
          <span v-html="spacify(indent + 1)"></span>
          <span class="keyText">{{ key }}</span>
          <span class="colonText">:&nbsp;</span>
          <EditableJsonEntity
            :indent="indent + 1"
            :injectedSchema="schema.keys[key]"
            @schema-modified="schemaModifiedFromChild"
          />
        </span>
      </template>

      <!-- child container - start -->
    </template>
  </span>
</template>

<script>
export default {
  name: "EditableJsonEntity",
  props: {
    injectedSchema: {
      type: Object,
      value: null
    },
    indent: {
      type: Number,
      value: 0
    },
    baseName: {
      type: String,
      value: ""
    }
  },
  data() {
    return {
      schema: null
    };
  },
  watch: {
    injectedSchema: {
      immediate: true,
      handler(value) {
        this.schema = value;
      }
    }
  },
  methods: {
    spacify(indent) {
      indent = indent * 2;
      let str = "";
      while (indent--) {
        str += "&nbsp;";
      }
      return str;
    },
    schemaModified(e) {
      this.$emit("schema-modified");
    },
    schemaModifiedFromChild() {
      this.$emit("schema-modified");
    }
  }
};
</script>

<style lang="scss">
.editable-json-entity {
  * {
    font-size: 12px;
    line-height: 2.4;
    font-family: monospace !important;
  }

  .optionText {
    font-size: 10px;
    margin-right: 6px;
  }

  .baseNameText {
    color: rgb(196, 109, 218);
  }

  .keyText {
    color: rgb(255, 0, 106);
  }

  .typeText {
    color: rgb(21, 5, 168);
    font-weight: bold;
  }

  .colonText {
    font-weight: bold;
  }

  .input {
    border: 0;
    outline: 0;
  }
  .input:focus {
    outline: none !important;
  }

  .input {
    font-size: 12px;
    padding: 0px;
    margin: 2px;
    // margin-right: 6px;
    line-height: normal;
    // background-color: lightgrey;
    // text-decoration: underline;
    background: transparent;
    border-bottom: 1px solid lightgrey;
  }

  .minInput,
  .maxInput,
  .minLenInput,
  .maxLenInput {
    max-width: 60px;
    text-align: center;
  }

  .checkbox {
    line-height: normal;
  }

  .nameInput {
    text-align: center;
    min-width: 100px;
  }
}
</style>
