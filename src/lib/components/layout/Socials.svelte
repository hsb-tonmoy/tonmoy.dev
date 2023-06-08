<script>
	import GitHub from '$lib/icons/GitHub.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';

	export let widthClass = 'w-12 h-12';
</script>

<div class="social-icons" style="--width-class: {widthClass}">
	<ul class="list-none flex items-center gap-3 justify-center">
		<li class="icon-style {widthClass}">
			<a href="https://www.linkedin.com/in/hasibuzzaman-tonmoy/" target="_blank"><LinkedIn /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://github.com/hsb-tonmoy/" target="_blank"><GitHub /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://fb.com/hasibuzzaman.tonmoy/" target="_blank"><Facebook /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://www.instagram.com/sdktonmoy/" target="_blank"><Instagram /></a>
		</li>
	</ul>
</div>

<style lang="postcss">
	.icon-style {
		@apply block border-2 border-surface-500 hover:border-white rounded-full p-[13px] text-textColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer;
	}
</style>
