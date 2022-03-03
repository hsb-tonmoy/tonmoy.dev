<script>
	import { moon, sun, search, menu } from '../svg/nav.js';

	let dark = false;

	function toggleDarkMode() {
		document.querySelector('html').classList.toggle('dark');
		dark = !dark;
	}
</script>

<header
	class="flex mt-10 py-5 justify-between items-center font-avenir text-black dark:text-textColorBoldDark"
>
	<div id="logo" class="text-xl lg:text-3xl font-black uppercase">
		<a href="/">Tonmoy.</a>
	</div>
	<nav class="md:flex hidden items-center gap-x-8 text-base font-medium">
		<a href="/projects" class="">Projects</a>
		<a href="/about" class="">About Me</a>
		<a href="/contact" class="">Contact Me</a>
		<div id="buttons" class="flex items-center gap-x-4 pb-[6px]">
			{#if dark}
				<button on:click={toggleDarkMode} class="">{@html sun}</button>
			{:else}
				<button on:click={toggleDarkMode} class="">{@html moon}</button>
			{/if}
			<button class="">{@html search}</button>
			<button class="block md:hidden">{@html menu}</button>
		</div>
	</nav>
</header>

<style lang="postcss">
	nav a {
		@apply inline-block relative pb-[6px] dark:hover:text-textColorBoldDark;
	}

	nav a::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #c36;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	nav a:hover:after,
	.active::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
