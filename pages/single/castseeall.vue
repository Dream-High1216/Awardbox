<template>
	<div class="mx-3">
    <mac-adver />
    <div class="dark:text-white text-lg">
      The SpongeBob Movie: Sponge on the Run (2020)
    </div>
    <div class="dark:text-white text-base">
      Cast & Crew
    </div>
    <div class="flex">
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="flex">
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>
          <div class="w-1/5">
            <per-actor />
          </div>  
        </div>
      </div>
    </div>
    
  </div>
</template>	
<script>
    import MacAdver from '@/components/single/Macadver';
    import PerActor from '@/components/actorlist/actor';

export default {
	components: {
        MacAdver,
        PerActor,
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
