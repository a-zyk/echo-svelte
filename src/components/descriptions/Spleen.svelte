<script>
	import { spleen } from '../../stores/description';
</script>

{#if $spleen.echogen}
	<span>Blužnies parenchima yra {$spleen.echogen}.</span>
{/if}

{#if $spleen.comToLiver}
	<span>Lyginant su kepenų parenchima, blužnies parenchima yra {$spleen.comToLiver}.</span>
{/if}

{#if $spleen.margins}
	<span>Kraštai {$spleen.margins}.</span>
{/if}

{#if $spleen.otherChanges}
	<span>{$spleen.otherChanges}.</span>
{/if}
