<script>
	import { spleen as spleenStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Blužnis</div>
	<div slot="content">
		<div>Blužnies parenchima</div>
		<div class="radio">
			<RadioBtn bind:group={$spleenStore.echogen} value="homogeniška" name="echogenicity" />
			<RadioBtn bind:group={$spleenStore.echogen} value="heterogeniška" name="echogenicity" />
		</div>

		<div>Blužnies parenchima lyginant su kepenimis</div>
		<div class="radio">
			<RadioBtn bind:group={$spleenStore.comToLiver} value="izoechogeniška" name="toLiver" />
			<RadioBtn bind:group={$spleenStore.comToLiver} value="hipoechogeniška" name="toLiver" />
			<RadioBtn bind:group={$spleenStore.comToLiver} value="hiperechogeniška" name="toLiver" />
		</div>

		<div>Blužnies kraštai</div>
		<div class="radio">
			<RadioBtn bind:group={$spleenStore.margins} value="aštrūs" name="margins" />
			<RadioBtn bind:group={$spleenStore.margins} value="suapvalėję" name="margins" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$spleenStore.otherChanges}
			placeholder="masės, kraujagyslės, kapsulė"
		/>
	</div>
</Toggle>
