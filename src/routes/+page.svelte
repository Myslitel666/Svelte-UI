<div id = 'page'>
	<div>
		<TextField />
	</div>
	<div class='component'>
		<Switch />
	</div>
	<div class='component'>
		<ColorThemeSwitch />
	</div>
</div>

<script>
	import TextField from '../components/inputs/text-fields/TextField.svelte';
	import Switch from '../components/inputs/switches/Switch.svelte';
	import ColorThemeSwitch from '../components/inputs/switches/ColorThemeSwitch.svelte';
</script>

<style>
	.component {
		margin-top: 1rem
	}

	#page {
		padding: 0.5rem;
	}
</style>
