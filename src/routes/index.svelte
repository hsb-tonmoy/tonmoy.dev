<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('/posts.json');
		if (res.ok) {
			const { posts } = await res.json();
			return {
				props: { posts }
			};
		}
	};
</script>

<script>
	import Post from '$lib/blog/post.svelte';

	export let posts;
</script>

<main class="mx-auto">
	<div id="header" class="flex flex-col md:flex-row items-center mb-24">
		<div id="hero" class="md:w-7/12 w-full mt-4 md:mt-12">
			<h1
				class="md:text-[2.5rem] text-[2rem] font-serif mb-4 text-textColorBold dark:text-textColorBoldDark"
			>
				Hello, I am Tonmoy
			</h1>
			<p class="md:text-[1.25rem] text-[1rem] leading-[1.5] opacity-90">
				A product design consultant from India, focusing on user experience, visual and interaction
				design. This is my personal blog
			</p>
		</div>
		<div class="w-1/12 hidden md:block" />
		<div id="photo" class="flex md:justify-end items-center md:w-4/12 w-full mt-12">
			<img
				class="relative drop-shadow-lg w-full md:w-11/12"
				src="/tonmoy-headshot.jpg"
				alt="tonmoy"
			/>
		</div>
	</div>
	<div class="posts md:w-[700px] w-full mx-auto mt-24 flex flex-col">
		{#each posts as post}
			<Post
				category={post.category.name}
				date={post.date}
				title={post.title}
				excerpt={post.excerpt}
			/>
		{/each}
	</div>
</main>

<style>
	img::before {
		content: '';
		position: absolute;
		top: 30px;
		right: -30px;
		border: 10px solid rgba(0, 0, 0, 0.5);
		width: 100%;
		height: 100%;
	}
</style>
