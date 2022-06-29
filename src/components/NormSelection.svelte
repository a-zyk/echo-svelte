<script>
	import { norms } from '../stores/description';
</script>

<div class="flex items-center ">
	<input bind:checked={$norms.show} type="checkbox" id="norm" />
	<label class="ml-2" for="norm">Rodyti normas aprašyme</label>
</div>

{#if $norms.show}
	<div>
		<label for="cat">Katė</label>
		<input type="radio" id="cat" value="cat" name="species" bind:group={$norms.species} />

		<label for="dog">Šuo</label>
		<input type="radio" id="dog" value="dog" name="species" bind:group={$norms.species} />
	</div>
{/if}
