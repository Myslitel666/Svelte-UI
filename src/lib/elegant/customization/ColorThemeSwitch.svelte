<div>
    <Switch 
        onClick = {toggleThemeMode}
        {...$$props}
    >
        <ActiveIcon slot="activeIcon" size="1.1rem" />
        <DisabledIcon slot="disabledIcon" size="1.1rem" />
    </Switch>
</div>

<script lang='ts'>
    import { toggleThemeMode } from '../../stores/ColorThemeStore.js';
    import Switch from "../input/Switch.svelte";
    import ActiveIcon from '../../icons-elegant/Dark.svelte';
    import DisabledIcon from '../../icons-elegant/Light.svelte';
</script>