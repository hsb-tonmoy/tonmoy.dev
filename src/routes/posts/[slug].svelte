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

<pre>{JSON.stringify(post, null, 2)}</pre>
