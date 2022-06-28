<script>
	import { liver } from '../../stores/description';
</script>

<div class="mb-2">
	{#if $liver.echogen}
		<span>Kepenų parenchima yra {$liver.echogen}.</span>
	{/if}

	{#if $liver.comtoSpleen}
		<span>Lyginant su blužnies parenchima, kepenų parenchima yra {$liver.comtoSpleen}.</span>
	{/if}

	{#if $liver.margins}
		<span>Skilčių kraštai {$liver.margins}.</span>
	{/if}

	{#if $liver.vasc}
		<span>Kraujagyslės {$liver.vasc}.</span>
	{/if}

	{#if $liver.otherChanges}
		<span>{$liver.otherChanges}.</span>
	{/if}
</div>
