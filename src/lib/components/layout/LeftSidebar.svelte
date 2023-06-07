<script>
	import GitHub from '$lib/icons/GitHub.svelte';
	import Facebook from '$lib/icons/Facebook.svelte';
	import Instagram from '$lib/icons/Instagram.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
</script>

<section class="flex flex-col xl:justify-center gap-8">
	<div class="flex items-center justify-between">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-gray-400 to-white bg-clip-text text-transparent box-decoration-clone uppercase font-semibold text-3xl md:text-4xl"
				>Tonmoy.</span
			>
		</h1>
		<div class="flex flex-col gap-1 text-xs md:text-sm text-white">
			<span class="">Software Developer</span>
			<span class="text-right">& Data Analyst</span>
		</div>
	</div>
	<div class="flex justify-center">
		<img src="/images/headshot.jpg" alt="Headshot" class="w-80 object-cover rounded-xl" />
	</div>
	<div class="flex flex-col gap-2 mt-4 text-white text-center font-light">
		<a href="tel:+12692701840"><span class="text-xl">+1 (269) 270 1840</span></a>
		<a href="mailto:hello@tonmoy.dev"><span class="text-2xl">hello@tonmoy.dev</span></a>
	</div>
	<div class="text-textColor text-sm text-center">&copy; 2023 Tonmoy. All Rights Reserved</div>
	<div class="social-icons">
		<ul class="list-none flex items-center gap-3 justify-center">
			<li class="icon-style">
				<a href="https://www.linkedin.com/in/hasibuzzaman-tonmoy/" target="_blank"><LinkedIn /></a>
			</li>
			<li class="icon-style">
				<a href="https://github.com/hsb-tonmoy/" target="_blank"><GitHub /></a>
			</li>
			<li class="icon-style">
				<a href="https://fb.com/hasibuzzaman.tonmoy/" target="_blank"><Facebook /></a>
			</li>
			<li class="icon-style">
				<a href="https://www.instagram.com/sdktonmoy/" target="_blank"><Instagram /></a>
			</li>
		</ul>
	</div>
	<div class="flex justify-center items-center mt-16">
		<button
			type="button"
			class="btn btn-lg variant-filled-primary hover:variant-ghost-primary w-full"
		>
			<span class="w-5 h-5"
				><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960"
					><path
						d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"
					/></svg
				></span
			>
			<span class="uppercase">Hire Me</span>
		</button>
	</div>
</section>

<style lang="postcss">
	.icon-style {
		@apply border-2 border-surface-500 hover:border-white w-12 h-12 rounded-full p-[13px] text-textColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer;
	}
</style>
