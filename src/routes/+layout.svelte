<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import 'animate.css';

	import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
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

<div class="relative w-full min-h-screen flex flex-col 2xl:flex-row bg-surface-600 p-4 2xl:p-0">
	<aside
		id="leftSidebar"
		class="2xl:fixed left-6 2xl:top-1/2 2xl:-translate-y-1/2 2xl:mr-6 flex-none w-full 2xl:max-w-md flex items-start 2xl:items-center"
	>
		<div
			class="w-full border-[0.5px] border-surface-500 rounded-3xl 2xl:h-full px-6 md:px-10 py-12"
		>
			<LeftSidebar />
		</div>
	</aside>
	<main class="flex-1 min-w-0 overflow-auto px-12 py-20">
		<slot />
	</main>
	<aside
		id="rightMenu"
		class="fixed 2xl:sticky 2xl:h-screen top-2 right-2 2xl:right-16 pt-20 flex-none 2xl:w-auto w-full flex items-end 2xl:items-center flex-col"
	>
		<button
			on:click={openDrawer}
			class="border-[0.5px] bg-surface-600 border-surface-500 hover:border-white rounded-full w-14 h-14 p-2 transition-all ease-in-out duration-300"
		>
			<span class="text-white">
				<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
					><path d="M160-390v-60h640v60H160Zm0-120v-60h640v60H160Z" /></svg
				>
			</span>
		</button>

		<div id="floatingMenu" class="hidden fixed 2xl:flex">
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
