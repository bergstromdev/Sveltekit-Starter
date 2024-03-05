<script lang="ts">
	import '@fontsource-variable/rubik';
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// Use view transitions api for page transitions
	onNavigate(async () => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((oldStateCaptureResolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				oldStateCaptureResolve();
				// @ts-ignore
				await navigation.complete;
			});
		});
	});
</script>

{@render children()}
