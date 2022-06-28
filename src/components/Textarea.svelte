<script>
	export let value;
	export let title;
    export let placeholder = '';
	
</script>

<div class=" flex flex-col items-start">
	
	<label class="titles" for={title}>{title}</label>

	<textarea
		id={title}
		class="text-sm px-4 py-2 border border-gray-300 rounded-lg max-w-full"
		rows="5"
		cols="30"
		bind:value
		{placeholder}
	/>

</div>
