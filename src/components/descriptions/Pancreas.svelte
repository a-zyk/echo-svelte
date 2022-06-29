<script>
	import { pancreas } from '../../stores/description';
	import * as TXT from '../../texts/pancreas';
	import NormShow from '../NormShow.svelte';
</script>

<div class="mb-2">
{#if $pancreas.echogen}
	<span>Kasa yra {$pancreas.echogen} aplink esantiems riebalams.</span>
{/if}

{#if $pancreas.width}
	<span>Kasos latako plotis {$pancreas.width}cm<NormShow cat={TXT.DUCTUS_CAT} dog={TXT.DUCTUS_DOG}/>.</span>
{/if}

{#if $pancreas.otherChanges}
	<span>{$pancreas.otherChanges}.</span>
{/if}
</div>