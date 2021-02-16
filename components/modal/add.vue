<template>
  <div v-if="showModal">
    <div id="add-modal">
      <div @click="hide">
        <div class="flex">
          <div class="flex-1">
            <p class="text-xs add-stranger mb-2">Stranger Things 3</p>
          </div>
          <div class="flex">
            <font-awesome-icon 
              :icon="['fas', 'times-circle']"
            />
          </div>
        </div>
      </div>
      <div class="flex bg-gray-900 rounded-full mb-1">
        <font-awesome-icon 
          :icon="['fas', 'heart']"
          class="add-selection-se"
        />
        <div class="text-xs text-white add-favor">Add to Favourites</div>
      </div>

      <div class="flex bg-gray-900 rounded-full mb-1">
        <font-awesome-icon 
          :icon="['fas', 'plus-circle']"
          class="add-selection-se"
        />
        <div class="text-xs text-white add-favor">Add to Watchlist</div>
      </div>

      <div class="flex bg-gray-900 rounded-full mb-1">
        <font-awesome-icon 
          :icon="['fas', 'plus-circle']"
          class="add-selection-se"
        />
        <div class="text-xs text-white add-favor">Seen It</div>
      </div>      
      
    </div> 
  </div>
</template>

<script>
 export default {
   data() {
     return {
      showModal: false
     }
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
      this.$emit('close');
     }
   }
 }
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>