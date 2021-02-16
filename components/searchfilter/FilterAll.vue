<template>
	<div>
		<div class="shadow-md mx-3 dark:bg-gray-900 rounded-lg dark:text-white">
			<p class="text-xl p-2">Sort</p>

			<p class="text-sm p-2">Sort Result By</p>
			<div class="DemoBS2 pb-2">
			 	<!-- toggle part here -->
			    <button type="button" class="mx-2 px-2 text-sm flex rounded-full" style="width: 92%; outline: none; border: solid 1px black;" id="toggle-btn" data-toggle="collapse" data-target="#toggle-example">
			    	Awards Descending
			    	<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 ml-4"/>
			    </button>
			 
			    <div id="toggle-example" class="collapse show in p-2 m-2">
			      <p class="text-sm">Awards Ascending </p>
			      <p class="text-sm">Release Date Descending </p>
			      <p class="text-sm">Release Ascending</p>
			      <p class="text-sm">Title (A-Z) </p>
			      <p class="text-sm">Title (Z-A)</p>
			  	</div>
			</div>
		</div>
		<div class="shadow-md mx-3 dark:bg-gray-900 rounded-lg dark:text-white my-3">
			<div class="DemoBS2 pb-2">
			 	<!-- toggle part here -->
			    <button type="button" class="mx-2 flex rounded-full" style="outline: none" id="toggle-btn" data-toggle="collapse"  data-target="#toggle-filters">

			    	<p class="text-xl mr-4">
			    		Filters
			    	</p>
			    	<font-awesome-icon :icon="['fas', 'sync-alt']" class=" ml-2" style="font-size: 9px;margin-top: 14px;margin-right: 3px;"/>
			    	<p class="text-xs mt-2">clear filter</p>
			    	<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-2 ml-2"/>
			    </button>
			 
			    <div id="toggle-filters" class="collapse show p-2 m-2">
			        <p class="text-sm">Show Me</p>
			      		<label class="checkbox-container">Everything
						  <input type="checkbox" checked="checked">
						  <span class="checkmark"></span>
						</label>
						<label class="checkbox-container">I Haven`t Seen
						  <input type="checkbox">
						  <span class="checkmark"></span>
						</label>
						<label class="checkbox-container">I Have Seen
						  <input type="checkbox">
						  <span class="checkmark"></span>
						</label>
					<p class="text-sm mt-4">Awards</p>
					  <div class="mytree text-sm" >
					    <!-- first tree option -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Academy Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- second tree option -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Emmy Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- 3 -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		BAFTA Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- 4 -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Cannes Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- 5 -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Berlin International Film Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- 6 -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Golden Globe Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					    <!-- 7 -->
					    <div>
					      	<p class="flex">
					      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
					      		Venice Film Festival Awards
					      	</p>
					      	<div>
						      	<p class="flex">
						      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
						      		Best Picture
						      	</p>
						         
						        	<div>
							          	<p class="flex">
								      		<font-awesome-icon :icon="['fas', 'caret-down']" class="mt-1 mr-2"/>
								      		Best Picture
								      	</p>
							            <div>two.2.1</div>
						          	</div>
					      		</div>
					    </div>
					  </div>

			      <p class="text-sm">
			      	<label class="checkbox-container mt-3">Winner
					  <input type="checkbox" checked="checked">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container mb-3">Nominee
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
			      </p>
			      <p class="text-sm">Awards Year</p>
			      <p class="text-sm mt-3">By Genre</p>
				    <div class="">
				      	<a class="text-sm bg-black rounded-full text-white px-1">Action</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Adventure</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Animation</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Comedy</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Crime</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Documentary</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Drama</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Family</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Fantasy</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">History</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Horror</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Music</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Mystery</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Romance</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Science Fiction</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Thriller</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">TV Movie</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">War</a>
				      	<a class="text-sm bg-black rounded-full text-white px-1">Western</a>
					</div>
					<p class="text-sm mt-4">
						By Known For
					</p>
					<label class="checkbox-container">Acting
					  <input type="checkbox" checked="checked">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Directing
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Visual Effects
					  <input type="checkbox" >
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Production
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Camera
					  <input type="checkbox" >
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Art
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Lighting
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Costume & Make-Up
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Sound
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Editing
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Crew
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<label class="checkbox-container">Writing
					  <input type="checkbox">
					  <span class="checkmark"></span>
					</label>
					<div class="text-sm">
						<p class="mt-4 mb-2">By Company</p>
						<div class="bg-black rounded-full dark:text-white px-2 my-1">Fox Film</div>
				      	<div class="bg-black rounded-full text-white px-2 my-1">Metro-Goldwyn-Mayer</div>
				      	<div class="bg-black rounded-full text-white px-2 my-1">Paramount Pictures</div>
				      	<div class="bg-black rounded-full text-white px-2 my-1">RKO Radio Pictures</div>
				      	<div class="bg-black rounded-full text-white px-2 my-1">United Artists</div>
					</div>
			  	</div>

			</div>
		</div>
		<div class="shadow-md mx-3 dark:bg-gray-900 rounded-lg dark:text-white my-3 px-2">
			<p class="text-xl mr-4">
			    Where to Watch
			</p>
			<p class="text-sm">Country</p>
			<form action="/">
			  <select name="cars" id="cars" class="text-sm w-full rounded-lg dark:text-black" style="outline: none; border: solid 1px;">
			    <option value="volvo">Germany</option>
			    <option value="saab">Canada</option>
			    <option value="opel">United State</option>
			    <option value="audi">France</option>
			    <option value="audi">England</option>
			  </select>
			</form>
			<div class="flex flex-wrap overflow-hidden">
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/prime.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/apple.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
				<div class="w-1/4 p-1">
					<img src="/_nuxt/assets/images/Awardsbox/netflix.png" alt="" class="rounded-lg shadow-md" data-v-2a183b29="">
				</div>
			</div>
		</div>
    </div>
</template>
<style scoped>
  @import '~/assets/css/styles.css';
</style>