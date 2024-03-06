<button type="button" aria-label="Toggle theme" on:click={window.toggleTheme}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		fill="currentColor"
		stroke-linecap="round"
		class="w-8 h-8"
		viewBox="0 0 32 32"
	>
		<clipPath id="theme-toggle__cutout">
			<path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
		</clipPath>
		<g clip-path="url(#theme-toggle__cutout)">
			<circle cx="16" cy="16" r="9.34" />
			<g stroke="currentColor" stroke-width="1.5">
				<path d="M16 5.5v-4" />
				<path d="M16 30.5v-4" />
				<path d="M1.5 16h4" />
				<path d="M26.5 16h4" />
				<path d="m23.4 8.6 2.8-2.8" />
				<path d="m5.7 26.3 2.9-2.9" />
				<path d="m5.8 5.8 2.8 2.8" />
				<path d="m23.4 23.4 2.9 2.9" />
			</g>
		</g>
	</svg>
</button>

<style lang="postcss">
	svg {
		--duration: 500ms;
	}
	svg path {
		transition-timing-function: cubic-bezier(0.5, 1.75, 0.75, 1.25);
		transform-origin: center;
		transition-duration: calc(var(--duration) * 0.8);
	}
	svg g path {
		transition-property: opacity, transform;
		transition-delay: calc(var(--duration) * 0.2);
	}
	svg:first-child path {
		transition-property: transform, d;
	}

	:global([data-theme='dark']) svg {
		g path {
			transform: scale(0.5) rotate(45deg);
			opacity: 0;
			transition-delay: 0s;
		}
		&:first-child path {
			d: path('M-12 5h30a1 1 0 0 0 9 13v24h-39Z');
			transition-delay: calc(var(--duration) * 0.2);
		}
	}

	@media (prefers-reduced-motion) {
		svg {
			--duration: 5000ms;
		}
	}
</style>
