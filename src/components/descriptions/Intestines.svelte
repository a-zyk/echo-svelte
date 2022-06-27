<script>
    import {intestines} from "../../stores/description"
</script>

{#if $intestines.thicknessDuo}
<span>Dvylikapirštės žarnos sienelės storis yra {$intestines.thicknessDuo} cm.</span>
{/if}

{#if $intestines.otherChangesDuo}
<span>{$intestines.otherChangesDuo}.</span>
{/if}

{#if $intestines.thicknessJeju}
<span>Tusčiosios žarnos sienelės storis yra {$intestines.thicknessJeju} cm.</span>
{/if}

{#if $intestines.otherChangesJeju}
<span>{$intestines.otherChangesJeju}.</span>
{/if}

{#if $intestines.thicknessCec}
<span>Aklosios žarnos sienelės storis ties ileocekaline jungtimi yra {$intestines.thicknessCec} cm.</span>
{/if}

{#if $intestines.otherChangesCec}
<span>{$intestines.otherChangesCec}.</span>
{/if}

{#if $intestines.thicknessCol}
<span>Storosios žarnos sienelės yra {$intestines.thicknessCol} cm.</span>
{/if}

{#if $intestines.otherChangesCec}
<span>{$intestines.otherChangesCec}.</span>
{/if}