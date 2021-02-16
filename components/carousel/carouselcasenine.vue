<template>
	<div class="swiper-wrapper ">
	    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
       		<each-movie />
	    </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
      	<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
      <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
       		<each-movie />
      </div>
    </div>
</template>	
<script>
	import EachMovie from '@/components/searchfilter/movie/eachmovie';
	import Swiper, { Navigation, Pagination } from 'swiper'
	import 'swiper/swiper-bundle.css'

	export default {
		components: {
            EachMovie,
        }
	}
  </script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
