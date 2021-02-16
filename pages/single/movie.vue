<template>
	<div>
		<movie-drop />
        <share-modal ref="modalshare" />
        <div class="flex flex-wrap overflow-hidden content-center mx-8 pb-3">
            <div class="xl:w-2/4 md:w-2/4">
                <sponge-bob />
            </div>
            <div class="xl:w-1/4 md:w-1/4">
                <to-watch />
			</div>
            <div class="xl:w-1/4 md:w-1/4">
            	<div class="overflow-hidden shadow-md  rounded-lg mr-2 px-3 dark:bg-gray-900 py-3">
                    <div class="w-1/1 overflow-hidden my-2 mx-4">
                        <div class="flex bg-black text-white rounded-full p-1">
                            <font-awesome-icon :icon="['fas', 'heart']" class="pt-1"/>
                            <h1 class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1">Add to Favourites</h1>
                        </div>
                    </div>                   
                    <div class="w-1/1 overflow-hidden my-2 mx-4">
                        <div class="flex bg-black text-white rounded-full p-1 ">
                            <font-awesome-icon :icon="['fas', 'plus']" class="pt-1"/>
                            <h1 class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1">Add to Watchlist</h1>
                        </div>
                    </div> 
                    <div class="w-1/1 overflow-hidden my-2 mx-4">
                        <div class="flex bg-black text-white rounded-full p-1">
                            <font-awesome-icon :icon="['fas', 'check']" class="pt-1"/>
                            <h1 class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1">Seen it</h1>
                        </div>
                    </div>                   
                    <div class="w-1/1 overflow-hidden mt-2 mb-1 mx-4">
                        <div class="flex bg-black text-white rounded-full p-1 ">
                            <font-awesome-icon :icon="['fas', 'share-alt']" class="pt-1"/>
                            <h1 class="text-base rounded-full dark:text-white transition duration-300 ease-in-out pl-1" @click="openModalshare">Share it</h1>
                        </div>
                    </div> 
    </div>
            </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8  my-3">
            <div class="xl:w-4/5">
                <div class="text-xl dark:text-white">What <span class="font-bold">Awards </span> have the The SpongeBob Movie: Sponge on the Run (2020)won?</div>
            </div>
			<div class="xl:w-1/5">
        		<a href="/single/movieaward">
                	<see-all />
                </a>
	        </div>            
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8 pb-3">
            <five-academy />
            <five-academy />
            <five-academy />
            <five-academy />
            <five-academy />
        </div>

        <div class="flex flex-wrap overflow-hidden mx-8  my-3">
            <div class="xl:w-4/5">
                <div class="text-xl dark:text-white">What <span class="font-bold">Nominations </span> have the The SpongeBob Movie: Sponge on the Run (2020)?</div>
            </div>
            <div class="xl:w-1/5">
                <a href="/single/movieaward">
                	<see-all />
                </a>
            </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8 pb-3">
           	<flag-academy />
           	<flag-academy />
           	<flag-academy />
           	<flag-academy />
           	<flag-academy />
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8 pb-3">
            <div class="xl:w-2/5"> 
                <div class="flex flex-wrap overflow-hidden mx-2 my-3">
                    <div class="xl:w-4/5">
                        <div class="text-xl dark:text-white">Cast & Crew</div>
                    </div>
                    <div class="xl:w-1/5">
                        <see-all />
                    </div>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md  rounded-lg mr-2 px-3 py-4 dark:bg-gray-900">
                    <actor-eight />
                    <actor-eight />
                </div>           
            </div>

             <div class="xl:w-3/5"> 
                <div class="flex flex-wrap overflow-hidden mx-2 my-3">
                    <div class="xl:w-4/5">
                        <div class="text-xl dark:text-white">Related Award Winning Movies</div>
                    </div>
                    <div class="xl:w-1/5">
                        <see-all />
                    </div>
                </div>
                <div class="flex flex-wrap overflow-hidden rounded-lg mr-2 px-3 pt-2">
                    <div class="xl:w-1/3 px-1">
                        <per-movie />
                    </div>
                    <div class="xl:w-1/3 px-1">
                        <per-movie />
                    </div>
                    <div class="xl:w-1/3 px-1">
                        <per-movie />
                    </div>
                    
                </div>           
            </div>
        </div>
	</div>
</template>	
<script>
import MovieDrop from '@/components/single/moviebackdrop';
import SpongeBob from '@/components/single/SpongeBobMovie';
import ToWatch from '@/components/single/wheretowatch';
import AddFavo from '@/components/single/addfavourite';
import FiveAcademy from '@/components/single/fiveacademy';
import SeeAll from '@/components/buttons/seeall';
import FlagAcademy from '@/components/single/flagacademy';
import ActorEight from '@/components/actorlist/actorforeight';
import PerMovie from '@/components/searchfilter/movie/per-movie';
import ShareModal from '@/components/user/sharemodal';
export default {
	components: {
		MovieDrop,
		SpongeBob,
		ToWatch,
		AddFavo,
		FiveAcademy,
		SeeAll,
		FlagAcademy,
		ActorEight,
		PerMovie,
        ShareModal
	},
    methods: {
        openModal() {
           this.$refs.modal.show() 
         },
         openModalshare() {
           this.$refs.modalshare.show() 
         }
      },
	mounted (){
		$('[data-show="Readmore"]').on("click", function (event) {
	      event.preventDefault();
	      if ($(this).attr("Readmore-collapse") === "false") {
	        $(this).attr("Readmore-collapse", "true");
	        $(this).prev(".Readmore-text").removeClass("hide");
	        $(this).text("...");
	      } else {
	        $(this).text("...");
	        $(this).attr("Readmore-collapse", "false");
	        $(this).prev(".Readmore-text").addClass("hide");
	      }
	    });
	}
}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
