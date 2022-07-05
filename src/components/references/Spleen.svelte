<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/spleen';
</script>

<Toggle autoclosable=true classes="card mt-2">
<div class="text-center" slot="title">Blužnis</div>
<div slot="content">

    <Toggle classes="card mt-2">
        <div slot="title">Normali blužnis</div>
        <div slot="content">
            <Modal src="/images/spleen/normalibluzniskate.png" text={TXT.HEALTHY_SPLEEN_DESCR} />
            {TXT.HEALTHY_SPLEEN_TEXT}

        </div>
    </Toggle>

    <Toggle classes="card mt-2">
        <div slot="title">Splenomegalija</div>
        <div slot="content">
            <Toggle>
                <div slot="title">Splenomegalija ir normalus echogeniškumas</div>
                <div slot="content">
                    <Modal src="/images/spleen/bluzniesuzsisukimas.png" text={TXT.SPLENOMEGALY_NORMAL_DESCR} />
                    {TXT.SPLENOMEGALY_NORMAL_TEXT}
                    
                </div>
            </Toggle>

            <Toggle>
                <div slot="title">Splenomegalija ir pakitęs echogeniškumas</div>
                <div slot="content">
                    <Modal src="/images/spleen/limfomabluznissuo.png" text={TXT.SPLENOMEGALY_NOTNORM_DESCR} />
                    {TXT.SPLENOMEGALY_NOTNORM_TEXT}
                    
                </div>
            </Toggle>
            
        </div>
    </Toggle>

    <Toggle classes="card mt-2">
        <div slot="title">Lokalūs parenchimos pakitimai</div>
        <div slot="content">
            <Modal src="/images/spleen/mielolipoma.png" text={TXT.LOCAL_PARENCHYMAL_DISEASE_DESCR} />
            {TXT.LOCAL_PARENCHYMAL_DISEASE_TEXT}
            
            
        </div>
    </Toggle>

    <Toggle classes="card mt-2">
        <div slot="title">Hemangiosarkoma ir hematoma</div>
        <div slot="content">
            <Modal src="/images/spleen/hemangiosarkoma.png" text={TXT.GENER_PARENCHYMAL_DISEASE_DESCR} />
            {TXT.GENER_PARENCHYMAL_DISEASE_TEXT}
            
        </div>
    </Toggle>



</div>
</Toggle>