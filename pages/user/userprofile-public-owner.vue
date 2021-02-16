<template>
	<div class="mx-3">
    <person-top />
    <modal ref="modal" />
    <per-tv-gray-modal ref="modalfor"/>
        <div class="flex flex-wrap overflow-hidden mx-8">
          <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
            <div class="flex my-3 pl-1">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Watchlists</div>
                <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't created a Watchlist</div>
            </div> 
            <div class="flex flex-wrap overflow-hidden">
                <div class="w-1/2 zhuan" @click="openModal">
                  <per-watchlist />  
                </div>
                <div class="w-1/2 zhuan" @click="openModal">
                  <per-watchlist />  
                </div>
            </div>   
            <div class="flex my-2 pl-1 mt-5">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite TV-Shows</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Tv-Show</div>
            </div>
            <div class="flex flex-wrap overflow-hidden rounded-lg">
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
                    <div class="w-1/3 px-1 my-2 " @click="openModalfortv" >
                      <per-tv-gray />
                    </div>
            </div>
            <div class="flex my-2 pl-1">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite Actors</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Actors</div>
            </div>
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontent">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <a href="#" id="loadMore" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>
            <div class="flex my-2">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite Editors</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Editors</div>
            </div>
            
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <a href="#" id="loadMores" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>
          </div>
          <div class="xl:w-1/2 md:w-1/2 sm:w-1/1 px-2">
            <div class="flex my-2">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite Movies</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Movies</div>
            </div>
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>                
                
                <a href="#" id="loadMoress" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>
            <div class="flex my-2">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Seen It</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added Seen It</div>
            </div>
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>
                <div class="w-1/3 morecontentsss">
                  <div class="flex flex-wrap overflow-hidden px-1" @click="openModalfortv">
                      <per-tv-gray />
                  </div>
                </div>                
                
                <a href="#" id="loadMoresss" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>
            <div class="flex my-2">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite Directors</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Directors</div>
            </div>
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontents">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <div class="w-1/5 p-1 morecontentfour">
                  <img src="~/assets/images/actorupload.png" class="rounded-full">
                  <h1 class="text-center text-sm dark:text-white ">
                  </h1>
                </div>
                <a href="#" id="loadMorefour" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>
            <div class="flex my-2">
              <div class="text-lg dark:text-white" style="margin-top: -4px">Favourite Awards</div>
              <div class="text-sm bg-gray-900 rounded-full text-white px-2 mx-2">The user hasn't added favourite Awards</div>
            </div>
            <div class="flex flex-wrap overflow-hidden moreflex">
                <div class="w-1/2 morecontentfive">
                  <per-watchlist />  
                </div>
                <div class="w-1/2 morecontentfive">
                  <per-watchlist />  
                </div>
                <div class="w-1/2 morecontentfive">
                  <per-watchlist />  
                </div>
                <div class="w-1/2 morecontentfive">
                   <per-watchlist />  
                </div>
                <div class="w-1/2 morecontentfive">
                   <per-watchlist />  
                </div>
                <div class="w-1/2 morecontentfive">
                  <per-watchlist />  
                </div>               
                
                <a href="#" id="loadMorefive" class="flex"><font-awesome-icon :icon="['fas', 'chevron-down']" style="margin-right: 7px;padding-top: 2px;"/>Expand</a>
            </div>  
          </div>
        </div>    
  </div>
</template>	
<script>
  import PersonTop from '@/components/single/person/top';
  import WatchList from '@/components/user/watchlist';
  import PerWatchlist from '@/components/user/perwatchlist';
  import Modal from '@/components/user/modal';
  import PerTvGrayModal from '@/components/user/per-tvshow-gray-modal';
  import PerTvGray from '@/components/user/per-tvshow-gray';
export default {
	components: {
    PersonTop,
    WatchList,
    PerWatchlist,
    Modal,
    PerTvGrayModal,
    PerTvGray
	},
  data() {

  },
  methods: {
    openModal() {
       this.$refs.modal.show() 
     },
     openModalfortv() {
       this.$refs.modalfor.show() 
     }
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
      $(".morecontent").slice(0, 10).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".morecontent:hidden").slice(0, 5).slideDown();
        if ($(".morecontent:hidden").length == 0) {
          $("#loadMore").text("No more").addClass("nomorecontent");
        }
      });
      $(".morecontents").slice(0, 10).show();
      $("#loadMores").on("click", function(e){
        e.preventDefault();
        $(".morecontents:hidden").slice(0, 5).slideDown();
        if($(".morecontents:hidden").length == 0) {
          $("#loadMores").text("No more").addClass("nomorecontent");
        }
      });
      $(".morecontentss").slice(0, 3).show();
      $("#loadMoress").on("click", function(e){
        e.preventDefault();
        $(".morecontentss:hidden").slice(0, 3).slideDown();
        if($(".morecontentss:hidden").length == 0) {
          $("#loadMoress").text("No more").addClass("nomorecontent");
        }
      });
      $(".morecontentsss").slice(0, 3).show();
      $("#loadMoresss").on("click", function(e){
        e.preventDefault();
        $(".morecontentsss:hidden").slice(0, 3).slideDown();
        if($(".morecontentsss:hidden").length == 0) {
          $("#loadMoresss").text("No more").addClass("nomorecontent");
        }
      });
      $(".morecontentfour").slice(0, 10).show();
      $("#loadMorefour").on("click", function(e){
        e.preventDefault();
        $(".morecontentfour:hidden").slice(0, 5).slideDown();
        if($(".morecontentfour:hidden").length == 0) {
          $("#loadMorefour").text("No more").addClass("nomorecontent");
        }
      });
      $(".morecontentfive").slice(0, 4).show();
      $("#loadMorefive").on("click", function(e){
        e.preventDefault();
        $(".morecontentfive:hidden").slice(0, 2).slideDown();
        if($(".morecontentfive:hidden").length == 0) {
          $("#loadMorefive").text("No more").addClass("nomorecontent");
        }
      });
    });
	}
}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
