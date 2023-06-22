<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import MaterialSymbolsPerson from '~icons/material-symbols/person';

	let element: any;
	let intersecting: any;
</script>

<IntersectionObserver {element} bind:intersecting threshold={0.9}>
	<section id="about" class="flex flex-col py-20">
		<TitleChip icon={MaterialSymbolsPerson} title="About" />
		<h2
			bind:this={element}
			class:animate__slideInUp={intersecting}
			style="--animate-delay: 0.5s;"
			class="animate__animated text-white text-2xl md:text-5xl font-light mb-8"
		>
			Crafting the Future, One Line of <span class="text-primary-500">Code</span> at a Time
		</h2>

		<p
			class:animate__slideInRight={intersecting}
			style="--animate-duration: 0.5s;"
			class="animate__animated"
		>
			Venturing into the expansive world of software and full-stack web development nearly ten years
			ago, I have had the privilege to shape digital dreams into reality. From my humble workspace,
			I've connected with global enterprises, aided emerging startups, and carefully constructed
			digital tools for business and individual use alike.
		</p>

		<p
			class:animate__slideInRight={intersecting}
			style="--animate-duration: 0.8s;"
			class="animate__animated mt-4"
		>
			I approach my work with a quiet determination and a deep-rooted passion for technology, fueled
			by an insatiable curiosity that keeps me ever eager to learn. Each challenge is an opportunity
			for me to hone my skills, translating complex problems into elegant, functional solutions. In
			this ever-evolving digital sphere, every line of code I write is my contribution to the
			unfolding narrative of technological advancement. I've learned that, even in code, simplicity
			is the ultimate sophistication, and my goal is to make this digital world a bit more
			navigable, one programming task at a time.
		</p>
	</section>
</IntersectionObserver>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}

	p {
		@apply text-textColor text-sm md:text-base;
		line-height: 1.875 !important;
	}
</style>
