<template>
  <div
    class="min-h-screen bg-auto sm:pb-48"
    :style="{
      'background-image': `url(${require('@/assets/img/background.png')})`
    }"
  >
    <Header />
    <Nuxt class="p-8" />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: 'Montserrat', sans-serif;
}
</style>
