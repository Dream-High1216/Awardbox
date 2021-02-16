<template>
	<div>
        <company-top />
        <div class="flex flex-wrap overflow-hidden mx-8 my-3">
          <div class="flex-1">
            <div class="text-xl dark:text-white">
              What <span class="font-bold">Awards</span> has Millie Bobby Brown won?
            </div>
          </div>
          <div class="flex">
            <a href="/single/company/company-award-seeall">
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
        <div class="flex flex-wrap overflow-hidden mx-8 my-3">
          <div class="flex-1">
            <div class="text-xl dark:text-white">
              What Nominations has Metro-Goldwyn-Mayer got?
            </div>
          </div>
          <div class="flex">
            <a href="/single/personaward">
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
        <div class="flex flex-wrap overflow-hidden mx-8 my-3">
          <div class="flex">
            <div class="text-xl dark:text-white">Millie Bobby Brown’s Awards and Nominations</div>
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden mx-8 pb-3 moreflex">
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
          <div class="xl:w-1/2 mt-1 morecontent">
            <award-box />
          </div>
        </div>  
        <a href="#" id="loadMore">Load More</a> 
    </div>
</template>	
<script>
    import CompanyTop from '@/components/single/award/company-top';
    import FiveAcademy from '@/components/single/fiveacademy';
    import SeeAll from '@/components/buttons/seeall';
    import AwardBox from '@/components/single/person/award';

export default {
	components: {
        CompanyTop,
        FiveAcademy,
        SeeAll,
        AwardBox
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
