<script>
	import { liver as liverStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Kepenys</div>
	<div slot="content">
		<div class="titles">Kepenų parenchima</div>
		<div class="radio">
			<RadioBtn bind:group={$liverStore.echogen} value="homogeniška" name="echogenicity" />
			<RadioBtn bind:group={$liverStore.echogen} value="heterogeniška" name="echogenicity" />
		</div>

		<div class="titles">Lyginant su blužnimi kepenų parenchimos echogeniškumas</div>
		<div class="radio">
			<RadioBtn bind:group={$liverStore.comtoSpleen} value="izoechogeniška" name="toSpleen" />
			<RadioBtn bind:group={$liverStore.comtoSpleen} value="hipoechogeniška" name="toSpleen" />
			<RadioBtn bind:group={$liverStore.comtoSpleen} value="hiperechogeniška" name="toSpleen" />
		</div>

		<div class="titles">Kepenų skilčių kraštai</div>
		<div class="radio">
			<RadioBtn bind:group={$liverStore.margins} value="aštrūs" name="margins" />
			<RadioBtn bind:group={$liverStore.margins} value="suapvalėję" name="margins" />
		</div>

		<div class="titles">Kepenų kraujagyslės</div>
		<div class="radio">
			<RadioBtn bind:group={$liverStore.vasc} value="neišsiplėtusios" name="vasc" />
			<RadioBtn bind:group={$liverStore.vasc} value="išsiplėtusios" name="vasc" />
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$liverStore.otherChanges}
			placeholder="masės, mineralizacijos"
		/>
	</div>
</Toggle>
