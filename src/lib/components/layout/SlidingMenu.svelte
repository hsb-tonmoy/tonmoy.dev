<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import FloatingMenu from './FloatingMenu.svelte';
	import Socials from './Socials.svelte';

	import MaterialSymbolsClose from '~icons/material-symbols/close'

	export const drawer = drawerStore;
	export let isDrawerClosed: boolean;
</script>

<Drawer
	on:backdrop={() => (isDrawerClosed = true)}
	position="right"
	duration={300}
	width="w-full max-w-sm"
	bgBackdrop="bg-surface-500/50"
	rounded="rounded-none"
>
	<div class="w-full relative flex xl:hidden">
		<button
			on:click={() => {
				drawer.close();
				isDrawerClosed = true;
			}}
			class="absolute inline-flex items-center justify-center top-6 right-6 border-[0.5px] bg-surface-600 border-surface-500 hover:border-white rounded-full w-8 h-8 p-2 transition-all ease-in-out duration-300"
		>
			<span class="text-white">
				<MaterialSymbolsClose />
			</span>
		</button>
	</div>
	<div class="flex flex-col items-between py-14 w-2/5 h-full mx-auto">
		<h2 class="text-textColor text-xl font-light mb-12">Menu</h2>
		<div class="flex flex-col gap-6 justify-center w-full h-full text-white max-w-">
			<FloatingMenu showNames={true} widthClass="w-5 h-5" />
		</div>
		<div class="">
			<Socials widthClass="w-10 h-10" />
		</div>
	</div>
</Drawer>
