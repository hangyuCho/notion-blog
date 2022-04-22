<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Stylish&display=swap" rel="stylesheet">
</svelte:head>
<script lang="ts">
	import Top from './components/Top.svelte'
	import Category from './components/Category.svelte'
	export let name: string;
</script>

<main>
	<Top/>
	<Category/>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
