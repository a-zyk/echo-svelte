<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/8b90a232d1.js" crossorigin="anonymous"></script>
</svelte:head>

<script>
    import "../app.css";
    import Nav from "../components/Nav.svelte";
</script>

<Nav/>
<slot />