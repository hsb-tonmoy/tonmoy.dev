<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
	import Menu from '$lib/icons/Menu.svelte';
	import FloatingMenu from '$lib/components/layout/FloatingMenu.svelte';
	import SlidingMenu from '$lib/components/layout/SlidingMenu.svelte';

	let drawer: any;
	let isDrawerClosed = true;

	const openDrawer = () => {
		isDrawerClosed = false;
		drawer.open();
	};
</script>

<svelte:head>
	<title>Hasibuzzaman Tonmoy</title>
</svelte:head>

<div class="relative w-full min-h-screen flex flex-col xl:flex-row bg-surface-600 p-4 xl:p-0">
	<aside
		id="leftSidebar"
		class="xl:sticky h-full top-20 bottom-20 left-6 xl:mr-6 flex-none xl:w-auto w-full flex items-start xl:items-center"
	>
		<div class="w-full border-[0.5px] border-surface-500 rounded-3xl xl:h-full px-6 md:px-10 py-12">
			<LeftSidebar />
		</div>
	</aside>
	<main class="flex-1 min-w-0 overflow-auto px-6 py-20">
		<slot />
	</main>
	<aside
		id="rightMenu"
		class="fixed xl:sticky xl:h-screen top-2 right-2 xl:right-16 pt-20 flex-none xl:w-auto w-full flex items-end xl:items-center flex-col"
	>
		{#if isDrawerClosed}
			<button
				on:click={openDrawer}
				class="border-[0.5px] bg-surface-600 border-surface-500 hover:border-white rounded-full w-14 h-14 p-2 transition-all ease-in-out duration-300"
			>
				<span class="text-white">
					<Menu />
				</span>
			</button>
		{/if}
		<div id="floatingMenu" class="hidden fixed xl:flex">
			<div
				class="flex flex-col gap-4 justify-center border-[0.5px] border-surface-500 rounded-full h-full p-4 text-white"
			>
				<FloatingMenu />
			</div>
		</div>
	</aside>
</div>
<SlidingMenu bind:drawer bind:isDrawerClosed />

<style lang="postcss">
	#floatingMenu {
		top: 50vh;

		transform: translate(0%, -50%);
	}
</style>
