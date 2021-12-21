<script>
	import { moon, sun, search, menu } from '../svg/nav.js';

	let dark = false;

	function toggleDarkMode() {
		document.querySelector('html').classList.toggle('dark');
		dark = !dark;
	}
</script>

<header class="flex py-7 justify-between items-center">
	<div id="logo" class="font-bold text-textColorBold dark:text-textColorBoldDark text-base">
		tonmoy.dev
	</div>
	<nav class="md:flex hidden items-center gap-x-4 text-sm">
		<a href="/" class="active">Home</a>
		<a href="#" class="">About Me</a>
		<a href="#" class="">Portfolio</a>
		<a href="#" class="">Resume</a>
		<a href="#" class="">Contact Me</a>
	</nav>
	<div id="buttons" class="flex gap-x-4">
		{#if dark}
			<button on:click={toggleDarkMode} class="">{@html sun}</button>
		{:else}
			<button on:click={toggleDarkMode} class="">{@html moon}</button>
		{/if}
		<button class="">{@html search}</button>
		<button class="block md:hidden">{@html menu}</button>
	</div>
</header>

<style lang="postcss">
	nav a {
		@apply hover:text-textColorBold dark:hover:text-textColorBoldDark;
	}
	nav a {
		display: inline-block;
		position: relative;
		padding-bottom: 2px;
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
