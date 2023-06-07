<script>
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import Resume from '$lib/icons/Resume.svelte';
</script>

<div class="flex flex-col py-20">
	<TitleChip icon={Resume} title="Resume" />
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
</div>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}
</style>
