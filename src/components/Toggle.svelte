<script>
	import { fly } from 'svelte/transition';
	import { active } from '../stores/toggleAutoClose';

	import { v4 as uuidv4 } from 'uuid';
	const id = uuidv4();

	export let classes;
	export let autoclosable = false;
	export let initialState = false;

	let show = initialState;

	if (initialState) {
		$active = id;
	}

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
	<div class="flex cursor-pointer text-xl font-bold px-3 pt-3 items-center" on:click={toggle}>
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
		<div class="md:p-5" in:fly={{ y: 0, duration: 1000 }} out:fly={{ y: 0, duration: 0 }}>
			<slot name="content" />
		</div>
	{/if}
</div>
