<template>
    <div>
        <company-top />
        <div class="moreflex">
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
        </div>
        <a href="#" id="loadMore">...Load More</a>
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
        </div>
        <a href="#" id="loadMores">...Load More</a>        
    </div>
</template> 
<script>
    import CompanyTop from '@/components/single/award/company-top';
    import FiveAcademy from '@/components/single/fiveacademy';
    import SeeAll from '@/components/buttons/seeall';
    import AwardBox from '@/components/single/person/award';
    import SixStar from '@/components/single/award/sixstar';

export default {
    components: {
        CompanyTop,
        FiveAcademy,
        SeeAll,
        AwardBox,
        SixStar
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
