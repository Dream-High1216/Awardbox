<template>
  <div>
    <person-top />
    <div class="moreflex">
            <div class="morecontent">
                <div class="text-xl mx-8 my-3 dark:text-white">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                      <h1 class="object-center">
                        The SpongeBob Movie: Sponge on the Run (2020) won 15 <span class="font-bold">Awards</span> 
                      </h1>
                    </div>
                </div>
                <six-star />
            </div>
            <div class="morecontent">
                <div class="text-xl dark:text-white mx-8 my-3">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win at the Academy Awards?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                    <h1 class="object-center">The SpongeBob Movie: Sponge on the Run (2020) won<span class="font-bold">15 Oscar</span> </h1>
                    </div>
                </div>
                <six-star />
            </div>
            <div class="morecontent">
                <div class="text-xl dark:text-white mx-8 my-3">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win at the Academy Awards?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                    <h1 class="object-center">The SpongeBob Movie: Sponge on the Run (2020) won<span class="font-bold">15 Oscar</span> </h1>
                    </div>
                </div>
                <six-star />
            </div>

            <a href="#" id="loadMore">...Load More</a>
        </div>
        <div class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl my-5">
            <div class="md:flex">
              <div class="md:flex">
                <img
                  class="h-39 w-full md:w-55"
                  src="~/assets/images/Awardsbox/mac.png"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-6">
                <a
                  href="#"
                  class="block mt-1 text-lg leading-tight font-bold text-xl text-black hover:underline"
                  >While staying at home</a
                >
                <p class="mt-2 text-gray-800 text-sm mb-8">
                  Take care of your mac! Unclutter and speed up your machine with
                  CleanMyMac X.
                </p>
                <hr class="text-black" />
                <div class="flex">
                  <p class="mt-2 text-gray-900 flex-1">CleanMyMac X</p>
                  <p class="flex-none"></p>
                  <p class="mt-2 text-gray-900 font-bold text-blue-500 float-right">
                    Download
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div class="moreflex">
            <div class="morecontents">
                <div class="text-xl dark:text-white mx-8 my-3">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win at the Academy Awards?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                    <h1 class="object-center">The SpongeBob Movie: Sponge on the Run (2020) won<span class="font-bold">15 Oscar</span> </h1>
                    </div>
                </div>
                <six-star />
            </div>
            <div class="morecontents">
                <div class="text-xl dark:text-white mx-8 my-3">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win at the Academy Awards?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                    <h1 class="object-center">The SpongeBob Movie: Sponge on the Run (2020) won<span class="font-bold">15 Oscar</span> </h1>
                    </div>
                </div>
                <six-star />
            </div>
            <div class="morecontents">
                <div class="text-xl dark:text-white mx-8 my-3">
                    <h1>How many <span class="font-bold">Awards</span>Awards did The SpongeBob Movie: Sponge on the Run (2020) win at the Academy Awards?</h1>
                </div>
                <div class="flex flex-wrap overflow-hidden shadow-md dark:bg-gray-900 dark:text-white rounded-lg mx-8 py-4 px-3">
                    <div>
                    <h1 class="object-center">The SpongeBob Movie: Sponge on the Run (2020) won<span class="font-bold">15 Oscar</span> </h1>
                    </div>
                </div>
                <six-star />
            </div>
            <a href="#" id="loadMores">...Load More</a>
        </div>
  </div>
</template>
<script>
  import PersonTop from '@/components/single/person/top';
  import SixStar from '@/components/single/award/sixstar';

  export default {
    components: {
      PersonTop,
      SixStar,
    },
    mounted() {
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
    }
  }
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>