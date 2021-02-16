<template>
	<div class="swiper-wrapper ">
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
		<each-movie-desktop />
    </div>
</template>	
<script>
	import EachMovieDesktop from '@/components/searchfilter/movie/eachmovie-desktop'
	import Swiper, { Navigation, Pagination } from 'swiper'
	import 'swiper/swiper-bundle.css'

	export default {
		components: {
			EachMovieDesktop,
		}
	}
  </script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
