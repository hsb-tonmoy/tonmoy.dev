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
	import Hero from '$lib/layout/Hero.svelte';
	import Post from '$lib/blog/post.svelte';

	export let posts;
</script>

<main class="mt-12 md:mt-32">
	<Hero />
	<div class="posts w-full mx-auto mt-52 flex flex-col">
		<div class="post-block-header font-avenir border-b border-neutral-300 pb-4">
			<h2 class="text-xl">Posts</h2>
		</div>
		{#each posts as { title, slug, excerpt, categories, date }}
			<Post {slug} {categories} {date} {title} {excerpt} />
		{/each}
	</div>
</main>
