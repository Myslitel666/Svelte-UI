import { writable, derived } from 'svelte/store';
import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore';
import { initialCSSVariables } from '../utils/initialCSSVariables';

// Начальный режим темы
const themeMode = writable('light');

// Определение темы оформления пользовательского интерфейса
const theme = derived(themeMode, ($themeMode): IColorThemeStore => ({
    action: {
        hover: $themeMode === 'light' ? '#fdfdfd' : '#181818',
        selected: $themeMode === 'light' ? '#ddd' : '#222',
    },
    border: {
        disabled: {
            color:  $themeMode === 'light' ? '#bebebe' : '#606060',
            width: '1px',
        },
        active: {
            color:  $themeMode === 'light' ? '#959595' : '#a0a0a0',
            width: '2px',
        },
        borderRadius: '4px',
    },
    colors: {
        primary: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
        secondary: $themeMode === 'light' ? '#d06bcc' : '#ff35f8',
        background: $themeMode === 'light' ? 'white' : '#161616', 
        text: {
            primary: $themeMode === 'light' ? '#111' : '#fff',
            label: $themeMode === 'light' ? '#b3b3b3' : '#808080',
        },
    },
    controls: {
        button: {
            padding: '0.85rem',
            filter: $themeMode === 'light' ? 'brightness(108%)' : 'contrast(70%)',
        },
        textField: {
            padding: '0.85rem',
        },
        height: '3.15rem',
        width: '15rem',
    },
    disabled: {
        expressed: $themeMode === 'light' ? '#929292' : '#c2c2c2',
        fill: $themeMode === 'light' ? '#e2e2e2' : '#424242',
        touch: $themeMode === 'light' ? '#efefef' : '#2c2c2c',
    },
    typography: {
        font: 'Century Gothic',
        fontSize: '16px',
        fontWeight: '100',
        letterSpacing: '-0.02rem'
    },
    effectsTimeCode: '0.3s',
    themeMode: $themeMode, // добавляем режим темы, чтобы отслеживать его изменения
}));

// Функция, которая возвращает противоположную тему
const getOppositeTheme = (theme: string) => {
    if (theme === 'light') {
        return 'dark';
    }

    return 'light';
};

// Функция для переключения режима темы
const toggleThemeMode = () => {
    //Обновление значения themeMode
    themeMode.update(current => {
        const newTheme = getOppositeTheme(current);
        
        return newTheme;
    });
    //Обновление глобальных CSS-переменных
    initialCSSVariables();
};

// Экспортируем все необходимые элементы
export { theme as themeStore, themeMode, toggleThemeMode };
