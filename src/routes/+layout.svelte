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
	slotSidebarLeft="w-auto flex items-center ml-6 my-20"
	slotSidebarRight="w-auto flex items-center mr-20"
>
	<!-- (header) -->
	<svelte:fragment slot="sidebarLeft"
		><div class="border-[0.5px] border-gray-500 rounded-xl h-full px-10 py-12">
			<LeftSidebar />
		</div></svelte:fragment
	>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<slot />
</AppShell>
