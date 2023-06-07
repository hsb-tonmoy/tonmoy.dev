<script>
	import Home from '$lib/icons/Home.svelte';

	const menuItems = [
		{
			name: 'Home',
			icon: Home,
			link: '#home'
		},
		{
			name: 'About',
			icon: Home,
			link: '#about'
		},
		{
			name: 'Contact',
			icon: Home,
			link: '#contact'
		}
	];
</script>

{#each menuItems as menu}
	<span class="text-textColor hover:text-white transition-all ease-in-out duration-300 w-4 h-4">
		<a href={menu.link}><svelte:component this={menu.icon} /></a>
	</span>
{/each}
