<script>
    import {pancreas} from "../../stores/description"
</script>

{#if $pancreas.echogen}
<span>Kasa yra {$pancreas.echogen} aplink esantiems riebalams.</span>
{/if}

{#if $pancreas.width}
<span>Kasos latako plotis {$pancreas.width} cm.</span>
{/if}

{#if $pancreas.otherChanges}
<span>{$pancreas.otherChanges}</span>
{/if}
