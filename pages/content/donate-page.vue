<template>
	<div>
		<movie-drop />
        <div class="flex flex-wrap overflow-hidden content-center mx-8 pb-3">
            <div class="xl:w-2/4 md:w-2/4">
                <sponge-bob />
            </div>
            <div class="xl:w-1/4 md:w-1/4">
                <to-watch />
			</div>
            <div class="xl:w-1/4 md:w-1/4">
            	<add-favo />
            </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8 shadow-md dark:bg-gray-900 dark:text-white rounded-lg px-3">
          <div class="xl:w-1/6 px-3 my-2">
                <img src="~/assets/images/spongebob.png" alt="">
          </div>
          <div class="xl:w-5/6">
                <div class="flex flex-wrap overflow-hidden mx-1 my-3">
                  <div class="flex-1">
                      <div class="text-base font-bold">Season 4</div>
                      <div class="text-base font-bold"> 2020 | 10 Episodes</div>
                  </div>
                  <div class="flex">
                      <see-all />
                  </div>
                </div>
                <div class="px-1">
                        Dr. Shaun Murphy continues to use his extraordinary medical gifts at St. Bonaventure Hospital’s surgical unit. As his romantic relationship with Lea deepens, he will also face new responsibilities as a fourth-year resident when he is put in charge of supervising a new set of residents that will test him in ways he cannot predict. Meanwhile, the team must deal with the uncertainty and pressure that the COVID-19 pandemic brings now that it has hit their hospital.
                </div>
                <div class="flex flex-wrap overflow0-hidden content-conter py-3">
                      <img src="~/assets/images/netflix.png" class="w-10 h-10">
                      <img src="~/assets/images/netflix.png" class="w-10 h-10">
                      <img src="~/assets/images/netflix.png" class="w-10 h-10">    
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
                        <each-movie />
                    </div>
                    <div class="xl:w-1/3 px-1">
                        <each-movie />
                    </div>
                    <div class="xl:w-1/3 px-1">
                        <each-movie />
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
import EachMovie from '@/components/searchfilter/movie/eachmovie';

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
		EachMovie
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
