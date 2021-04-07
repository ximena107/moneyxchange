<template>
  <button
    class="flex bg-primary text-white px-12 py-3 text-xs focus:outline-none disabled:opacity-50 items-center justify-center"
    :disabled="disabled"
    @click="$emit('on-click')"
  >
    <span>{{ text }}</span>
    <div v-html="checkSvg" class="fill-current text-white w-3 h-3 ml-1"></div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    disabled: Boolean
  },
  computed: {
    checkSvg() {
      const src = require(`assets/img/check.svg?raw`);
      return src;
    }
  }
};
</script>
