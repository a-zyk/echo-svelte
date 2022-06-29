<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<title>Aprašyk echoskopiją</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"
		rel="stylesheet"
	/>
	<script src="https://kit.fontawesome.com/8b90a232d1.js" crossorigin="anonymous"></script>
	<!-- Google Tag Manager -->
	<script>
		(function (w, d, s, l, i) {
			w[l] = w[l] || [];
			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
			var f = d.getElementsByTagName(s)[0],
				j = d.createElement(s),
				dl = l != 'dataLayer' ? '&l=' + l : '';
			j.async = true;
			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
			f.parentNode.insertBefore(j, f);
		})(window, document, 'script', 'dataLayer', 'GTM-MKCKMHL');
	</script>
	<!-- End Google Tag Manager -->
	<meta property="og:url"                content="https://aprasyk.lt" />
	<meta property="og:type"               content="application" />
	<meta property="og:title"              content="Aprašyk.lt" />
	<meta property="og:description"        content="Sukurk echoskopijos aprašymą čia." />
	<meta property="og:image"              content="https://aprasyk.lt/images/og.png" />

</svelte:head>
<!-- Google Tag Manager (noscript) -->
<noscript
	><iframe
		src="https://www.googletagmanager.com/ns.html?id=GTM-MKCKMHL"
		height="0"
		width="0"
		style="display:none;visibility:hidden"
	/></noscript
>
<!-- End Google Tag Manager (noscript) -->
<Nav />
<div class="paws" />
<div class="relative">
	<slot />
</div>
