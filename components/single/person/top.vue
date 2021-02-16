<template>
	<div class="flex flex-wrap overflow-hidden mx-8 mt-4">
          <div class="flex flex-wrap overflow-hidden">
            <img src="~/assets/images/sdasd.jpg" class="rounded-2xl xl:h-92" />
            <img
              src="~/assets/images/mulan.jpg"
              class="rounded-full w-32 h-32 -mt-20 ml-20 person-img"
            />
            <h1 class="my-3 pt-1 dark:text-white">Millie Bobby Brown</h1>
            <div
              class="flex flex-wrap overflow text-sm bg-gray-900 rounded-full text-white my-3 mx-2 py-1 px-2"
            >
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.48182 8.10195C3.71739 7.53323 4.06268 7.01648 4.49796 6.58121C4.93323 6.14593 5.44998 5.80064 6.0187 5.56507C6.58742 5.3295 7.19696 5.20825 7.81254 5.20825C8.42812 5.20825 9.03766 5.3295 9.60638 5.56507C10.1751 5.80064 10.6918 6.14593 11.1271 6.58121L12.5 7.95413L13.873 6.58121C14.752 5.70213 15.9443 5.20826 17.1875 5.20826C18.4307 5.20826 19.623 5.70213 20.5021 6.58121C21.3812 7.46029 21.8751 8.65258 21.8751 9.89579C21.8751 11.139 21.3812 12.3313 20.5021 13.2104L12.5 21.2125L4.49796 13.2104C4.06268 12.7751 3.71739 12.2584 3.48182 11.6896C3.24625 11.1209 3.125 10.5114 3.125 9.89579C3.125 9.28022 3.24625 8.67067 3.48182 8.10195Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="">Add to Favourites</p>
            </div>
            <div class="m-3">
              	<font-awesome-icon :icon="['fab', 'instagram']" class="dark:text-white" style="margin-top: 7px;"/>
            </div>
            <div class="m-3">
            	<font-awesome-icon :icon="['fab', 'twitter']" class="dark:text-white" style="margin-top: 7px;"/>
            </div>
          </div>
        </div>
</template>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
