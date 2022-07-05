<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/kidney';
</script>

<Toggle autoclosable=true classes="card mt-2">
    <div class="text-center" slot="title">Inkstai</div>

	<div slot="content">
        <Toggle classes="card mt-2">
            <div slot="title">Normalūs inkstai</div>
            <div slot="content">
                <Modal src="/images/kidney/normalkidney.png" text={TXT.HEALTHY_KIDNEY_DESCRIPTION} />
                {TXT.HEALTHY_KIDNEY_TEXT}
            </div>
        </Toggle>

        <Toggle classes="card mt-2">
            <div slot="title">Difuziniai inkstų parenchimos pakitimai</div>

            <div slot="content">
                <Modal
                    src="/images/kidney/etilenotoxicozeirrimsignsuo.jpg"
                    text={TXT.DIFFUSE_KIDNEY_DISEASE_DESCRIPTION}
                />
                {TXT.DIFFUSE_KIDNEY_DISEASE_TEXT}
            </div>
        </Toggle>

        <Toggle classes="card mt-2">
            <div slot="title">Lokalūs inkstų parenchimos pakitimai</div>
            <div slot="content">
                 <Toggle>
                    <div slot="title">Infarktai</div>
                    <div slot="content">
                        <Modal src="/images/kidney/infarktaiinkstesuo.jpg" text={TXT.INFARCT_KIDNEY_DESCRIPTION} />
                        {TXT.INFARCT_KIDNEY_TEXT}
                    </div>
                </Toggle>

                <Toggle>
                    <div slot="title">Cistos</div>
                    <div slot="content">
                        <Modal src="/images/kidney/policistinisinkstas.jpg"  text={TXT.CYST_KIDNEY_TEXT} />
                        {TXT.CYST_KIDNEY_TEXT}
                    </div>
                </Toggle>

                <Toggle>
                    <div slot="title">Abscesai</div>
                    <div slot="content">
                        <Modal src="/images/kidney/pulinysinkstesuo.jpg"  text={TXT.ABSCESS_KIDNEY_DESCRIPTION}/>
                        {TXT.ABSCESS_KIDNEY_TEXT}
                    </div>
                </Toggle>
        </Toggle>

        <Toggle classes="card mt-2">
            <div slot="title">Neoplazijos</div>
            <div slot="content">

                <Toggle>
                    <div slot="title">Limfoma</div>
                    <div slot="content">
                        <Modal src="/images/kidney/inkstolimfomakate.jpg"  text={TXT.LYMPHOMA_KIDNEY_DESCRIPTION}/>
                        {TXT.LYMPHOMA_KIDNEY_TEXT}
                    </div>
                </Toggle>

                <Toggle>
                    <div slot="title">Karcinoma</div>
                    <div slot="content">
                        <Modal src="/images/kidney/renalkarcinomadog.jpg"  text={TXT.CARCINOMA_KIDNEY_DESCRIPTION}/>
                        {TXT.CARCINOMA_KIDNEY_TEXT}
                    </div>
                </Toggle>
                
            </div>
        </Toggle>
    </div>
</Toggle>