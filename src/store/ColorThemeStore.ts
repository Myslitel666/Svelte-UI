import { writable, derived } from 'svelte/store';
import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore';

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
            width: '2px',
        },
        borderRadius: '4px',
    },
    colors: {
        primary: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
        secondary: $themeMode === 'light' ? '#d06bcc' : '#ff35f8',
        background: $themeMode === 'light' ? 'white' : 'black',
        text: {
            primary: $themeMode === 'light' ? '#111' : '#fff',
            label: $themeMode === 'light' ? '#b3b3b3' : '#808080',
        },
    },
    controls: {
        button: {
            minWidth: '15rem',
            padding: '0.85rem',
        },
        textField: {
            minWidth: '15rem',
            padding: '0.85rem',
        },
        height: '3rem',
    },
    disabled: {
        fill: $themeMode === 'light' ? '#e2e2e2' : '#424242',
    },
    typography: {
        font: 'Century Gothic',
        fontSize: '16px',
        fontWeight: '100',
        letterSpacing: '-0.02rem'
    },
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
    themeMode.update(current => {
        const newTheme = getOppositeTheme(current);
        
        // Удаляем текущую тему
        document.body.classList.remove(current);
        
        // Добавляем новую тему
        document.body.classList.add(newTheme);
        
        return newTheme;
    });
};

// Экспортируем все необходимые элементы
export { theme as themeStore, themeMode, toggleThemeMode };
