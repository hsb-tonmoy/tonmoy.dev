<script lang="ts">
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import PajamasProject from '~icons/pajamas/project';

	import AppAemers from './(projects)/AppAemers.svelte';
</script>

<section id="projects" class="flex flex-col py-20">
	<TitleChip icon={PajamasProject} title="Projects" />
	<h2 class="text-white text-2xl md:text-5xl font-light mb-8">
		My <span class="text-primary-500">Projects</span>
	</h2>
	<AppAemers />
</section>
