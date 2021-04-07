<template>
  <div
    class="mt-4 px-8 py-8 sm:py-12 bg-secondary sm:fixed bottom-0 w-full flex justify-between flex-col sm:flex-row sm:h-48"
  >
    <div class="flex justify-center flex-col mb-6 sm:mb-0">
      <div class="flex items-center mb-5">
        <img src="../assets/img/logo.png" class="h-8 mr-3" />
        <img src="../assets/img/name-blue-white.png" class="h-3" />
      </div>
      <div class="text-gray-400 text-xs">Copyright &copy; X Echeverri 2021</div>
    </div>

    <div class="flex flex-col justify-between text-gray-400 text-xs mb-6 sm:mb-0 h-24 min-h-full">
      <NuxtLink to="/exchange">EXCHANGE</NuxtLink>
      <NuxtLink to="/rates">RATES</NuxtLink>
      <NuxtLink to="/about">ABOUT</NuxtLink>
      <NuxtLink to="/contact">CONTACT </NuxtLink>
    </div>

    <div class="flex flex-col justify-between text-gray-400 text-xs mb-6 sm:mb-0 h-24 min-h-full">
      <div class="flex items-center">
        <img src="../assets/img/social/facebook.png" class="h-4 mr-1" />
        <a href="http://facebook.com" target="blank">Facebook</a>
      </div>
      <div class="flex items-center">
        <img src="../assets/img/social/twitter.png" class="h-4 mr-1" />
        <a href="http://twitter.com" target="blank">Twitter</a>
      </div>
      <div class="flex items-center">
        <img src="../assets/img/social/linkedin.png" class="h-4 mr-1" />
        <a href="http://linkedin.com" target="blank">Linkedin</a>
      </div>
      <div class="flex items-center">
        <img src="../assets/img/social/youtube.png" class="h-4 mr-1" />
        <a href="http://youtube.com" target="blank">Youtube</a>
      </div>
    </div>

    <div class="flex flex-col text-white text-xs mb-6 sm:mb-0">
      <div>SUSCRIBE</div>
      <div class="text-gray-400 text-xs my-2">Receive offers when prices are low!</div>
      <div class="w-full flex">
        <input class="h-8 p-3 bg-white bg-opacity-10 w-3/4" type="text" placeholder="Email" disabled />
        <button class="bg-tertiary text-white h-8 px-4" disabled>OK</button>
      </div>
    </div>

    <div class="flex flex-col justify-between text-gray-400 text-xs mb-6 sm:mb-0 h-24 min-h-full">
      <span>Antioquia, Colombia</span>
      <span>Calle 45 # 10 - 12</span>
      <span>Medellín, 050001.</span>
      <span class="text-primary">hola@xecheverri.com</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
a {
  @apply hover:text-primary;
}

.nuxt-link-active {
  @apply text-white hover:text-white;
}
</style>
