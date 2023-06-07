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
</script>

{#each menuItems as menu}
	<span class="text-textColor hover:text-white transition-all ease-in-out duration-300 w-4 h-4">
		<a href={menu.link}><svelte:component this={menu.icon} /></a>
	</span>
{/each}
