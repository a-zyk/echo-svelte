<script>
	import { liver, lymphnodes } from '../../stores/description';

	$: sizes = $lymphnodes.hepatic
		.map((hepatic) => {
			if (hepatic.length && hepatic.width) {
				return `${hepatic.length}x${hepatic.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
	{#if $liver.echogen && $liver.comtoSpleen}
		<span
			>Kepenų parenchima yra {$liver.echogen}, {$liver.comtoSpleen} blužnies parenchimai.</span
		>
	{:else if $liver.echogen}
		<span>Kepenų parenchima yra {$liver.echogen}.</span>
	{:else if $liver.comtoSpleen}
		<span>Kepenų parenchima yra {$liver.comtoSpleen} lyginant su blužnies parenchima.</span>
	{/if}

	{#if $liver.margins}
		<span>Skilčių kraštai {$liver.margins}.</span>
	{/if}

	{#if $liver.vasc}
		<span>Kraujagyslės {$liver.vasc}.</span>
	{/if}

	{#if $liver.otherChanges}
		<span>{$liver.otherChanges}.</span>
	{/if}

	<!-- limfmazgis -->
	{#if $lymphnodes.numberHepatic === 1 && $lymphnodes.sizeHepatic}
		<span>Stebimas 1 {$lymphnodes.sizeHepatic}s hepatinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberHepatic && $lymphnodes.sizeHepatic}
		<span
			>Stebimi {$lymphnodes.numberHepatic}
			{$lymphnodes.sizeHepatic} hepatiniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberHepatic === 1}
		<span>Stebimas 1 hepatinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberHepatic}
		<span>Stebimi {$lymphnodes.numberHepatic} hepatiniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenHepatic && $lymphnodes.numberHepatic > 1}
		<span>Hepatinių lm. parenchima yra {$lymphnodes.echogenHepatic} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenHepatic}
		<span
			>Hepatinio limfinio mazgo parenchima yra {$lymphnodes.echogenHepatic} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizes}
		<span>Ilgis ir plotis {sizes}</span>
	{/if}

	{#if $lymphnodes.otherChangesHepatic}
		<span>{$lymphnodes.otherChangesHepatic}</span>
	{/if}
	<!-- limfmazgis -->
</div>
