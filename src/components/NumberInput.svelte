<script>
   export let tooltipText="";
    export let value;
    export let title;
    import Tooltip from "../components/Tooltip.svelte"
</script>


<div class="flex flex-col items-start mb-4">
<label class=" cursor-pointer titles" for={title}>{title}</label>
{#if tooltipText}
<Tooltip {tooltipText} />
{/if}
<input  id={title} bind:value type="number"  min="0" max="10.0"/>
</div>