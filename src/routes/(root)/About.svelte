<script>
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import User from '$lib/icons/User.svelte';
</script>

<div class="flex flex-col py-20">
	<TitleChip icon={User} title="About" />
	<h2 class="text-white text-2xl md:text-5xl font-light mb-8">
		Crafting the Future, One Line of Code at a Time
	</h2>
	<p class="">
		Venturing into the expansive world of software and full-stack web development nearly ten years
		ago, I have had the privilege to shape digital dreams into reality. From my humble workspace,
		I've connected with global enterprises, aided emerging startups, and carefully constructed
		digital tools for business and individual use alike.
	</p>

	<p class="mt-4">
		I approach my work with a quiet determination and a deep-rooted passion for technology, fueled
		by an insatiable curiosity that keeps me ever eager to learn. Each challenge is an opportunity
		for me to hone my skills, translating complex problems into elegant, functional solutions. In
		this ever-evolving digital sphere, every line of code I write is my contribution to the
		unfolding narrative of technological advancement. I've learned that, even in code, simplicity is
		the ultimate sophistication, and my goal is to make this digital world a bit more navigable, one
		programming task at a time.
	</p>
</div>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}

	p {
		@apply text-textColor text-sm md:text-base;
		line-height: 1.875 !important;
	}
</style>
