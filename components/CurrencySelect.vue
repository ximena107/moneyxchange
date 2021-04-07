<template>
  <div class="flex">
    <img class="mr-1" :src="getImg" alt="" />
    <select
      class="font-bold bg-transparent focus:outline-none"
      name="to"
      id="to"
      v-model="value"
      @change="$emit('on-change', value)"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="COP">COP</option>
      <option value="GBP">GBP</option>
      <option value="CNY">CNY</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'currencySelect',
  props: {
    currency: String
  },
  data() {
    return {
      value: this.currency
    };
  },
  computed: {
    getImg() {
      const src = require(`../assets/img/flags/${this.value}.png`);
      return src;
    }
  }
};
</script>
