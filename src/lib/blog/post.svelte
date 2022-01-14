<script>
	export let categories, date, title, excerpt, slug;
</script>

<article class="flex flex-col py-12 border-solid border-b dark:border-[#353746]">
	<span class="post-info text-[#a1a6b1] uppercase text-sm mb-8">
		{categories[0].name} / {date} / 4 MIN READ / 0 COMMENTS
	</span>
	<h2
		class="md:text-[2rem] text-2xl leading-[1.3] font-serif text-textColorBold dark:text-textColorBoldDark mb-5"
	>
		<a href={`/posts/${slug}`}>{title}</a>
	</h2>
	<p class="text-base text-justify leading-loose">
		{excerpt}
	</p>
</article>

<style>
	h2 a {
		text-decoration: underline 0.15rem rgba(204, 51, 102, 0);
		text-underline-offset: 0.3rem;
		transition: text-decoration-color 300ms;
	}

	h2 a:hover {
		text-decoration-color: rgba(204, 51, 102, 0.8);
	}
</style>
