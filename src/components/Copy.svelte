<script>
	export let tooltipText;
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions({
		placement: 'right',
		strategy: 'fixed'
	});
	const extraOpts = {
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
	};

	let showTooltip = false;

	function copy() {
		navigator.clipboard.writeText(descriptionElement.innerText);
		showTooltip = true;
		setTimeout(() => {
			showTooltip = false;
		}, 1000);
	}

	export let descriptionElement;

</script>


	<button
		class="bg-gray-500 self-start cursor-pointer text-white text-xs font-bold py-1 px-2 rounded
active:bg-blue-500"
use:popperRef	on:click={copy}>Kopijuoti</button
	>

{#if showTooltip}
	<div
		class="relative text-xs z-20 bg-slate-500 py-1 px-2 text-white rounded-md max-w-sm"
		id="tooltip"
		use:popperContent={extraOpts}
	>
		Nukopijuota
		<div id="arrow" data-popper-arrow />
	</div>
{/if}
