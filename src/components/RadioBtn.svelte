<script>
	export let group;
	export let value;
	export let title = '';
	export let name;
	export let prefix;

    let component;
	const eventName = `${prefix}:${name}:changed`;

	const emitEvent = () => {
        const event = new CustomEvent('track', { detail: eventName, bubbles: true })
        component.dispatchEvent(event)
	};
</script>

<div on:change={emitEvent} bind:this={component}>
	<input class="cursor-pointer" id={value} type="radio" bind:group {value} {name} />
	<label class="cursor-pointer" for={value}>{title || value}</label>
</div>
