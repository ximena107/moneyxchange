<template>
  <div class="flex flex-col items-center">
    <div class="sm:hidden text-white mb-8">EXCHANGE</div>
    <div class="text-gray-400 max-w-xl flex items-center justify-center mb-10 text-center">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
    </div>
    <div class="md:flex w-full max-w-2xl">
      <div class="bg-white p-10 w-full">
        <div>
          <CurrencySelect @on-change="setFromValue" :currency="from" />
        </div>
        <div>
          <currency-input
            class="border-b-2 w-11/12 my-3 text-3xl text-gray-700 focus:outline-none"
            v-model="amount"
            :currency="from"
            locale="en-US"
          />
        </div>
        <div class="my-3">
          <div class="text-gray-400 text-xs">Exchange Rate</div>
          <div class="text-lg font-medium">${{ rate }}</div>
        </div>
        <div class="text-gray-400 text-xs">
          <span> Transaction Fee</span>
          <span class="text-gray-700 font-medium">$0.23</span>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="absolute bg-primary p-3 rounded-full transform sm:-rotate-90">
          <div v-html="arrowSvg" class="fill-current text-white w-4 h-4"></div>
        </div>
      </div>

      <div class="bg-gray-100 p-10 w-full">
        <CurrencySelect @on-change="setToValue" :currency="to" />
        <currency-input
          disabled
          class="border-b-2 w-11/12 my-3 text-3xl text-gray-700 focus:outline-none"
          v-model="result"
          :currency="to"
          locale="en-US"
        />
        <div class="text-gray-400 text-xs my-6">
          <span> Transaction Fee</span>
          <span class="text-gray-700 font-medium">$0.23</span>
        </div>
        <div>
          <Button text="EXCHANGE" @on-click="convert()" :disabled="!amount" />
        </div>
      </div>
    </div>
    <div class="flex py-6">
      <img class="w-9/12 sm:w-10/12" src="../assets/img/graph.png" alt="" />
      <div class="ml-4">
        <div class="mb-3">
          <div class="text-gray-400 text-xs">Exchange Rate</div>
          <div class="font-medium text-white">${{ rate }}</div>
        </div>

        <div>
          <div class="text-gray-400 text-xs">Information Retrieved</div>
          <div class="font-medium text-white" v-if="lastUpdate">{{ lastUpdate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
import CurrencySelect from '../components/CurrencySelect';
import moment from 'moment';

export default {
  name: 'Exchange',
  data() {
    return {
      from: 'USD',
      to: 'EUR',
      amount: 0,
      result: 0,
      rate: 0,
      lastUpdate: 0
    };
  },
  components: {
    Button,
    CurrencySelect
  },
  methods: {
    async convert() {
      if (!this.from || !this.to || !this.amount) return;
      const res = await fetch(
        `https://api.exchangerate.host/convert?from=${this.from}&to=${this.to}&amount=${this.amount}`
      );
      const data = await res.json();

      this.result = +data.result.toFixed(2);
      this.rate = data.info.rate.toFixed(2);
      this.lastUpdate = moment(new Date(), 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY HH:mm:ss');

      return data;
    },
    setFromValue(value) {
      this.from = value;
      this.result = 0;
    },
    setToValue(value) {
      this.to = value;
      this.result = 0;
    }
  },
  computed: {
    arrowSvg() {
      const src = require(`assets/img/arrow-right.svg?raw`);
      return src;
    }
  }
};
</script>
