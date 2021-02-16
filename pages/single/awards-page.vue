<template>
	<div>
        <award-top />
        <award-des />
        <div class="mx-3 px-3">
            <div class="swiper-container carousel-5 my-2">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                </div>
            </div>
            <div class="swiper-container carousel-5 my-2">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                </div>
            </div>  
            <div class="swiper-container carousel-5 my-2">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                </div>
            </div>  
            <div class="swiper-container carousel-5 my-2">
                <div class="swiper-wrapper ">
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                    <div class="swiper-slide flex flex-col my-1 overflow-hidden thumb" >
                        <per-movie />
                    </div>
                </div>
            </div>  
                      
        </div>
    </div>
</template>	
<script>
    import AwardTop from '@/components/single/award/awardtop';
    import PerMovie from '@/components/searchfilter/movie/per-movie'
    import AwardDes from '@/components/single/award/description';
    import CarouselCase from '@/components/carousel/carouselcasenine';
    import Swiper, { Navigation, Pagination } from 'swiper';
    import 'swiper/swiper-bundle.css';


export default {
	components: {
        AwardTop,
        AwardDes,
        CarouselCase,
        PerMovie
	},
	mounted (){
         new Swiper ( '.carousel-5',{
                slidesPerView: 5,
                spaceBetween: 30,
                pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              breakpoints: {
                  320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1424: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                },
            })
	}
}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
