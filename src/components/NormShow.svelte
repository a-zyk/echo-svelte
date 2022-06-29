<script>
     import {norms} from "../stores/description"
     export let dog;
     export let cat;
</script>

{#if $norms.show}
    {#if $norms.species === "dog"}
    <span>{dog}</span>
    {:else if $norms.species === "cat" }
    <span>{cat}</span>
    {/if}
{/if}

