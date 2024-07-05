<div>
    <Switch 
        checked = {checked}
        activeSwitchIcon = {lightThemeIcon}
        disabledSwitchIcon = {darkThemeIcon}
        onClick = {toggleThemeMode}
    />
</div>

<script lang='ts'>
    import { toggleThemeMode } from '../../../store/ColorThemeStore';
    import Switch from "./Switch.svelte";

    export let checked: boolean = false;                                    /* начальное состояние переключателя */
    export let lightThemeIcon: string = '/images/ui/light-theme.svg';       /* Иконка Switch'а в активном состоянии */
    export let darkThemeIcon: string = '/images/ui/dark-theme.svg';         /* Иконка Switch'а в отключенном состоянии */
</script>