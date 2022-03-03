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

<svelte:head>
	<title>Hasibuzzaman Tonmoy</title>
</svelte:head>

<main class="mt-12 md:mt-32">
	<Hero />
	<div class="posts md:w-[700px] w-full mx-auto mt-24 flex flex-col">
		{#each posts as { title, slug, excerpt, categories, date }}
			<Post {slug} {categories} {date} {title} {excerpt} />
		{/each}
	</div>
</main>
