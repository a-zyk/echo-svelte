<script>
	export let value;
	export let title;
	export let placeholder = '';
	export let prefix;

	let component;
	const eventName = `${prefix}:otherChanges:changed`;

	const emitEvent = () => {
		const event = new CustomEvent('track', { detail: eventName, bubbles: true });
		component.dispatchEvent(event);
	};
</script>

<div class=" flex flex-col items-start">
	<label class="titles" for={title}>{title}</label>

	<textarea
		bind:this={component}
		on:change={emitEvent}
		{prefix}
		id={title}
		class="text-sm px-4 py-2 border border-gray-300 rounded-lg max-w-full"
		rows="5"
		cols="30"
		bind:value
		{placeholder}
	/>
</div>
