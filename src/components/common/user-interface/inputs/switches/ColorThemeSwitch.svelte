<Switch 
    checked = {checked}
    activeSwitchIcon = {lightThemeIcon}
    disabledSwitchIcon = {darkThemeIcon}
/>

<script>
    import Switch from "./Switch.svelte";

    export let checked = false;                                                     /* начальное состояние переключателя */
    export let lightThemeIcon = '/images/user-interface/sun-svgrepo-com.svg';       /* Иконка Switch'а в активном состоянии */
    export let darkThemeIcon = '/images/user-interface/mode-dark-svgrepo-com.svg';  /* Иконка Switch'а в отключенном состоянии */
</script>