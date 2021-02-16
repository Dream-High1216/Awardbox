<template>

  <div class="flex overflow-hidden shadow-md">
    <div class="flex-1 mx-auto w-0 flex flex-col  xl:px-0 dark:bg-black">
      <div
        class="relative flex-shrink-0 h-16 border-b border-gray-200 flex shadow-md">
        <div class="flex-1 flex justify-between px-4 md:px-0">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label htmlFor="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-white">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-blacj-300 placeholder-gray-300 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm dark:bg-black"
                  placeholder="Search for Award-Winning Movies & Tv-Shows"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <div class="mr-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <label  class="switch">
              <input type="checkbox"  @click="toggle">
              <span class="slider round">
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";


export default {
  name: "swiper-example-multiple-slides-per-biew",
  title: "Multiple slides per view",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
   return{

   }
  },
  mounted() {
    $("#sm_sidebar_pa").css("display", "none");
    $("#sm_sidebar_ch").css("display", "none");
    $("#sm_sidebar_chh").css("display", "none");

    $(document).ready(function () {
      $(".morecontent").slice(0, 2).show();
      $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".morecontent:hidden").slice(0, 1).slideDown();
        if ($(".morecontent:hidden").length == 0) {
          $("#loadMore").text("No morecontent").addClass("nomorecontent");
        }
      });
      $(".morecontents").slice(0, 2).show();
      $("#loadMores").on("click", function(e){
        e.preventDefault();
        $(".morecontents:hidden").slice(0, 1).slideDown();
        if($(".morecontents:hidden").length == 0) {
          $("#loadMores").text("No morecontent").addClass("nomorecontent");
        }
      });
    });
  },
  methods: {
    displayMenu() {
      $("#menu").toggleClass("displayMenu");
    },
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    },
    signOut() {
      this.$store.commit("setUser", null);
      firebase.auth().signOut();
      localStorage.removeItem("email");
      localStorage.removeItem("emailVerifiedStatus");
      localStorage.removeItem("password");
      localStorage.removeItem("UID");
      this.$router.push("/");
    },
    stop() {
      console.log("STOP is called...");
      $("#sm_sidebar").removeClass("sm_sidebar");
      $("#sm_bg_gray_600").addClass("bg-gray-600");
    },
    disappear() {
      console.log("DISAPPEAR is called...");
      $("#sm_bg_gray_600").removeClass("bg-gray-600");
      $("#sm_sidebar").addClass("sm_sidebar");
    },
    displaySmSidebar() {
      $("#sm_sidebar_pa").css("display", "block");
      $("#sm_sidebar_ch").css("display", "block");
      $("#sm_sidebar_chh").css("display", "flex");

      $("#sm_sidebar_chh").removeClass("load_left");
      $("#sm_sidebar_chh").addClass("load_right");
    },
    closeSmSidebar() {
      $("#sm_sidebar_chh").removeClass("load_right");
      $("#sm_sidebar_chh").addClass("load_left");
      setTimeout(() => {
        $("#sm_sidebar_pa").css("display", "none");
        $("#sm_sidebar_ch").css("display", "none");
        $("#sm_sidebar_chh").css("display", "none");
      }, 500);
    },
    stranger() {
      $(".middle").css("display", "none");
    },
  },
};
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>
