<template>
<div class="mx-3">
    <blog-short />
    <img class="w-full" src="@/assets/images/blacklogobackground.png">
    <div class="flex flex-wrapper overflow-hidden">
        <div class="sm:w-1/2">
            <div class="flex">
                <div class="sm:w-1/2 p-1">
                    <div class="rounded-md overflow-hidden shadow-md">
                        <img src="/_nuxt/assets/images/Homepage/546dttatpLWDuvr1GIZ4tHrsASB.jpg" alt="Mountain" class="w-full"> 
                        
                        <div class="px-3">
                            <div class="text-lg mb-2 mt-2">The Coldest Sunset</div> 
                                <div class="forum-content">
                                    <div class='expandable text-sm dark:text-white'>
                                        Sass is like CSS. Ok, that's misleading. Sass CAN BE like CSS. I mentioned that Sass has some history to it and actually has not one, but two syntaxes. One of the syntaxes is even named "Sass" which adds even more confusion to the mix. The main syntax is referred to as "SCSS" (for "Sassy CSS") and is new as of Sass 3. The older syntax (part of that history I mentioned) is referred to as the indented syntax (or just "Sass"). Now that we've covered a bit of the history of Sass and the fact that it has two syntaxes, I believe we are ready to write some code. Or should I say SCSS – because the SCSS syntax is like CSS and was designed to be a superset of CSS3's syntax. This means that every valid CSS3 stylesheet is valid SCSS. In fact, you can copy the contents of a CSS file and paste it into a SCSS file and Sass will compile it to clean CSS.
                                    </div>
                                </div>
                            </div>
                            
                            <div class="px-3 pt-4 pb-2">
                                <div class="flex flex-wrap overflow-hidden">
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm text-white  mb-2">    
                                        #movie
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm  text-white  mb-2">
                                        #awards
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm text-white  mb-2">
                                        #actor
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm  text-white  mb-2">
                                        #director
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="sm:w-1/2 p-1">
                    <div class="rounded-md overflow-hidden shadow-md">
                        <img src="/_nuxt/assets/images/Homepage/546dttatpLWDuvr1GIZ4tHrsASB.jpg" alt="Mountain" class="w-full"> 
                        
                        <div class="px-3">
                            <div class="text-lg mb-2 mt-2">The Coldest Sunset</div> 
                                <div class="forum-content">
                                    <div class='expandable text-sm dark:text-white'>
                                        Sass is like CSS. Ok, that's misleading. Sass CAN BE like CSS. I mentioned that Sass has some history to it and actually has not one, but two syntaxes. One of the syntaxes is even named "Sass" which adds even more confusion to the mix. The main syntax is referred to as "SCSS" (for "Sassy CSS") and is new as of Sass 3. The older syntax (part of that history I mentioned) is referred to as the indented syntax (or just "Sass"). Now that we've covered a bit of the history of Sass and the fact that it has two syntaxes, I believe we are ready to write some code. Or should I say SCSS – because the SCSS syntax is like CSS and was designed to be a superset of CSS3's syntax. This means that every valid CSS3 stylesheet is valid SCSS. In fact, you can copy the contents of a CSS file and paste it into a SCSS file and Sass will compile it to clean CSS.
                                    </div>
                                </div>
                            </div>
                            
                            <div class="px-3 pt-4 pb-2">
                                <div class="flex flex-wrap overflow-hidden">
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm text-white  mb-2">    
                                        #movie
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm  text-white  mb-2">
                                        #awards
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm text-white  mb-2">
                                        #actor
                                    </span> 
                                    <span class="inline-block bg-gray-900 rounded-full px-2 py-1 mx-1 text-sm  text-white  mb-2">
                                        #director
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</div>
</template>	
<script>
import BlogShort from '@/components/blog/blog-post-short'

export default {
    components:{
        BlogShort
    },
    mounted(){
        $(document).ready(function() {
              var showChar = 260;
              var ellipsestext = "...";
              var moretext = "read More";
              var lesstext = "read Less";

              $(".expandable").each(function() {
                var content = $(this).html();
                if (content.length > showChar) {
                  var show_content = content.substr(0, showChar);
                  var hide_content = content.substr(showChar, content.length - showChar);
                  var html =
                    show_content +
                    '<span class="moreelipses">' +
                    ellipsestext +
                    '</span><span class="remaining-content"><span>' +
                    hide_content +
                    '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
                    moretext +
                    "</a></span>";
                  $(this).html(html);
                }
              });

              $(".morelink").click(function() {
                if ($(this).hasClass("less")) {
                  $(this).removeClass("less");
                  $(this).html(moretext);
                } else {
                  $(this).addClass("less");
                  $(this).html(lesstext);
                }
                $(this).parent().prev().toggle(300);
                $(this).prev().toggle(300);
                return false;
              });

              $(".nav-toggle").click(function() {
                var collapse_content_selector = $(this).attr("href");
                var toggle_switch = $(this);
                $(collapse_content_selector).toggle(function() {
                  if ($(this).css("display") == "none") {
                    toggle_switch.html("Read More");
                  } else {
                    toggle_switch.html("Read Less");
                  }
                });
              });
        });
    }

}
</script>
<style>
    .nav-toggle, .morelink {
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: .8em;
    letter-spacing: .1em;
    outline: 0;
    color: #69758c;
    }
    .remaining-content span {
        display:none;
    }

    .expandable {
          transition: height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 150ms;
    }
    .morecontent {
      display: none;
    }
    #loadMore {
      width: 92px;
      color: #fff;
      display: block;
      text-align: center;
      margin: 20px auto;
      border-radius: 100px;
      border: 1px solid transparent;
      background-color: #1a202c;
      transition: 0.3s;
      height: 29px;
    }
    #loadMore:hover {
      color: black;
      background-color: #fff;
      border: 1px solid black;
      text-decoration: none;
    }

</style>
