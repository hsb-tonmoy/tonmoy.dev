<script>
	import '../app.css';
	import Nav from '$lib/layout/nav.svelte';
</script>

<div class="max-w-[1170px] flex flex-col mx-auto text-textColor">
	<Nav />
	<slot />
</div>
