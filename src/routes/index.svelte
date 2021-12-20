<script>
	import Post from '$lib/blog/post.svelte';
</script>

<main class="mx-auto">
	<div id="header" class="flex items-center mb-24">
		<div id="hero" class="w-7/12 mt-12">
			<h1 class="text-[2.5rem] font-serif mb-4 text-textColorDark">Hello, I am Tonmoy</h1>
			<p class="text-[1.25rem] leading-[1.5] opacity-90">
				A product design consultant from India, focusing on user experience, visual and interaction
				design. This is my personal blog
			</p>
		</div>
		<div class="w-1/12" />
		<div id="photo" class="flex justify-end items-center w-4/12 mt-12">
			<img
				class="drop-shadow-lg w-11/12"
				src="https://saima.gbjsolution.com/content/images/size/w600/2020/04/saima-gul-headshot.jpg"
				alt="tonmoy"
			/>
		</div>
	</div>
	<div class="posts w-[700px] mx-auto mt-24 flex flex-col">
		<Post />
	</div>
</main>
