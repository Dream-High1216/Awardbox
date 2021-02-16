<template>
	<div class="flex flex-wrap overflow-hidden mb-4">
		<div class="sm:w-2/5">
			<img src="@/assets/images/readmore-test-image-1.png" class="p-1 rounded-xl">
		</div>
		<div class="md:w-3/5 dark:text-white pr-5 pl-2 py-1 news">
			<p>Eternal Sunshine of the Spotless Mind(2014)</p>
			<p class="text-sm mt-2">Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine nostros. Servari enim iustitia nisi a forti viro, nisi a sapiente non potest... Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine nostros. Servari enim iustitia nisi a forti viro, nisi a sapiente non potest...
				<span class="Readmore-text hide">

					Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine nostros. Servari enim iustitia nisi a forti viro, nisi a sapiente non potest... Laelius clamores sofòw ille so lebat Edere compellans gumias ex ordine nostros. Servari enim iustitia nisi a forti viro, nisi a sapiente non potest...
				</span>

				<a
                  data-show="Readmore"
                  Readmore-collapse="false"
                  href="/"
                  class="showReadmore"
                  >
                  Readmore
                  </a>
			 </p>
		</div>
	</div>
</template>
<script>
	export default {
		mounted() {
			$('[data-show="Readmore"]').on("click", function (event) {
		      event.preventDefault();
		      if ($(this).attr("Readmore-collapse") === "false") {
			        $(this).attr("Readmore-collapse", "true");
			        $(this).prev(".Readmore-text").removeClass("hide");
			        $(this).text("Readless");
		      } else {
		        $(this).text("Readmore");
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
<!-- <template>
	<div>i love you really love you</div>
</template> -->