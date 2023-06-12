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
	import MaterialSymbolsLabProfile from '~icons/material-symbols/lab-profile'
	import MaterialSymbolsDownload from '~icons/material-symbols/download'
</script>


<div use:inview={options} on:inview_change={handleChange} class:animate__animated={isInView} 
class:animate__fadeInDown={scrollDirection === 'down'}
class:animate__fadeInUp={scrollDirection === 'up'} class="flex flex-col py-20">
	<TitleChip icon={MaterialSymbolsLabProfile} title="Resume" />
	<h2 class="text-white text-2xl md:text-5xl font-light mb-16">
		Work <span class="text-primary-500">Experiences</span>
	</h2>
	<ol class="relative border-l border-surface-500 ml-4">
		<li class="group mb-10 ml-10 md:ml-16">
			<span
				class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 rounded-full -left-[0.55rem] md:-left-[0.80rem] bg-surface-500 group-hover:ring-8 group-hover:ring-primary-600 group-hover:bg-primary-900 transition-all ease-in-out duration-300"
			/>
			<h3
				class="flex items-center mb-4 text-xl md:text-2xl font-light text-textColor group-hover:text-white transition-all ease-in-out duration-300"
			>
				Aemers LLC
			</h3>
			<h4
				class="flex items-center mb-2 text-base md:text-lg font-normal text-white group-hover:text-textColor transition-all ease-in-out duration-300"
			>
				Chief Technology Officer
			</h4>
			<time
				class="block mb-2 text-xs md:text-sm font-normal leading-none text-textColor group-hover:text-white transition-all ease-in-out duration-300"
				>February 2020 - January 2023</time
			>
		</li>
		<li class="group mb-10 ml-10 md:ml-16">
			<span
				class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 rounded-full -left-[0.55rem] md:-left-[0.80rem] bg-surface-500 group-hover:ring-8 group-hover:ring-primary-600 group-hover:bg-primary-900 transition-all ease-in-out duration-300"
			/>
			<h3
				class="flex items-center mb-4 text-xl md:text-2xl font-light text-textColor group-hover:text-white transition-all ease-in-out duration-300"
			>
				Kalamazoo Public Library
			</h3>
			<h4
				class="flex items-center mb-2 text-base md:text-lg font-normal text-white group-hover:text-textColor transition-all ease-in-out duration-300"
			>
				Tech Intern
			</h4>
			<time
				class="block mb-2 text-xs md:text-sm font-normal leading-none text-textColor group-hover:text-white transition-all ease-in-out duration-300"
				>May 2022 - Present</time
			>
		</li>
		<li class="group mb-10 ml-10 md:ml-16">
			<span
				class="absolute flex items-center justify-center w-4 h-4 md:w-6 md:h-6 rounded-full -left-[0.55rem] md:-left-[0.80rem] bg-surface-500 group-hover:ring-8 group-hover:ring-primary-600 group-hover:bg-primary-900 transition-all ease-in-out duration-300"
			/>
			<h3
				class="flex items-center mb-4 text-xl md:text-2xl font-light text-textColor group-hover:text-white transition-all ease-in-out duration-300"
			>
				Western Michigan University
			</h3>
			<h4
				class="flex items-center mb-2 text-base md:text-lg font-normal text-white group-hover:text-textColor transition-all ease-in-out duration-300"
			>
				Help Desk Student Lead
			</h4>
			<time
				class="block mb-2 text-xs md:text-sm font-normal leading-none text-textColor group-hover:text-white transition-all ease-in-out duration-300"
				>June 2021 - Present</time
			>
		</li>
	</ol>
	<div class="mt-8">
		<a href="/resume/Hasibuzzaman_Tonmoy_Resume.pdf">
			<button type="button" class="btn btn-lg variant-filled-primary hover:variant-ghost-primary">
				<span class="w-5 h-5"><MaterialSymbolsDownload /></span>
				<span class="">My Resume</span>
			</button>
		</a>
	</div>
</div>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}
</style>
