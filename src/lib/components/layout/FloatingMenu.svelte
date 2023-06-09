<script>
	import MaterialSymbolsHome from '~icons/material-symbols/home'
	import MaterialSymbolsLabProfile from '~icons/material-symbols/lab-profile'
	import MaterialSymbolsPerson from '~icons/material-symbols/person'
	import MaterialSymbolsSettingsAccountBox from '~icons/material-symbols/settings-account-box'
	import PajamasProject from '~icons/pajamas/project'
	import MaterialSymbolsContactPage from '~icons/material-symbols/contact-page'

	const menuItems = [
		{
			name: 'Home',
			icon: MaterialSymbolsHome,
			link: '#introduction'
		},
		{
			name: 'About',
			icon: MaterialSymbolsPerson,
			link: '#about'
		},
		{
			name: 'Resume',
			icon: MaterialSymbolsLabProfile,
			link: '#resume'
		},
		{
			name: 'Skills',
			icon: MaterialSymbolsSettingsAccountBox,
			link: '#skills'
		},
		{
			name: 'Projects',
			icon: PajamasProject,
			link: '#projects'
		},
		{
			name: 'Contact',
			icon: MaterialSymbolsContactPage,
			link: '#contact'
		},
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
