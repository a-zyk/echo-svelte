<script>
	export let tooltipText;

	import { fade } from 'svelte/transition';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions({
	  placement: 'right',
	  strategy: 'fixed',
	});
	const extraOpts = {
	  modifiers: [
		{ name: 'offset', options: { offset: [0, 8] } }
	  ],
	};
  
	let showTooltip = false;
  </script>
  
  <button 
  
	use:popperRef
	on:mouseenter={() => showTooltip = true}
	on:mouseleave={() => showTooltip = false}
	class="flex text-white items-center justify-center cursor-pointer bg-slate-400 rounded-full w-5 h-5"
  >
  ?
  </button>
  {#if showTooltip}
	<div class="bg-slate-500 py-1 px-2 text-white rounded-md" in:fade={{ y: 0, duration: 500 }} id="tooltip" use:popperContent={extraOpts}>
	  {tooltipText}
	  <div id="arrow" data-popper-arrow />
	</div>
  {/if}