<template>

  <div class="h-screen flex overflow-hidden">
    <div class="hidden md:flex md:flex-shrink-0 left dark:bg-black">
      <div class="w-40 flex flex-col">
        <div
          class="border-r border-gray-200 pt-1 pb-4 flex flex-col flex-grow overflow-y-auto">
          <div class="flex-shrink-0 px-4 flex items-center">
            <logo />
          </div>
          <div class="flex-grow mt-2 flex flex-col">
            <nav class="flex-1 px-2 space-y-1">

              <a
                href="/"
                class="bg-gray-900 text-white group rounded-full py-1 px-2 flex items-center text-sm  leftbutton"
              >
                 <font-awesome-icon :icon="['fas', 'eye']"/>
                <p class="pl-2 ">Discover</p>
              </a>
              <a
                href="/"
                class="bg-gray-900 text-white group rounded-full py-1 px-2 flex items-center text-sm  leftbutton"
              >
                 <font-awesome-icon :icon="['fas', 'star']"/>
                <p class="pl-2 ">Awards Box</p>
              </a>

              <a
                href="/search-for-all"
                class="bg-gray-900 rounded-full text-white hover:bg-gray-50 hover:text-yellow-300 group rounded-md py-1 px-2 flex items-center text-sm  leftbutton">
                 <font-awesome-icon :icon="['fas', 'search']"/>
                <p class="pl-2">Search for All</p>
              </a>

              <a
                href="#"
                class="bg-gray-900 rounded-full text-white hover:bg-gray-50 hover:text-yellow-300 group rounded-md py-1 px-2 flex items-center text-sm  leftbutton"
              >
                  <font-awesome-icon :icon="['fas', 'book-open']"/>
                  <p class="pl-2">
                    Bolg
                  </p>
              </a>

              <a
                href="#"
                class="bg-gray-900 rounded-full text-white hover:bg-gray-50 hover:text-yellow-300 group rounded-md py-1 px-2 flex items-center text-sm  leftbutton">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9249 0H2.07511C0.929057 0 0 0.929057 0 2.07511V21.9249C0 23.0709 0.929057 24 2.07511 24H21.9249C23.0709 24 24 23.0709 24 21.9249V2.07511C24 0.929057 23.0709 0 21.9249 0Z" fill="#181818"/>
                    <path d="M20.5243 4.85448C21.4039 4.85448 22.1169 4.14143 22.1169 3.26184C22.1169 2.38224 21.4039 1.66919 20.5243 1.66919C19.6447 1.66919 18.9316 2.38224 18.9316 3.26184C18.9316 4.14143 19.6447 4.85448 20.5243 4.85448Z" fill="#5A5A5A"/>
                    <path d="M19.6606 3.23864C14.4565 8.68372 8.75517 14.8101 3.53628 20.2773C3.43529 20.3832 3.72581 20.6578 3.94888 20.7093C5.7729 21.1288 16.2512 17.9262 19.6478 21.1963C20.0524 21.5857 19.7768 20.8919 19.8017 20.8881C19.8771 20.8774 19.8598 21.1932 19.9182 21.1503C20.0064 21.0859 20.0417 21.0859 20.1389 21.0673C20.1569 21.0638 20.0797 20.9262 20.1776 20.9815C20.1953 20.9919 20.2149 20.9987 20.2352 21.0013C20.2556 21.004 20.2762 21.0025 20.296 20.9969C20.3157 20.9914 20.3341 20.9819 20.3501 20.969C20.3661 20.9561 20.3793 20.9401 20.3889 20.922L20.3927 20.9144C20.4032 20.8945 20.409 20.8725 20.4097 20.8501L20.9482 3.70069C20.9512 3.60749 20.9229 3.51596 20.8678 3.44073C20.8127 3.3655 20.7339 3.31091 20.6442 3.28567L20.0777 3.1252C20.0044 3.1047 19.9269 3.10442 19.8535 3.1244C19.78 3.14437 19.7134 3.18384 19.6606 3.23864Z" fill="#FFDD22"/>
                    <path d="M11.8183 22.6407C16.5678 22.6407 20.4179 21.8073 20.4179 20.7793C20.4179 19.7513 16.5678 18.918 11.8183 18.918C7.06892 18.918 3.21875 19.7513 3.21875 20.7793C3.21875 21.8073 7.06892 22.6407 11.8183 22.6407Z" fill="#FFF2A5"/>
                    <path d="M20.1113 4.8544C20.6981 4.8544 21.1737 4.37873 21.1737 3.79195C21.1737 3.20517 20.6981 2.72949 20.1113 2.72949C19.5245 2.72949 19.0488 3.20517 19.0488 3.79195C19.0488 4.37873 19.5245 4.8544 20.1113 4.8544Z" fill="#DEDEDE"/>
                </svg>

                  <p class="pl-2">
                  Abouts
                </p>
                
              </a>
            </nav>
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
