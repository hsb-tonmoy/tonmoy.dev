<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	import { currentSection } from '$lib/components/layout/stores';
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import PajamasProject from '~icons/pajamas/project';

	import AppAemers from './(projects)/AppAemers.svelte';

	let element: any;
	let intersecting: any;

	$: intersecting ? currentSection.set('projects') : null;
</script>

<IntersectionObserver {element} bind:intersecting rootMargin="30%">
	<section id="projects" class="flex flex-col py-20">
		<TitleChip icon={PajamasProject} title="Projects" />
		<h2
			bind:this={element}
			class:animate__slideInUp={intersecting}
			style="--animate-delay: 0.3s;"
			class="animate__animated text-white text-2xl md:text-5xl font-light mb-8"
		>
			My <span class="text-primary-500">Projects</span>
		</h2>
		<div class="">
			<AppAemers />
		</div>
	</section>
</IntersectionObserver>
