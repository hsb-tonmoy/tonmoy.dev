<script>
	import '../app.css';
	import Nav from '$lib/layout/Nav.svelte';
</script>

<div
	class="max-w-[1170px] w-full px-10 xl:px-0 flex flex-col mx-auto text-textColor dark:text-textColorDark"
>
	<Nav />
	<slot />
</div>

<style lang="postcss">
	:global(a.underline-link) {
		@apply inline-block relative dark:hover:text-textColorBoldDark;
	}

	:global(a.underline-link::after) {
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

	:global(a.underline-link:hover:after, a.underline-link.active::after) {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
