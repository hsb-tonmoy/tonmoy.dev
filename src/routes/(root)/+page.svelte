<script lang="ts">
	import Introduction from './Introduction.svelte';
	import About from './About.svelte';
	import Resume from './Resume.svelte';
	import Skills from './Skills.svelte';
	import Projects from './Projects.svelte';
</script>

<div id="main" class="container w-full xl:w-auto xl:max-w-3xl h-full mx-auto flex flex-col">
	<Introduction />

	<About />

	<Resume />

	<Skills />

	<Projects />
</div>

<style lang="postcss">
	#main {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
		overflow-y: scroll;
	}

	#main::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}
</style>
