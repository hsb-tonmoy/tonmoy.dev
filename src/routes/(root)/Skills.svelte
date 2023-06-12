<script lang='ts'>
	import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

  let isInView: boolean;
  let scrollDirection: ScrollDirection;
  const options: Options = {
    rootMargin: '-20px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };

	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import MaterialSymbolsSettingsAccountBox from '~icons/material-symbols/settings-account-box'

</script>

<div use:inview={options} on:inview_change={handleChange} class:animate__animated={isInView} 
class:animate__fadeInDown={scrollDirection === 'down'}
class:animate__fadeInUp={scrollDirection === 'up'} class="flex flex-col py-20">
	<TitleChip icon={MaterialSymbolsPerson} title="About" />
	<h2 class="text-white text-2xl md:text-5xl font-light mb-8">
		Crafting the Future, One Line of <span class="text-primary-500">Code</span> at a Time
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
