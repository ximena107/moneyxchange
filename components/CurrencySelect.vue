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
      <option :key="option.value" :value="option.value" v-for="option in options">{{ option.text }}</option>
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
      value: this.currency,
      options: []
    };
  },
  methods: {
    getCurrencyOptions() {
      this.options = [
        { text: 'USD', value: 'USD' },
        { text: 'EUR', value: 'EUR' },
        { text: 'COP', value: 'COP' },
        { text: 'GBP', value: 'GBP' },
        { text: 'CNY', value: 'CNY' }
      ];
    }
  },
  computed: {
    getImg() {
      const src = require(`../assets/img/flags/${this.value}.png`);
      return src;
    }
  },
  created() {
    this.getCurrencyOptions();
  }
};
</script>
