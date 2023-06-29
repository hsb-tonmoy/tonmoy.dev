<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import CtaButton from '$lib/components/layout/CTAButton.svelte';
	import MaterialSymbolsHome from '~icons/material-symbols/home';

	import { currentSection } from '$lib/components/layout/stores';
	let element: any;
	let intersecting: any;

	$: intersecting ? currentSection.set('introduction') : null;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.9}>
	<section id="introduction" class="flex flex-col">
		<TitleChip icon={MaterialSymbolsHome} title="Introduction" />
		<h2 class="text-white text-4xl md:text-7xl font-light">
			Hi from <span class="text-primary-500">Tonmoy</span>,<br /> Software and<br /> Full-stack Developer
		</h2>
		<div bind:this={element} class="max-w-xl mt-8 md:mt-12">
			<span
				class:animate__fadeInUpBig={intersecting}
				style="--animate-delay: 0.5s;"
				class="animate__animated text-textColor text-sm md:text-base"
				>In the world of web development, I find my joy. I'm Hasibuzzaman Tonmoy, designing
				simplicity and coding innovation.</span
			>
		</div>
		<div class="w-full flex justify-end items-center mt-16">
			<CtaButton />
		</div>
		<div class="flex items-center gap-10 mt-12 max-w-sm">
			<div class="flex flex-col gap-4">
				<span
					class:animate__fadeInUp={intersecting}
					style="--animate-delay: 0.3s;"
					class="animate__animated text-primary-500 text-4xl md:text-7xl font-light">5+</span
				>
				<span
					class:animate__fadeInUp={intersecting}
					style="--animate-delay: 0.8s;"
					class="animate__animated text-textColor text-sm md:text-base uppercase"
					>Years of Experience</span
				>
			</div>
			<div class="flex flex-col gap-4">
				<span
					class:animate__fadeInUp={intersecting}
					style="--animate-delay: 0.3s;"
					class="animate__animated text-primary-500 text-4xl md:text-7xl font-light">10+</span
				>
				<span
					class:animate__fadeInUp={intersecting}
					style="--animate-delay: 0.8s;"
					class="animate__animated text-textColor text-sm md:text-base uppercase"
					>Projects Completed</span
				>
			</div>
		</div>
	</section>
</IntersectionObserver>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}
</style>
