<script>
	import { fly } from 'svelte/transition';
	export let classes;
	let show = false;
	function toggle() {
		show = !show;
	}
</script>

<div class={classes}>
	<div class="cursor-pointer text-xl font-bold mt-2 p-3" on:click={toggle}>
		<slot name="title" />
	</div>

	{#if show}
		<div class="p-5 " in:fly={{ y: 0, duration: 1000 }} out:fly={{ y: 0, duration: 100 }}>
			<slot name="content" />
		</div>
	{/if}
</div>
