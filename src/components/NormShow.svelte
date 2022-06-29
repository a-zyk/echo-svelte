<script>
	import { norms } from '../stores/description';

	export let dog;
	export let dogSmall = dog;
	export let dogMedium = dog;
	export let dogLarge = dog;

	export let cat;
</script>

{#if $norms.show}
	{#if $norms.species === 'dog'}
		<span>
			{#if $norms.weight === '<15kg'}
				{dogSmall}
			{:else if $norms.weight === '15-30kg'}
				{dogMedium}
			{:else if $norms.weight === '>30kg'}
				{dogLarge}
			{:else}
				{dog}
			{/if}
		</span>
	{:else if $norms.species === 'cat'}
		<span>{cat}</span>
	{/if}
{/if}






