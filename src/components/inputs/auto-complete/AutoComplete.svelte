<div class="auto-complete-container" style:width={width}>
    <TextField 
        bind:this={textFieldRef} 
        id = {id}
        onmousedown = {toggleOpen}
        onblur = {() => {isOpen ? toggleOpen() : '';}}
        label = 'Auto Complete'
        variant = {variant}
        {...$$props}
    />
    <button 
        class = "triangle-icon"
        on:mouseover = {() => {
            textFieldRef.handleMouseOver()
            triangleHover = !triangleHover;
        }}
        on:mouseout = {() => {
            textFieldRef.handleMouseOut()
            triangleHover = !triangleHover;
        }}
        on:mousedown = {toggleOpen}
        on:focus = {()=>{ textFieldRef.handleFocus() }}
        on:blur = {()=>{ 
            textFieldRef.handleBlur(); 
            isOpen ? toggleOpen() : '';
        }}
        style:width=1.75rem
        style:height=1.75rem
        style:border-radius='50%'
        style:right = {variant === 'Standard' ? '0rem' : '0.53rem'}
        style:transform = {isOpen ? 'rotate(180deg) translateY(50%)' : ''}
        style:transition = 'transform var(--Xl-effectsTimeCode)'
        style:background-color = {triangleHover ? theme?.disabled.ghost : ''}
    >
        <Arrow 
            size=1.16rem 
        />
    </button>
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../stores/ColorThemeStore';
    import { generateIdElement } from '../../../utils/elementIdUtils';
    import { onMount } from 'svelte';
    import Arrow from '../../icons/TriangularArrowDown.svelte';
    import TextField from '../text-fields/TextField.svelte';

    let textFieldRef: TextField;

    // Свойства для управления CSS-стилями
    export let variant: 'Outlined' | 'Filled' | 'Standard' = 'Outlined';
    export let id = ''                                        /* Уникальный идентификатор элемента */
    export let isOpen = false;                                /* Состояние активации AutoComplete */
    export let width = '';                                    /* Ширина поля */

    //Стили из контекста темы
    let triangleHover = false;

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы
    });

    onMount(() => {
        id ? '' : id = `auto-complete-${generateIdElement()}`;
    });

    // Функция для переключения состояния компонента (открыт/закрыт)
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<style>
    .auto-complete-container {
        position: relative;
    }

    .triangle-icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>