<script>
	import { norms } from '../stores/description';
    import RadioBtn from "../components/RadioBtn.svelte"
</script>

<div class="flex items-center ">
	<input bind:checked={$norms.show} type="checkbox" id="norm" />
	<label class="ml-2" for="norm">Rodyti normas aprašyme</label>
</div>

{#if $norms.show}
	<div class="flex gap-3 m-3">
        <div>
        <input class="hidden peer" type="radio" id="cat" value="cat" name="species" bind:group={$norms.species} />
		<label class="bg-gray-500  text-white font-bold py-2 px-4 rounded
        peer-checked:bg-blue-500" for="cat">Katė</label>
    </div>
      

    <div>
        <input class="hidden peer" type="radio" id="dog" value="dog" name="species" bind:group={$norms.species} />
		<label class="bg-gray-500 text-white font-bold py-2 px-4 rounded
        peer-checked:bg-blue-500" for="dog">Šuo</label>
    </div>
	</div>
   
{/if}

{#if $norms.show && $norms.species==="dog"}
    <div class="flex radio">

        <RadioBtn bind:group={$norms.weight}  value="<15kg" name="weight" />
        <RadioBtn bind:group={$norms.weight}  value="15-30kg" name="weight" />
        <RadioBtn bind:group={$norms.weight}  value=">30kg" name="weight" />
    
        </div>
{/if}  