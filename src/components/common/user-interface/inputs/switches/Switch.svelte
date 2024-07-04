<div style:height = {height}>
    <span 
        class="track"
        style:height = {height}
        style:background-color = {checked ? theme.primaryColor : theme.fillColor}
        style:--Xl-border-radius = {borderRadius}
    >
    </span>
    <span 
        class="switch"
        style:transform = {`translate(${checked ? '1.76rem' : '0.26rem'}, 0.26rem)`}
        style:--Xl-background-color = {theme.backgroundColor}
        style:--Xl-border-radius = {borderRadius}
    >
        {#if activeSwitchIcon != '' && disabledSwitchIcon != ''}
            <img src = {checked ? disabledSwitchIcon : activeSwitchIcon} alt = '' class = 'ico'/>
        {/if}
    </span>
    <input 
        type="checkbox"
        style:height = {height}
        bind:checked 
        on:click={toggleSwitch} 
    />
</div>

<script lang='ts'>
    import { type IColorThemeStore } from "../../../../../interfaces/common/user-interface/color-theme/IColorThemeStore";
    import { themeStore } from '../../../../../store/ColorThemeStore';

    export let checked = false;                                /* начальное состояние переключателя */
    export let activeSwitchIcon = '';                          /* Иконка Switch'а в активном состоянии */
    export let disabledSwitchIcon = '';                        /* Иконка Switch'а в отключенном состоянии */

    let height = '2rem'; // Высота Switch'а
    let borderRadius = '1rem'; // Радиус скругления углов

    function toggleSwitch() {
        checked = !checked; // изменение состояния при клике
    }

    let theme: IColorThemeStore;

    // Подписываемся на изменения темы
    themeStore.subscribe(value => {
        theme = value;
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
        transition: .3s;
    }
    .switch {
        position: absolute;
        background-color: var(--Xl-background-color);
        width: 1.5rem;
        height: 1.5rem;
        border-radius: var(--Xl-border-radius);
        transition: .3s;
        display: flex; /* Используем Flexbox для центрирования */
        justify-content: center; /* Центрируем по горизонтали */
        align-items: center; /* Центрируем по вертикали */
    }
    .ico {
        width: 1.1rem;
        height: 1.1rem;
    }
</style>