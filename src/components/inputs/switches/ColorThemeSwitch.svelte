<div>
    <Switch 
        checked = {checked}
        activeSwitchIcon = {lightThemeIcon}
        disabledSwitchIcon = {darkThemeIcon}
        onClick = {toggleThemeMode}
    >
        <ActiveIcon slot="activeIcon" size="1.1rem" />
        <DisabledIcon slot="disabledIcon" size="1.1rem" />
    </Switch>
</div>

<script lang='ts'>
    import { toggleThemeMode } from '../../../store/ColorThemeStore';
    import Switch from "./Switch.svelte";
    import ActiveIcon from '../../icons/Dark.svelte';
    import DisabledIcon from '../../icons/Light.svelte';

    export let checked: boolean = false;                                    /* начальное состояние переключателя */
    export let lightThemeIcon: string = '/images/ui/light-theme.svg';       /* Иконка Switch'а в активном состоянии */
    export let darkThemeIcon: string = '/images/ui/dark-theme.svg';         /* Иконка Switch'а в отключенном состоянии */
</script>