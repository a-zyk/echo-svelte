<script>
	import NormSelection from '../components/NormSelection.svelte';
	import NormShow from '../components/NormShow.svelte';
	import AllForms from '../components/forms/All.svelte';
	import AllDescriptions from '../components/descriptions/All.svelte';
	import Copy from '../components/Copy.svelte';
	let descriptionElement;
</script>

<div class="container mb-5">
	<div class="flex gap-5 relative">
		<div class="flex flex-col w-1/2 gap-2">
			<AllForms />
		</div>

		<div class=" gap-5 flex flex-col w-1/2 sticky top-0 self-start">
			<div class="p-2 card">
				<div contenteditable="true">
					<div bind:this={descriptionElement}>
						<div class="font-bold text-lg text-center mb-2">Echoskopijos aprašymas</div>

						<AllDescriptions />

						<div class="text-xs">
							<NormShow
								cat="n-normalus dydis, išmatavimų normų šaltinis: Atlas of small animal ultrasonography 2nd edition by Dominique
					Penninck, Marc-André d’Anjou"
								dog="n-normalus dydis, išmatavimų normų šaltinis: Atlas of small animal ultrasonography 2nd edition by Dominique
					Penninck, Marc-André d’Anjou"
							/>
						</div>
					</div>
				</div>
				<div class="mt-2 ">
					<Copy {descriptionElement} />
				</div>
			</div>

			<NormSelection />
		</div>
	</div>
</div>
