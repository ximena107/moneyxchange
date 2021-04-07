<template>
  <div class="px-8 pt-6 sm:pt-12">
    <div class="justify-center hidden sm:flex">
      <img src="../assets/img/logo.png" class="w-8" />
    </div>
    <nav class="flex items-center justify-between flex-wrap bg-teal py-3">
      <div class="w-52 sm:hidden flex items-center">
        <img src="../assets/img/logo.png" class="w-6 mr-2" />
        <div>
          <img src="../assets/img/name-white-blue.png" alt="" />
        </div>
      </div>

      <div class="block sm:hidden">
        <button
          @click="toggleSideMenu()"
          class="text-white hover:text-primary"
        >
          <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto justify-center ml-2 md:ml-0"
      >
        <NuxtLink to="/exchange">EXCHANGE</NuxtLink>
        <NuxtLink to="/rates">RATES</NuxtLink>
        <div class="w-40 mx-6 hidden sm:block">
          <img src="../assets/img/name-white-blue.png" alt="" />
        </div>
        <NuxtLink to="/about">ABOUT</NuxtLink>
        <NuxtLink to="/contact">CONTACT </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleSideMenu() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
a {
  @apply w-min no-underline block mx-6 mt-4 sm:inline-block sm:mt-0 text-gray-400 hover:text-primary;
}

.nuxt-link-active {
  @apply sm:border-b-2 text-white hover:text-white;
}
</style>
