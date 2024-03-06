<script lang="ts">
	import '@fontsource-variable/rubik';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/Header.svelte';

	let { children } = $props();

	// Use view transitions api for page transitions
	onNavigate(async () => {
		if (!document.startViewTransition) return;
		return new Promise((oldStateCaptureResolve) => {
			document.startViewTransition &&
				document.startViewTransition(async () => {
					oldStateCaptureResolve();
					// @ts-ignore
					await navigation.complete;
				});
		});
	});
</script>

<Header />
<main class="container">{@render children()}</main>
