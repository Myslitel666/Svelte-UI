<div 
    role="button" 
    tabindex="0" 
    bind:this={autoCompleteRef}
    class="auto-complete-container" 
    style:width={width}
    on:click={()=>{document.addEventListener('click', handleClickOutside);}}
    on:keydown={()=>{}}
>
    <TextField 
        bind:this={textFieldRef} 
        id = {id}
        onmousedown = {() => {
            isOpen ? '' : toggleOpen();
        }}
        label = 'Auto Complete'
        variant = {variant}
        list = {'list-' + id}
        {...$$props}
    />
    <datalist id={'list-' + id}>
        <option value="A">  
        <option value="B">
      </datalist>
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
        on:mouseup = {() => {
            toggleOpen();
        }}
        on:focus = {()=>{
            textFieldRef.handleFocus();
        }}
        on:blur = {()=>{}}
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
    {#if isOpen}
    <div 
        class="drop-list {dropPositionTop ? 'top' : 'bottom'}"
        bind:this={dropListRef}
    >
        <!-- Ваши элементы списка здесь -->
    </div>
    {/if}
</div>

<script lang='ts'>
	import { type IColorThemeStore } from '../../../interfaces/color-theme/IColorThemeStore';
    import { themeStore } from '../../../stores/ColorThemeStore';
    import { generateIdElement } from '../../../stores/ElementIdStore';
    import { onMount } from 'svelte';
    import Arrow from '../../icons/TriangularArrowDown.svelte';
    import TextField from '../text-fields/TextField.svelte';

    // Публичные свойства
    export let variant: 'Outlined' | 'Filled' | 'Standard' = 'Outlined';
    export let id = ''                                        /* Уникальный идентификатор элемента */
    export let backgroundColor = '';                          /* Цвет заливки */
    export let borderColor = '';                              /* Цвет обводки */
    export let isOpen = false;                                /* Состояние активации AutoComplete */
    export let borderRadius = '';                             /* Радиус скругления углов */
    export let options: string[] = [];                        /* Состояние для передачи списков */
    export let width = '';                                    /* Ширина поля */

    // Приватные атрибуты
    let autoCompleteRef: HTMLElement;
    let textFieldRef: TextField;
    let filteredOptions: string[] = [];
    let dropPositionTop = false; // Определяет, следует ли отображать список сверху
    let dropListRef: HTMLElement;

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isBackgroundColorFromUser = backgroundColor !== '';
    let isBorderColorFromUser = borderColor !== '';

    //Стили из контекста темы
    let triangleHover = false;

    let theme: IColorThemeStore | undefined;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value; //Инициализация объекта темы
    });

    //Устанавливаем значения стилей после инициализации темы с проверкой не передавал ли пользователь в компонент свои значения стилей
    if (theme) {
        if (!borderRadius) borderRadius = variant === 'Outlined' ? theme.border.borderRadius : `0 0 ${theme.border.borderRadius} ${theme.border.borderRadius}`;
        else {
            borderRadius = variant === 'Outlined' ? borderRadius : `0 0 ${borderRadius} ${borderRadius}`; 
        }
    }

    onMount(() => {
        id ? '' : id = `auto-complete-${generateIdElement()}`;
    });

    // Функция для переключения состояния компонента (открыт/закрыт)
	function toggleOpen() {
		isOpen = !isOpen;
        if (isOpen) {
            setDropPosition();
        }
	}

    // Функция, которая будет вызвана при клике вне AutoComplete
    function handleClickOutside(event: MouseEvent) {
        let node = event.target as Node;

        if (autoCompleteRef && !autoCompleteRef.contains(node)) {
            isOpen ? toggleOpen() : ''
            document.removeEventListener('click', handleClickOutside); //Удаляем обработчик из root после утраты фокуса AutoComplete
        }
    }

    // Функция для определения положения drop-list
    function setDropPosition() {
        const rect = autoCompleteRef.getClientRects();

        const spaceBelow = window.innerHeight - autoCompleteRef.offsetTop + autoCompleteRef.offsetHeight;

        console.log('window.innerHeight');
        console.log(window.innerHeight);
        console.log('dropListRef.offsetHeight');
        console.log(dropListRef?.offsetHeight);
        console.log('autoCompleteRef.offsetHeight');
        console.log(autoCompleteRef.offsetHeight);

        // Если места снизу не хватает, и сверху больше места, отображаем сверху
        dropPositionTop = spaceBelow > 0;
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

    .drop-list {
        position: absolute;
        width: 100%; /* Или используйте фиксированную ширину, если нужно */
        border: 1px solid #ccc;
        background-color: #fff;
        z-index: 1000; /* Убедитесь, что список отображается поверх других элементов */
        height: 5rem;

        box-sizing: border-box;
    }

    .drop-list.top {
        bottom: 100%; /* Отображение сверху */
    }

    .drop-list.bottom {
        top: 100%; /* Отображение снизу */
    }
</style>