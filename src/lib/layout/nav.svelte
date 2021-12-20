<script>
	import { moon, search } from '../svg/nav.js';
</script>

<header class="flex py-7 justify-between items-center">
	<div id="logo" class="font-bold text-base">tonmoy.dev</div>
	<nav class="flex items-center gap-x-4 text-sm hover:text-textColorDark">
		<a href="/" class="">Home</a>
		<a href="#" class="">About Me</a>
		<a href="#" class="">Portfolio</a>
		<a href="#" class="">Resume</a>
		<a href="#" class="">Contact Me</a>
		<button class="ml-2 mb-1">{@html moon}</button>
		<button class="mb-1">{@html search}</button>
	</nav>
</header>

<style lang="postcss">
	nav a:hover {
		@apply underline;
	}
</style>
