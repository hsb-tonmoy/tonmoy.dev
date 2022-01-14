<script context="module">
	export const load = async ({ fetch, page: { params } }) => {
		const { slug } = params;
		const res = await fetch(`/posts/${slug}.json`);
		if (res.ok) {
			const { post } = await res.json();
			return {
				props: { post }
			};
		}
	};
</script>

<script>
	export let post;
</script>

<svelte:head>
	<title>{post.title} - tonmoy.dev</title>
</svelte:head>

<main class="flex flex-col">
	<div class="coverImage mb-12">
		<img
			src={post.coverImage.url}
			alt={post.title}
			class="w-[1140px] h-[400px] object-cover rounded"
		/>
	</div>
	<article class="flex flex-col max-w-[700px] mx-auto">
		<div class="post-info text-[#a1a6b1] uppercase text-sm mb-8">
			<span class="categories">{post.categories[0].name}</span><span class="date">{post.date}</span
			><span class="time">4 MIN READ</span><span class="comments">0 COMMENTS</span>
		</div>
		<h1
			class="post-title text-textColorBold dark:text-textColorBoldDark font-serif text-[2.5rem] leading-[1.3] mb-6"
		>
			{post.title}
		</h1>
		<div class="post-content text-textColor dark:text-textColorDark text-base leading-loose">
			{@html post.content.html}
		</div>
	</article>
</main>

<style>
	.post-info span {
		margin-right: 8px;
	}
	.post-info span::after {
		content: '/';
		margin-left: 8px;
	}

	.post-info span:last-child::after {
		content: '';
	}

	:global(p) {
		margin-bottom: 1.5rem !important;
	}
</style>
