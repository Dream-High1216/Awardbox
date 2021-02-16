<template>
  <div class="h-screen flex overflow-hidden">
    <sidebar />
    <div class="flex-1 mx-auto w-0 flex flex-col  xl:px-0 dark:bg-black">
        <top />
        <div class="flex-1 relative overflow-y-auto focus:outline-none">
          <Nuxt />
          <Footer />
        </div>
        <div class="nav-bottom">
          <bottom />
        </div>
    </div>
  </div>
</template>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
