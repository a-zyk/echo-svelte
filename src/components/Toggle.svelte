<script>
	import { fly } from 'svelte/transition';
	import { active } from '../stores/toggleAutoClose';

	import { v4 as uuidv4 } from 'uuid';
	const id = uuidv4();

	export let classes;
	export let autoclosable = false;
	let show = false;
	function toggle() {
		show = !show;

		if (autoclosable) {
			$active = id;
		}
	}

	$: {
		if (autoclosable) {
			show = $active == id
		}
	}
</script>

<div class={classes}>
	<div class="flex cursor-pointer text-xl font-bold mt-2 p-3" on:click={toggle}>
		<slot name="title" />
		<div class="flex flex-grow" />
		<div class="text-4xl font-bold">
			{#if show}
				-
			{:else}
				+
			{/if}
		</div>
	</div>

	{#if show}
		<div class="p-5" in:fly={{ y: 0, duration: 1000 }} out:fly={{ y: 0, duration: 100 }}>
			<slot name="content" />
		</div>
	{/if}
</div>
