<template>
	<div>	
        <div class="my-3">
			<icon-two />
        </div>
        <div class="movie-list hidden">
        	<div class="flex flex-wrap mx-3  ">
        		<div class="md:w-1/6">
        			<filter-all-case />	
        		</div>
        	<div class="md:w-5/6">
        			<movies-show-case />
        			<movies-show-case />
        			<movies-show-case />
        			<movies-show-case />
        			<movies-show-case />
        			<movies-show-case />
        	</div>
        	</div>
        </div>
        <div class="Tv-Shows-list hidden">
        	<div class="flex flex-wrap mx-3  ">
        		<div class="md:w-1/6">
	        		<filter-all-case />	
        		</div>
			    	<div class="md:w-5/6">
			    		<tv-show />
			    		<tv-show />
			    		<tv-show />
			    		<tv-show />
			    	</div>
        	</div>
        </div>
	</div>
</template>	
<script>
import FilterAllCase from '@/components/searchfilter/FilterAll';
import IconTwo from '@/components/searchfilter/IconTwo';
import MoviesShowCase from '@/components/searchfilter/movie/MoviesShow';
import TvShow from '@/components/searchfilter/movie/TvShow'
export default {
	components: {
		FilterAllCase,
		IconTwo,
		MoviesShowCase,
		TvShow,
	},
	mounted () {
		$(document).ready(function () {
			$(".movie-list").css("display", "block");
			$(".movie").click(function () {
				hideAll();
				$(".movie-list").css("display", "block");
			});
			$(".Tv-Shows").click(function () {
				hideAll();
				$(".Tv-Shows-list").css("display", "block");
			});
			function hideAll() {
				$(".movie-list").css("display", "none");
				$(".Tv-Shows-list").css("display", "none")	
			}
		});
		$(document).ready(function(){
		    $("#toggle-btn").click(function(){
		      $("#toggle-example").collapse('toggle'); // toggle collapse
		    });
		});
		$(function() {
		    $('div.mytree div:has(div)').addClass('parent');
		    $('div.mytree div').click(function() {
		        var thistree = $(this);
		        thistree.children('div').slideToggle('slow');
		        thistree.filter('.parent').toggleClass('expanded');
		        return false;
		    });
		});
	}
}	
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
