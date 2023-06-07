<script>
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import Home from '$lib/icons/Home.svelte';
	import CtaButton from '$lib/components/layout/CTAButton.svelte';
</script>

<div class="flex flex-col">
	<TitleChip icon={Home} title="Introduction" />
	<h2 class="text-white text-4xl md:text-7xl font-light">
		Hi from <span class="text-primary-500">Tonmoy</span>,<br /> Software and<br /> Full-stack Developer
	</h2>
	<div class="max-w-xl mt-8 md:mt-12">
		<span class="text-textColor text-sm md:text-base"
			>In the world of web development, I find my joy. I'm Hasibuzzaman Tonmoy, designing simplicity
			and coding innovation.</span
		>
	</div>
	<div class="w-full flex justify-end items-center mt-16">
		<CtaButton />
	</div>
	<div class="flex items-center gap-10 mt-12 max-w-sm">
		<div class="flex flex-col gap-4">
			<span class="text-primary-500 text-4xl md:text-7xl font-light">5+</span>
			<span class="text-textColor text-sm md:text-base uppercase">Years of Experience</span>
		</div>
		<div class="flex flex-col gap-4">
			<span class="text-primary-500 text-4xl md:text-7xl font-light">10+</span>
			<span class="text-textColor text-sm md:text-base uppercase">Projects Completed</span>
		</div>
	</div>
</div>

<style lang="postcss">
	h2 {
		line-height: 1.15 !important;
	}
</style>
