<template>
  <div class="h-screen flex overflow-hidden">
    <sidebar />
    <div class="flex-1 mx-auto w-0 flex flex-col  xl:px-0 dark:bg-black">
        <top />
      <div class="flex-1 relative overflow-y-auto focus:outline-none maincolor px-3">
        <Nuxt />
      </div>
    </div>
  </div>
</template>