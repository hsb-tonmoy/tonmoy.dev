<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
</script>

<div class="w-full h-full flex">
	<aside
		id="leftSidebar"
		class="xl:w-auto w-full flex items-start xl:items-center px-6 py-4 xl:py-20"
	>
		<div class="w-full border-[0.5px] border-surface-500 rounded-3xl xl:h-full px-6 md:px-10 py-12">
			<LeftSidebar />
		</div>
	</aside>
	<main class="w-full h-full flex overflow-hidden py-20">
		<slot />
	</main>
	<aside id="rightMenu" class="flex-none overflow-x-hidden overflow-y-auto">
		<div class="hidden xl:flex w-auto items-center mr-20 py-20">Sidebar Right</div>
	</aside>
</div>
