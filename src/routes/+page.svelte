<div id = 'page'>
	<div>
		<p>Text Field</p>
		<TextField />
	</div>
	<div class='component'>
		<p>Button</p>
		<Button>
			CONTAINED
		</Button>
	</div>
	<div class='component'>
		<p>Switch</p>
		<Switch />
	</div>
	<div class='component'>
		<p>Color Theme Switch</p>
		<ColorThemeSwitch />
	</div>
	<div class='component'>
		<p>AutoComplete</p>
		<AutoComplete options={['Apple', 'Orange', 'Banana', 'Grape', 'Mango']} />
	</div>
</div>

<script>
	import TextField from '../components/inputs/text-fields/TextField.svelte';
	import Switch from '../components/inputs/switches/Switch.svelte';
	import ColorThemeSwitch from '../components/inputs/switches/ColorThemeSwitch.svelte';
	import Button from '../components/inputs/buttons/Button.svelte';
	import AutoComplete from '../components/inputs/auto-complete/AutoComplete.svelte';
</script>

<style>
	.component {
		margin-top: 0.5rem;
	}

	#page {
		padding: 0.5rem;
	}
</style>
