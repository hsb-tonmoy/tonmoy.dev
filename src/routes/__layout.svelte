<script>
	import '../app.css';
	import Nav from '$lib/layout/nav.svelte';
</script>

<div class="container mx-auto text-textColor">
	<Nav />
	<slot />
</div>
