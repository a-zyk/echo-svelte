<script>
    export let value;
    export let title;
</script>


<div class="flex flex-col items-start mb-4">
<label class=" cursor-pointer titles" for={title}>{title}</label>
<input  id={title} bind:value type="number"  min="0" max="10.0"/>
</div>