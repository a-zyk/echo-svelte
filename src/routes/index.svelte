<script>
	import NormSelection from '../components/NormSelection.svelte';
	import NormShow from '../components/NormShow.svelte';
	import AllForms from '../components/references/forms/All.svelte';
	import AllDescriptions from '../components/descriptions/All.svelte';
	import Copy from '../components/Copy.svelte';
	let descriptionElement;
	let descriptionHidden = true;
	const hideDescription = () => {
		descriptionHidden = true;
	};

	const showDescription = () => {
		descriptionHidden = false;
	};
</script>

<div class="container mb-5">
	<div class="flex flex-row gap-10 mb-2 justify-between md:hidden">
		<button
			class="{descriptionHidden
				? 'bg-blue-500'
				: ''} bg-gray-500 active:bg-blue-500 w-1/2 cursor-pointer text-white text-xs font-bold py-2 px-4 rounded"
			on:click={hideDescription}>Kurti aprašymą</button
		>

		<button
			class="{descriptionHidden
				? ''
				: 'bg-blue-500'} bg-gray-500 active:bg-blue-500 w-1/2 cursor-pointer text-white text-xs font-bold py-2 px-4 rounded"
			on:click={showDescription}>Sugeneruotas aprašymas</button
		>
	</div>

	<div class="flex gap-5 relative">
		<!-- forma -->
		<div class="{descriptionHidden ? '' : 'hidden md:flex'} flex w-full flex-col md:w-1/2 gap-2">
			<AllForms />
		</div>
		<!-- forma -->

		<!-- Aprasymas -->
		<div
			class="{descriptionHidden
				? 'hidden md:flex'
				: ''} flex w-full gap-5 flex-col md:w-1/2 sticky top-0 self-start"
		>
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
		<!-- aprasymas -->
	</div>
</div>
