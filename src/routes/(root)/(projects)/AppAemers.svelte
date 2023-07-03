<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	import MaterialSymbolsArrowBackIos from '~icons/material-symbols/arrow-back-ios';
	import MaterialSymbolsArrowForwardIos from '~icons/material-symbols/arrow-forward-ios';

	let carousel: any;

	const images = [
		'app-aemers-dash-home.png',
		'app-aemers-app-tour.png',
		'app-aemers-doc-upload.png',
		'app-aemers-form.png'
	];
</script>

<div class="">
	<div
		class="relative flex justify-center items-center bg-[#0e0f14] rounded-t-lg w-full overflow-hidden"
	>
		<img
			src="/images/projects/app-aemers/app-aemers-login.png"
			alt="Project"
			class="absolute object-fill w-full -rotate-45 opacity-20"
		/>
		{#if browser}
			<Carousel let:showPrevPage let:showNextPage bind:this={carousel} dots={false} class="z-20">
				<button slot="prev" on:click={showPrevPage} class="flex items-center justify-center px-2">
					<MaterialSymbolsArrowBackIos />
				</button>
				{#each images as img, index}
					<img
						src="/images/projects/app-aemers/{img}"
						alt="Project"
						class="object-cover rounded-t-lg w-full md:w-11/12 mt-20 md:mt-32"
					/>
				{/each}
				<button slot="next" on:click={showNextPage} class="flex items-center justify-center px-2">
					<MaterialSymbolsArrowForwardIos />
				</button>
			</Carousel>
		{/if}
	</div>
	<a href="/">
		<h6 class="font-light text-white text-lg md:text-xl tracking-wide hover:underline mt-4">
			app.aemers - College Application Tracker
		</h6>
	</a>
</div>
