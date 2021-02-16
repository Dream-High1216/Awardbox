<template>
	<div>
    <person-top />    
    <text-part />
    <mac-adver />
        <div class="flex flex-wrap overflow-hidden mx-8 my-3">
          <div class="flex-1">
            <div class="text-xl dark:text-white">
              What <span class="font-bold">Awards</span> has Millie Bobby Brown won?
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
          <div class="flex-1">
            <div class="text-xl dark:text-white">What Nominations has Millie Bobby Brown got?</div>
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
    import PersonTop from '@/components/single/person/top';
    import FiveAcademy from '@/components/single/fiveacademy';
    import TextPart from '@/components/single/person/text';
    import MacAdver from '@/components/single/Macadver';
    import SeeAll from '@/components/buttons/seeall';
    import AwardBox from '@/components/single/person/award';

export default {
	components: {
        PersonTop,
        FiveAcademy,
        TextPart,
        MacAdver,
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
        $(document).ready(function () {
          $(".morecontent").slice(0, 4).show();
          $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".morecontent:hidden").slice(0, 2).slideDown();
            if ($(".morecontent:hidden").length == 0) {
              $("#loadMore").text("No morecontent").addClass("nomorecontent");
            }
          });
        });
	}
}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
