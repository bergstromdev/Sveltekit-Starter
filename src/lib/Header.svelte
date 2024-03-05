<script>
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">Varberg Energi</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal items-center gap-4 px-1">
			<li><a href="/">Link</a></li>
			<li>
				<!-- <button class="btn btn-sm glass" onclick={window.toggleTheme}>Toggle theme</button> -->
				<ThemeToggle />
			</li>
		</ul>
	</div>
</div>
