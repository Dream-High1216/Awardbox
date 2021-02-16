<template>
	<div class="flex flex-wrap overflow-hidden">
		<div class="md:w-1/2">
			<div class="flex flex-wrap overflow-hidden">
                               
				<div class="w-1/4 p-2">
					 <per-movie />
				</div>
				<div class="w-1/4 p-2">
					<per-movie />
				</div>
				<div class="w-1/4 p-2">
					<per-movie />
				</div>
				<div class="w-1/4 p-2">
					<per-movie />
				</div>
			</div>
        	</div>
            <div class="md:w-1/2">
                <div class="flex flex-wrap overflow-hidden">
                       
                    <div class="w-1/4 p-2">
                            <per-movie />
                    </div>
                    <div class="w-1/4 p-2">
                            <per-movie />
                    </div>
                    <div class="w-1/4 p-2">
                            <per-movie />
                    </div>
                    <div class="w-1/4 p-2">
                            <per-movie />
                    </div>
                </div>
            </div>
	</div>
</template>
<script>
   import EachMovie from '@/components/searchfilter/movie/eachmovie';
   import PerMovie from '@/components/searchfilter/movie/per-movie'
   export default {
        components: {
                EachMovie,
                PerMovie
        }
   }
</script>