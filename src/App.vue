<script setup>
import { defineAsyncComponent } from 'vue'

const Navbar = defineAsyncComponent(() => import('@/components/layout/Navbar.vue'))
</script>

<template>
	<Navbar />
	<div>
		<h1 class="text-primary text-3xl font-bold">Hello world!</h1>
	</div>
</template>

<style scoped></style>
