<template>
	<div class="mx-3">
		<person-top />
		<div class="flex flex-wrap overflow-hidden moreflex mx-6 moreflex">
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
			<div class="md:w-1/6 p-2 morecontent">
				<per-movie />
			</div>
		</div>
		<a href="#" id="loadMore" class="flex">Load more</a>
	</div>
</template>
<script>
	import PersonTop from '@/components/single/person/top';
	import PerMovie from '@/components/searchfilter/movie/per-movie';
	export default {
		components: {
			PersonTop,
			PerMovie
		},
		mounted() {
			 $(".morecontent").slice(0, 18).show();
		      $("#loadMore").on("click", function(e){
		        e.preventDefault();
		        $(".morecontent:hidden").slice(0, 6).slideDown();
		        if($(".morecontent:hidden").length == 0) {
		          $("#loadMore").text("No more").addClass("nomorecontent");
		        }
		      });
		}
	}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>