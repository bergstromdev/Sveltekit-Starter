<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="navbar sticky top-0 z-50 bg-base-100/50 backdrop-blur">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Header</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal items-center gap-4 px-1">
			<li><a href="/">Link</a></li>
			<li>
				<ThemeToggle />
			</li>
		</ul>
	</div>
</div>
