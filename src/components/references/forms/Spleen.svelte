<script>
	import { spleen as spleenStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	const prefix = 'spleen';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Blužnis</div>
	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Blužnies parenchima</div>
			<Tooltip tooltipText="Normali blužnies parenchima yra homogeniška." />
		</div>
		<div class="radio">
			<RadioBtn
				{prefix}
				bind:group={$spleenStore.echogen}
				value="homogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				{prefix}
				bind:group={$spleenStore.echogen}
				value="heterogeniška"
				name="echogenicity"
			/>
		</div>
		<div class="flex gap-2">
			<div class="titles">Blužnies parenchima lyginant su kepenimis</div>
			<Tooltip tooltipText="Normali blužnis yra hiperechogeniška lyginant su kepenimis." />
		</div>
		<div class="radio">
			<RadioBtn
				{prefix}
				bind:group={$spleenStore.comToLiver}
				value="izoechogeniška"
				name="toLiver"
			/>
			<RadioBtn
				{prefix}
				bind:group={$spleenStore.comToLiver}
				value="hipoechogeniška"
				name="toLiver"
			/>
			<RadioBtn
				{prefix}
				bind:group={$spleenStore.comToLiver}
				value="hiperechogeniška"
				name="toLiver"
			/>
		</div>
		<div class="flex gap-2">
			<div class="titles">Blužnies kraštai</div>
			<Tooltip tooltipText="Normalios blužnies kraštai yra aštrūs." />
		</div>
		<div class="radio">
			<RadioBtn {prefix} bind:group={$spleenStore.margins} value="aštrūs" name="margins" />
			<RadioBtn {prefix} bind:group={$spleenStore.margins} value="suapvalėję" name="margins" />
		</div>

		<Textarea
			{prefix}
			title="Kiti pakitimai"
			bind:value={$spleenStore.otherChanges}
			placeholder="masės, kraujagyslės, kapsulė"
		/>
	</div>
</Toggle>
