<script>
	import RiFacebookFill from '~icons/ri/facebook-fill'
	import RiGithubFill from '~icons/ri/github-fill'
	import RiLinkedinFill from '~icons/ri/linkedin-fill'
	import RiInstagramFill from '~icons/ri/instagram-fill'

	export let widthClass = 'w-12 h-12';
</script>

<div class="social-icons" style="--width-class: {widthClass}">
	<ul class="list-none flex items-center gap-3 justify-center">
		<li class="icon-style {widthClass}">
			<a href="https://www.linkedin.com/in/hasibuzzaman-tonmoy/" target="_blank"><RiLinkedinFill /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://github.com/hsb-tonmoy/" target="_blank"><RiGithubFill /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://fb.com/hasibuzzaman.tonmoy/" target="_blank"><RiFacebookFill /></a>
		</li>
		<li class="icon-style {widthClass}">
			<a href="https://www.instagram.com/sdktonmoy/" target="_blank"><RiInstagramFill /></a>
		</li>
	</ul>
</div>

<style lang="postcss">
	.icon-style {
		@apply inline-flex items-center justify-center border-2 border-surface-500 hover:border-white rounded-full p-[13px] text-textColor hover:text-white transition-all ease-in-out duration-300 cursor-pointer;
	}
</style>
