<script>
	import Home from '$lib/icons/Home.svelte';
	import User from '$lib/icons/User.svelte';
	import Resume from '$lib/icons/Resume.svelte';

	const menuItems = [
		{
			name: 'Home',
			icon: Home,
			link: '#introduction'
		},
		{
			name: 'About',
			icon: User,
			link: '#about'
		},
		{
			name: 'Resume',
			icon: Resume,
			link: '#resume'
		}
	];
	export let showNames = false;
	export let widthClass = 'w-4 h-4';
</script>

{#each menuItems as menu}
	<span class="text-textColor hover:text-white transition-all ease-in-out duration-300">
		<a href={menu.link} class="inline-flex items-center gap-2"
			><span class="block {widthClass}">
				<svelte:component this={menu.icon} />
			</span>
			{#if showNames}
				<span class="text-sm">{menu.name}</span>
			{/if}
		</a>
	</span>
{/each}
