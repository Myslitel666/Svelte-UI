<div style:height = {height}>
    <span 
        class="track"
        style:height = {height}
        style:background-color = {checked ? color : theme.disabled.fill}
        style:--Xl-border-radius = {borderRadius}
    >
    </span>
    <span 
        class="switch"
        style:transform = {`translate(${checked ? '1.76rem' : '0.26rem'}, 0.26rem)`}
        style:--Xl-background-color = {theme.colors.background}
        style:--Xl-border-radius = {borderRadius}
    >
        {#if checked}
            <slot name="activeIcon" />     <!-- Компонент switch'а для активного состояния -->
        {:else}
            <slot name="disabledIcon" />   <!-- Компонент switch'а для неактивного состояния -->
        {/if}
    </span>
    <input
        type="checkbox"
        style:height = {height}
        bind:checked 
        on:click={()=> {
            toggleSwitch();
            onClick();
        }} 
    />
</div>

<script lang='ts'>
    import { type IColorThemeStore } from "../../../interfaces/color-theme/IColorThemeStore";
    import { themeStore } from '../../../store/ColorThemeStore';

    export let color = '';                                 /* Цвет переключателя */
    export let checked: boolean = false;                   /* начальное состояние переключателя */
    export let onClick = () => {};                         /* Обработчик нажатия */

    let height = '2rem'; // Высота Switch'а
    let borderRadius = '1rem'; // Радиус скругления углов

    // Флаги для отслеживания, передал ли пользователь значение извне
    let isColorFromUser = color !== '';

    function toggleSwitch() {
        checked = !checked; // изменение состояния при клике
    }

    let theme: IColorThemeStore;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value;

        if (!isColorFromUser) color = theme.colors.primary;
    });
</script>

<style>
    input {
        opacity: 0;
        margin: 0;
        position: absolute;
        width: 4rem;
        cursor: pointer;
    }
    .track {
        position: absolute;
        width: 3.55rem;
        border-radius: var(--Xl-border-radius);
        transition: var(--Xl-effectsTimeCode);
    }
    .switch {
        position: absolute;
        background-color: var(--Xl-background-color);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: var(--Xl-border-radius);
        transition: var(--Xl-effectsTimeCode);
        display: flex; /* Используем Flexbox для центрирования */
        justify-content: center; /* Центрируем по горизонтали */
        align-items: center; /* Центрируем по вертикали */
    }
</style>