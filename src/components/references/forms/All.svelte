<script>
	import Bladder from './Bladder.svelte';
	import Kidney from './Kidney.svelte';
	import Spleen from './Spleen.svelte';
	import Liver from './Liver.svelte';
	import Gall from './GallBladder.svelte';
	import Stomach from './Stomach.svelte';
	import Intestines from './Intestines.svelte';
	import Pancreas from './Pancreas.svelte';
	import Adrenals from './Adrenals.svelte';
	import Lymphnodes from './Lymphnodes.svelte';
	import Female from './reproductive_tract/Female.svelte';
	import Male from './reproductive_tract/Male.svelte';

	import mixpanel from 'mixpanel-browser';

	mixpanel.init('YOUR_TOKEN', { debug: true, track_pageview: true, persistence: 'localStorage' });

	// Track an event. It can be anything, but in this example, we're tracking a Sign Up event.
	// mixpanel.track('OrganClicked', {
	// 	'Signup Type': 'Referral'
	// });
</script>

<Bladder show="true" />
<Kidney />
<Spleen />
<Liver />
<Gall />
<Stomach />
<Intestines />
<Pancreas />
<Adrenals />
<Female />
<Male />
<Lymphnodes />
