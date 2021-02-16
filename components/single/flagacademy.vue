<template>
	<div class="xl:w-1/5 academy"> 
                <div class="flex flex-wrap overflow-hidden shadow-md  rounded-lg mr-2 px-3 pt-2 dark:bg-gray-900">
                    <div class="w-1/5">
                        <font-awesome-icon :icon="['fas', 'flag']" class="dark:text-white"/>
                    </div>
                    <div class="w-4/5">
                        <p class="font-bold dark:text-white">5 Academy Awards</p>
                            <div>
                                <p class="dark:text-white">Best Actor</p>
                                <p class="dark:text-white">Best Director</p>
                                <p class="dark:text-white">Best Picture</p>
                            <div class="Readmore-text hide">
                                <p class="dark:text-white">Best Picture</p>
                            </div>
                            <a data-show="Readmore" Readmore-collapse="false" class="showReadmores" style="color: #6d7380;">...</a>
                        </div>
                    </div>
                </div>         
            </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>