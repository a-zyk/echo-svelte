<script>
	import Hepatic from './lymphnodes/Hepatic.svelte';
	import Splenic from './lymphnodes/Splenic.svelte';
	import Jejunal from './lymphnodes/Jejunal.svelte';
	import PancreaticoDuodenal from './lymphnodes/PancreaticoDuodenal.svelte';
	import Colic from './lymphnodes/Colic.svelte';
	import LumbarRenal from './lymphnodes/LumbarRenal.svelte';
	import MedIliac from './lymphnodes/MedialIliac.svelte';
	import InternalIliac from './lymphnodes/InternalIliac.svelte';
	import Sacral from './lymphnodes/Sacral.svelte';
	import Stomach from "./lymphnodes/Stomach.svelte"
	import Toggle from '../Toggle.svelte';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Limfiniai mazgai</div>
	<div class="gap-2 flex flex-col" slot="content">
		<div class="titles">Visceraliniai limfiniai mazgai</div>
		<Splenic />
		<Hepatic />
		<Stomach/>
		<PancreaticoDuodenal />
		<Jejunal />
		<Colic />
		<div class="titles">Parietaliniai limfiniai mazgai</div>
		<LumbarRenal />
		<MedIliac />
		<InternalIliac />
		<Sacral />

		<div class=" mb-2 mt-2 text-sm">
			Šaltiniai: Atlas of small animal ultrasonography 2nd edition by Dominique Penninck, Marc-André
			d’Anjou,
			<a class="text-blue-600"
				href="https://todaysveterinarypractice.com/radiology-imaging/ultrasonography-peritoneal-retroperitoneal-spaces-abdominal-lymph-nodes/"
				target="_blank"
				>Todays veterinary practise straipsnis,
			</a>
			<a class="text-blue-600"
				href="https://www.dvm360.com/view/ultrasonography-lymph-nodes-vessels-and-abdominal-effusions-what-can-i-see-proceedings"
				target="_blank"
				>DVM 360 straipsnis
			</a>
		</div>
	</div>
</Toggle>
