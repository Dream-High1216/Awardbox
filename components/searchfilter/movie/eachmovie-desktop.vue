<template>

<div class="swiper-slide flex flex-col my-1 overflow-hidden thumb">
	<div class="">
		<add-modal ref="AddModal" @close="onToggleEye" />
		<button @click="openAdd">
			<font-awesome-icon 
				v-if="eyeVisible"
				:icon="['fas', 'ellipsis-h']"
				class="add-selection"
				@click="onToggleEye"
			/>
		</button>
		<img
			src="~/assets/images/Homepage/zMrk2G3XsnfYKiIp1NEfdtvDyBH.jpg" class="rounded-xl shadow-md"
			alt=""
		/>
		<div class="pt-2">
			<h1 class="dark:text-white text-xs">Eternal Sunshine of the Spotless Mind(2014)</h1>
		</div>
	</div>
	
</div>
</template>
<script>
import AddModal from '@/components/modal/add'

export default {
	components: {
		AddModal
	},
	data() {
		return {
			eyeVisible:true
		}
	},
	methods: {
		openAdd() {
			this.$refs.AddModal.show()
		},
		onToggleEye() {
			this.eyeVisible = !this.eyeVisible
		}
	}
}
</script>
<style scoped>
    @import '~/assets/css/styles.css';
</style>

