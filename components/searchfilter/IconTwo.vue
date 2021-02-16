<template>
	<div style="text-align: center;">
		<a class="text-center hover:text-yellow bg-gray-900 text-white rounded-full px-2 py-1 mr-2 movie">
			<font-awesome-icon :icon="['fas', 'film']"/>
			Movies
		</a>
		<a class="text-center bg-gray-900 text-white rounded-full px-2 py-1 mr-2 Tv-Shows">
			<font-awesome-icon :icon="['fas', 'video']"/>
			Tv-Shows
		</a>
	</div>
</template>
<style>
	.movie:hover {
		color: yellow !important;
	}
	.Tv-Shows:hover {
		color: yellow !important;
	}
</style>
