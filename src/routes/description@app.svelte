<script>
	import Bladder from '../components/forms/Bladder.svelte';
	import BladderDescription from '../components/descriptions/Bladder.svelte';
	import Kidney from '../components/forms/Kidney.svelte';
	import KidneyDescription from '../components/descriptions/Kidney.svelte';
	import Spleen from '../components/forms/Spleen.svelte';
	import SpleenDescription from '../components/descriptions/Spleen.svelte';
	import Liver from '../components/forms/Liver.svelte';
	import LiverDescription from '../components/descriptions/Liver.svelte';
	import Gall from '../components/forms/GallBladder.svelte';
	import GallBDescription from '../components/descriptions/GallBladder.svelte';
	import Stomach from '../components/forms/Stomach.svelte';
	import StomachDescription from '../components/descriptions/Stomach.svelte';
	import Intestines from '../components/forms/Intestines.svelte';
	import IntestinesDescription from '../components/descriptions/Intestines.svelte';
	import Pancreas from '../components/forms/Pancreas.svelte';
	import PancreasDescription from '../components/descriptions/Pancreas.svelte';
	import Adrenals from '../components/forms/Adrenals.svelte';
	import AdrenalsDescription from '../components/descriptions/Adrenals.svelte';
</script>

<div class="flex gap-5 relative">
	<div class="flex flex-col w-1/2 gap-5">
		<Bladder />
		<Kidney />
		<Spleen />
		<Liver />
		<Gall />
		<Stomach />
		<Intestines />
		<Pancreas />
		<Adrenals />
	</div>

	<div class="card flex flex-col w-1/2 sticky top-0 self-start">
		<div class="font-bold text-lg text-center">Echoskopijos aprašymas</div>
		<div contenteditable="true">
			<BladderDescription />
			<KidneyDescription />
			<SpleenDescription />
			<LiverDescription />
			<GallBDescription />
			<StomachDescription />
			<IntestinesDescription />
			<PancreasDescription />
			<AdrenalsDescription />
		</div>
	</div>
</div>
