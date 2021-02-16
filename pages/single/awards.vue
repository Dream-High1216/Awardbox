<template>
	<div>
    
    <award-top />
    
   <div class="flex flex-wrap overflow-hidden moreflex mx-8">
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                      <per-award-black />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>  
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                      <per-award-black />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>  
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-white />
                    </div>
                    <div class="xl:w-1/4 md:w-1/2 sm:w-1/1 morecontent">
                        <per-award-black />
                    </div>
                    
                    <a href="#" id="loadMore">Load More</a>
        </div> 
    </div>
</template>	
<script>
    import AwardTop from '@/components/single/award/awardtop';
    import PerAwardBlack from '@/components/single/award/peraward-black';
    import PerAwardWhite from '@/components/single/award/peraward-white';

export default {
	components: {
        AwardTop,
        PerAwardBlack,
        PerAwardWhite,
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
          $(".morecontent").slice(0, 12).show();
          $("#loadMore").on("click", function (e) {
            e.preventDefault();
            $(".morecontent:hidden").slice(0, 4).slideDown();
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
