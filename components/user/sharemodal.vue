<template>
  <div v-if="showModal" class="" style="">
    <div id="modal">
      <div class="modal-wrapper">
        <div class="modal-container" style="width:560px;">
			<div class="flex">
				<div class="flex-1">
					<p class="font-bold">Share It</p>
				</div>
				<div class="flex">
					<font-awesome-icon :icon="['fas', 'times']" @click="hide"  style="margin-top: 4px; margin-right: 2px;"/>
				</div>
			</div>
            <div class="flex flex-wrapper overflow-hidden">
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'facebook']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on Facebook</p>
             		</div>
             	</div>
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'twitter']" style="margin-top: 4px;
    					    margin-right: 2px;
    					    color: black;
    					    background: white;
    					    border-radius: 59%;"/>
             			<p style="font-size: 14px;">Share on Twitter</p>
             		</div>
             	</div>
             	<div class="w-1/3">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'reddit']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on  Reddit</p>
             		</div>
             	</div>
            </div>
            <div class="flex flex-wrapper overflow-hidden mt-2">
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'facebook-messenger']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on Messenger</p>
             		</div>
             	</div>
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'pinterest']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on Pinterest</p>
             		</div>
             	</div>
             	<div class="w-1/3">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'telegram']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on Telegram</p>
             		</div>
             	</div>
            </div>
            <div class="flex flex-wrapper overflow-hidden mt-2">
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'whatsapp']" style="margin-top: 4px; margin-right: 2px;"/>
             			<p style="font-size: 14px;">Share on WhatsApp</p>
             		</div>
             	</div>
             	<div class="w-1/3 mr-1">
             		<div class="flex bg-gray-900 text-white rounded-full px-1 py-1">
             			<font-awesome-icon :icon="['fab', 'linkedin-in']" style="margin-top: 4px;
    						    margin-right: 2px;
    						    width: 14px;
    						    height: 14px;
    						    background: white;
    						    color: black;
    						    border-radius: 12px;"/>
             			<p style="font-size: 14px;">Share on LinkedIn</p>
             		</div>
             	</div>
            </div>
            <div class="flex-1 mt-2">
                <p class="font-bold">Page Link</p>
            </div>
            <div class="flex">
                <div class="flex-1">
                  <input type="text" value="https://awardsbox.com/" id="data">  
                </div>
                <div class="flex bg-gray-900 text-white rounded-full px-1 py-1 mx-2">
                    <font-awesome-icon :icon="['fas', 'copy']" 
                    style="margin-top: 4px;
                            margin-right: 2px;
                            width: 14px;
                            height: 14px;
                            background: white;
                            color: black;
                            border-radius: 12px;
                            padding: 2px;"/>
                    <p style="font-size: 14px;">Copy Link</p>
                </div>
            </div>
          <!-- <button @click="hide"  type="submit" value="Submit" class="create-btn" style="">Create</button> -->
        </div>
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
   mounted(){
        $(document).ready(function(){
            $("#copy").click(function(){
                $("#data").select();
              document.execCommand("copy"); 
            alert("Copied On clipboard");
            });
    });
   },
   methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     }
   },
 }
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>