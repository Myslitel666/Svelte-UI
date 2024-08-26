<div id = 'container'>
	<div id = 'page'>
		<p>Text Field</p>
		<div class="components-container">
			<TextField 
				variant = 'Outlined'
				label = 'Outlined'
				onfocus={() => {}}
				onblur={() => {}}
				oninput={(e: Event) => {
					let value = extractors.getInputValue(e);
				}}
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
		<p class = 'heading'>Auto Complete</p>
		<div class="components-container">
			<AutoComplete 
				options = {['Apple', 'Orange', 'Banana', 'Grape', 'Mango']}
			/>
			<AutoComplete 
				variant = 'Filled' 
			/>
			<AutoComplete 
				variant = 'Standard' 
			/>
		</div>
		<p class = 'heading'>Button</p>
		<div class="components-container">
			<Button variant = 'Contained'>
				CONTAINED
			</Button>
			<Button variant = 'Outlined'>
				OUTLINED
			</Button>
		</div>
		<p class='heading'>Switch</p>
		<div>
			<Switch />
		</div>
		<p class='heading'>Color Theme Switch</p>
		<div>
			<ColorThemeSwitch />
		</div>
	</div>
</div>

<script lang="ts">
	import TextField from '../components/inputs/text-fields/TextField.svelte';
	import Switch from '../components/inputs/switches/Switch.svelte';
	import ColorThemeSwitch from '../components/inputs/switches/ColorThemeSwitch.svelte';
	import Button from '../components/inputs/buttons/Button.svelte';
	import AutoComplete from '../components/inputs/auto-complete/AutoComplete.svelte';
	import * as extractors from '../utils/valueExtractors';
</script>

<style>
	.heading {
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
