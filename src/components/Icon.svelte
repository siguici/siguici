<script lang="ts">
import { iconPaths } from './IconPaths';

let icon: keyof typeof iconPaths;
let color = 'currentcolor';
let gradient = false;
let size = '';

export { color, gradient, icon, size };
const iconPath = iconPaths[icon];

const gradientId = 'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width="40"
	height="40"
	viewBox="0 0 256 256"
	aria-hidden="true"
	stroke={gradient ? `url(#${gradientId})` : color}
	fill={gradient ? `url(#${gradientId})` : color}
	style:--size={size}
>
	<g>
		{@html iconPath}
	</g>

	{#if gradient}
	<linearGradient
		id={gradientId}
		x1="23"
		x2="235"
		y1="43"
		y2="202"
		gradientUnits="userSpaceOnUse"
	>
		<stop stop-color="var(--gradient-stop-1)" />
		<stop offset=".5" stop-color="var(--gradient-stop-2)" />
		<stop offset="1" stop-color="var(--gradient-stop-3)" />
	</linearGradient>
	{/if}
</svg>

<style>
	svg {
		vertical-align: middle;
		width: var(--size, 1em);
		height: var(--size, 1em);
	}
</style>
