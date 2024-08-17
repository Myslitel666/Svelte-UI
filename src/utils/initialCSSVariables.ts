import { get } from 'svelte/store';
import { themeStore } from "../stores/ColorThemeStore";

//обновление CSS-переменных значениями из хранилища темы
export const initialCSSVariables = () => {
    const theme = get(themeStore);

    const body = document.body.style;
    body.setProperty('--Xl-background-color', theme.colors.background);
    body.setProperty('--Xl-effectsTimeCode', theme.effectsTimeCode);
    body.setProperty('--Xl-text-color', theme.colors.text.primary);
    body.setProperty('--Xl-font-size', theme.typography.fontSize);
};