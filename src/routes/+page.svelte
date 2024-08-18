<div id = 'container'>
	<div id = 'page'>
		<p>Text Field</p>
		<div class="components-container">
			<TextField 
				variant = 'Outlined'
				label = 'Outlined'
			/>
			<TextField 
				variant = 'Filled'
				label = 'Filled'
			/>
			<TextField 
				variant = 'Standard'
				label = 'Standard'
			/>
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
			<p>Auto Complete</p>
			<AutoComplete options={['Apple', 'Orange', 'Banana', 'Grape', 'Mango']} />
		</div>
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
		margin-top: 0.35rem;
	}

	.components-container {
		display: flex; /* Располагает дочерние элементы в строку */
		gap: 1rem; /* Задает отступ между элементами */
		align-items: center; /* Вертикальное выравнивание по центру */
	}

	#container {
		display: flex;
		justify-content: center; /* Горизонтальное центрирование */
		align-items: center; /* Вертикальное центрирование */
		min-height: 100vh; /* Минимальная высота экрана */
	}
</style>
