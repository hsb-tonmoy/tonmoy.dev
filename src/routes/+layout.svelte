<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell } from '@skeletonlabs/skeleton';
	import LeftSidebar from '$lib/components/layout/LeftSidebar.svelte';
</script>

<AppShell
	regionPage="py-20"
	slotSidebarLeft="xl:w-auto w-full flex items-start xl:items-center px-6 py-4 xl:py-20"
	slotSidebarRight="w-auto flex items-center mr-20 py-20"
>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft"
		><div
			class="w-full xl:w-auto border-[0.5px] border-surface-500 rounded-3xl xl:h-full px-6 md:px-10 py-12"
		>
			<LeftSidebar />
		</div></svelte:fragment
	>
	<svelte:fragment slot="sidebarRight"
		><div class="hidden xl:flex">Sidebar Right</div></svelte:fragment
	>
	<slot />
</AppShell>
