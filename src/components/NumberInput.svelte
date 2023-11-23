<script>
	export let tooltipText = '';
	export let value;
	export let title;
	export let prefix;
	import Tooltip from '../components/Tooltip.svelte';

	let component;
	const eventName = `${prefix}:${title}:changed`;

	const emitEvent = () => {
		const event = new CustomEvent('track', { detail: eventName, bubbles: true });
		component.dispatchEvent(event);
	};
</script>

<div bind:this={component} on:change={emitEvent} class="flex flex-col items-start mb-4 max-w-full">
	{#if title && title.length}
		<div class="flex gap-2">
			<label class=" cursor-pointer titles" for={title}>{title}</label>
			{#if tooltipText}
				<Tooltip {tooltipText} />
			{/if}
		</div>
	{/if}
	<input id={title} bind:value type="number" min="0" max="10.0" />
</div>
