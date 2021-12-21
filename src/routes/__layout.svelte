<script>
	import '../app.css';
	import Nav from '$lib/layout/nav.svelte';
</script>

<div
	class="max-w-[1170px] w-full px-10 xl:px-0 flex flex-col mx-auto text-textColor dark:text-textColorDark"
>
	<Nav />
	<slot />
</div>
