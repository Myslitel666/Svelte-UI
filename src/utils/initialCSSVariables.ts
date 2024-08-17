import { get } from 'svelte/store';
import { themeStore } from "../stores/ColorThemeStore";

export const initialCSSVariables = () => {
    const theme = get(themeStore);
    const body = document.body.style; // Или document.body.style, если вы хотите применить только к body

    body.setProperty('--Xl-background-color', theme.colors.background);
    body.setProperty('--Xl-effectsTimeCode', theme.effectsTimeCode);
    body.setProperty('--Xl-text-color', theme.colors.text.primary);
};

// Вызовите эту функцию после загрузки приложения, чтобы применить стили
