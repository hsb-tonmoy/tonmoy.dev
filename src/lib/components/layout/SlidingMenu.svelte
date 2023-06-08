<script lang="ts">
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import FloatingMenu from './FloatingMenu.svelte';
	import Socials from './Socials.svelte';

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
	<div class="flex flex-col items-between py-14 w-2/5 h-full mx-auto">
		<h2 class="text-textColor text-xl font-light mb-12">Menu</h2>
		<div class="flex flex-col gap-6 justify-center w-full h-full text-white max-w-">
			<FloatingMenu showNames={true} widthClass="w-5 h-5" />
		</div>
		<div class="">
			<Socials widthClass="w-6 h-6" />
		</div>
	</div>
</Drawer>
