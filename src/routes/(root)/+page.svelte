<script lang='ts'>
	import { inview } from 'svelte-inview';
  import type { ObserverEventDetails, ScrollDirection, Options } from 'svelte-inview';

  let isInView: boolean;
  let scrollDirection: ScrollDirection;
  const options: Options = {
    rootMargin: '-20px',
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };

	import Introduction from './Introduction.svelte';
	import About from './About.svelte';
	import Resume from './Resume.svelte';
</script>

<div id="main" class="container w-full xl:w-auto xl:max-w-3xl h-full mx-auto flex flex-col">
		<Introduction />
		
		<About />


		<Resume />
	
</div>

<style lang='postcss'>
	#main {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 
}

#main::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}
</style>