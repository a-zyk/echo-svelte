<script>
	import { liver } from '../../stores/description';
</script>

<div>
	{#if $liver.echogen}
		<span>Kepenų parenchima yra {$liver.echogen}.</span>
	{/if}

	{#if $liver.comToSpleen}
		<span>Lyginant su blužnies parenchima, kepenų parenchima yra {$liver.comToSpleen}.</span>
	{/if}
</div>

{#if $liver.margins}
	<span>Skilčių kraštai {$liver.margins}.</span>
{/if}

{#if $liver.vasc}
	<span>Kraujagyslės {$liver.vasc}.</span>
{/if}

{#if $liver.otherChanges}
	<span>{$liver.otherChanges}</span>
{/if}
