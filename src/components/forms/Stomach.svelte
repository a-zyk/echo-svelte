<script>
	import { stomach as stomachStore } from '../../stores/description';
	import Toggle from '../../components/Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Skrandis</div>
	<div slot="content">
		<div class="titles">Skrandžio prisipildymas</div>

		<div class="radio">
			<RadioBtn bind:group={$stomachStore.content} value="tusčias" name="content" />
			<RadioBtn
				bind:group={$stomachStore.content}
				value="vidutiniškai prisipildęs"
				name="content"
			/>
			<RadioBtn bind:group={$stomachStore.content} value="perpildytas" name="content" />
		</div>

		<div class="flex gap-5">
			<NumberInput bind:value={$stomachStore.thickness} title="Sienelės storis, cm" />

			<NumberInput bind:value={$stomachStore.peristalsis} title="Peristaltika, k/min" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$stomachStore.otherChanges}
			placeholder="masės, svetimkūniai, dujos"
		/>
	</div>
</Toggle>
