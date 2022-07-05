<script>
	import { femaleTractL, femaleTractR, uterus } from '../../stores/description';
	import NormShow from '../NormShow.svelte';
</script>


<div class="mb-2">
    {#if $uterus.otherChanges}
    <span>{$uterus.otherChanges}.</span>
{/if}

</div>
<div class="mb-2">
{#if JSON.stringify($femaleTractL) !== "{}"}
			<span>Kairė kiaušidė-</span>
		{/if}

{#if $femaleTractL.echogen}
	<span>Kiaušidė yra {$femaleTractL.echogen} aplink esantiems riebalams.</span>
{/if}

{#if $femaleTractL.length && $femaleTractL.width}
			<span>Kiaušidės ilgis ir plotis {$femaleTractL.length}x{$femaleTractL.width}cm<NormShow cat=" (n- ilgis <1cm)" dog=" (n- ilgis 1-2cm)"/>.</span>
		{:else if $femaleTractL.length}
			<span>Kiaušidės ilgis {$femaleTractL.length}cm<NormShow cat=" (n- <1cm)" dog=" (n- 1-2cm)"/>.</span>
		{:else if $femaleTractL.width}
			<span>Kiaušidės plotis {$femaleTractL.width}cm.</span>
		{/if}

{#if $femaleTractL.otherChanges}
	<span>{$femaleTractL.otherChanges}.</span>
{/if}
</div>

<div >
    {#if JSON.stringify($femaleTractR) !== "{}"}
                <span>Dešinė kiaušidė-</span>
            {/if}
    
    {#if $femaleTractR.echogen}
        <span>Kiaušidė yra {$femaleTractR.echogen} aplink esantiems riebalams.</span>
    {/if}
    
    {#if $femaleTractR.length && $femaleTractR.width}
                <span>Kiaušidės ilgis ir plotis {$femaleTractR.length}x{$femaleTractR.width}cm<NormShow cat=" (n- ilgis <1cm)" dog=" (n- ilgis 1-2cm)"/>.</span>
            {:else if $femaleTractR.length}
                <span>Kiaušidės ilgis {$femaleTractR.length}cm<NormShow cat=" (n- <1cm)" dog=" (n- 1-2cm)"/>.</span>
            {:else if $femaleTractR.width}
                <span>Kiaušidės plotis {$femaleTractR.width}cm.</span>
            {/if}
    
    {#if $femaleTractR.otherChanges}
        <span>{$femaleTractR.otherChanges}.</span>
    {/if}
    </div>
    


