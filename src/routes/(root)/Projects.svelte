<script lang="ts">
	import TitleChip from '$lib/components/layout/TitleChip.svelte';
	import PajamasProject from '~icons/pajamas/project';
	import { filter, GreenFall } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col py-20">
	<TitleChip icon={PajamasProject} title="Projects" />
	<h2 class="text-white text-2xl md:text-5xl font-light mb-8">
		My <span class="text-primary-500">Projects</span>
	</h2>
	<img
		use:filter={'#GreenFall'}
		src="/images/project.jpg"
		alt="Project"
		class="object-cover max-w-2xl w-full rounded-3xl mb-6"
	/>
	<a href="/">
		<h6
			class="font-light text-white text-lg md:text-xl tracking-wide hover:underline transition-all ease-in-out duration-300"
		>
			app.aemers - College Application Tracker
		</h6>
	</a>
</div>
