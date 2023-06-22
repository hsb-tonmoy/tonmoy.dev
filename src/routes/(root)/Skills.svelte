<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import MaterialSymbolsSettingsAccountBox from '~icons/material-symbols/settings-account-box';
	import VscodeIconsFileTypeJs from '~icons/vscode-icons/file-type-js';
	import VscodeIconsFileTypePython from '~icons/vscode-icons/file-type-python';
	import VscodeIconsFileTypeTypescriptOfficial from '~icons/vscode-icons/file-type-typescript-official';
	import VscodeIconsFileTypeReactjs from '~icons/vscode-icons/file-type-reactjs';
	import VscodeIconsFileTypeSvelte from '~icons/vscode-icons/file-type-svelte';
	import VscodeIconsFileTypeVue from '~icons/vscode-icons/file-type-vue';
	import VscodeIconsFileTypeNode from '~icons/vscode-icons/file-type-node';
	import VscodeIconsFileTypeDjango from '~icons/vscode-icons/file-type-django';
	import VscodeIconsFileTypeFirebase from '~icons/vscode-icons/file-type-firebase';
	import VscodeIconsFileTypePgsql from '~icons/vscode-icons/file-type-pgsql';
	import VscodeIconsFileTypeJava from '~icons/vscode-icons/file-type-java';
	import VscodeIconsFileTypeC from '~icons/vscode-icons/file-type-c';
	import VscodeIconsFileTypeCpp from '~icons/vscode-icons/file-type-cpp';
	import VscodeIconsFileTypeAws from '~icons/vscode-icons/file-type-aws';
	import VscodeIconsFileTypeGcloud from '~icons/vscode-icons/file-type-gcloud';
	import VscodeIconsFileTypeAzure from '~icons/vscode-icons/file-type-azure';
	import VscodeIconsFileTypeGit from '~icons/vscode-icons/file-type-git';
	import VscodeIconsFileTypeDocker from '~icons/vscode-icons/file-type-docker';
	import VscodeIconsFolderTypeKubernetes from '~icons/vscode-icons/folder-type-kubernetes';
	import Linux from '$lib/components/icons/Linux.svelte';
	import WordPress from '$lib/components/icons/WordPress.svelte';

	const skills = [
		{ name: 'JavaScript', icon: VscodeIconsFileTypeJs },
		{ name: 'Typescript', icon: VscodeIconsFileTypeTypescriptOfficial },
		{ name: 'Python', icon: VscodeIconsFileTypePython },
		{ name: 'React', icon: VscodeIconsFileTypeReactjs },
		{ name: 'Svelte', icon: VscodeIconsFileTypeSvelte },
		{ name: 'Vue', icon: VscodeIconsFileTypeVue },
		{ name: 'Node', icon: VscodeIconsFileTypeNode },
		{ name: 'Django', icon: VscodeIconsFileTypeDjango },
		{ name: 'Firebase', icon: VscodeIconsFileTypeFirebase },
		{ name: 'PostgreSQL', icon: VscodeIconsFileTypePgsql },
		{ name: 'Java', icon: VscodeIconsFileTypeJava },
		{ name: 'C', icon: VscodeIconsFileTypeC },
		{ name: 'C++', icon: VscodeIconsFileTypeCpp },
		{ name: 'AWS', icon: VscodeIconsFileTypeAws },
		{ name: 'GCP', icon: VscodeIconsFileTypeGcloud },
		{ name: 'Azure', icon: VscodeIconsFileTypeAzure },
		{ name: 'Git', icon: VscodeIconsFileTypeGit },
		{ name: 'Docker', icon: VscodeIconsFileTypeDocker },
		{ name: 'Kubernetes', icon: VscodeIconsFolderTypeKubernetes },
		{ name: 'Linux', icon: Linux },
		{ name: 'WordPress', icon: WordPress }
	];

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.9}>
	<section id="skills" class="flex flex-col py-20">
		<TitleChip icon={MaterialSymbolsSettingsAccountBox} title="Skills" />
		<h2
			class:animate__slideInUp={intersecting}
			style="--animate-delay: 0.5s;"
			bind:this={element}
			class="animate__animated text-white text-2xl md:text-5xl font-light"
		>
			My <span class="text-primary-500">Skills</span>
		</h2>
		<div
			class="logo-cloud [&>.logo-item]:border [&>.logo-item]:border-surface-500 hover:[&>.logo-item]:border-primary-500 [&>.logo-item]:p-0 [&>.logo-item]:px-2 [&>.logo-item]:py-6 [&>.logo-item]:transition-all [&>.logo-item]:ease-in-out [&>.logo-item]:duration-300 grid-cols-1 md:grid-cols-2 xl:!grid-cols-3 gap-4 mt-16"
		>
			{#each skills as skill, i}
				<button
					class:animate__slideInRight={intersecting}
					style="--animate-duration: {i * 0.15}s;"
					class="animate__animated logo-item"
				>
					<span><svelte:component this={skill.icon} style="font-size: var(--icon-size)" /></span>
					<span>{skill.name}</span>
				</button>
			{/each}
		</div>
	</section>
</IntersectionObserver>

<style>
	:root {
		--icon-size: 1.5em;
	}
</style>
