<script>
	export let tooltipText;
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
  
  
  <div 
	use:popperRef
	on:mouseenter={() => showTooltip = true}
	on:mouseleave={() => showTooltip = false}
	class="flex text-white items-center justify-center cursor-pointer bg-slate-400 rounded-full w-5 h-5 min-w-[20px]"
  >
  ?
  </div>
  {#if showTooltip}
	<div class="relative z-20 bg-slate-500 py-1 px-2 text-white rounded-md max-w-sm"  id="tooltip" use:popperContent={extraOpts}>
	  {tooltipText}
	  <div id="arrow" data-popper-arrow />
	</div>
  {/if}
