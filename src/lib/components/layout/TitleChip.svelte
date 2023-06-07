<script lang="ts">
	export let icon: ConstructorOfATypedSvelteComponent;
	export let title: string;
</script>

<button
	id="#{title}"
	class="btn btn-md variant-ringed-surface text-white uppercase text-xs w-fit mb-8 md:mb-12"
	><span class="w-4 h-4"><svelte:component this={icon} /></span> <span>{title}</span></button
>
