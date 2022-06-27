<script>
	export let value;
	export let title;
    export let placeholder = '';
</script>

<div class="flex flex-col items-start">
	<label class="titles" for={title}>{title}</label>
	<textarea
		id={title}
		class="text-sm px-4 py-2 border border-gray-300 rounded-lg"
		rows="5"
		cols="35"
		bind:value
		{placeholder}
	/>
</div>
