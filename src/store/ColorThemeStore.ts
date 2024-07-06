import { writable, derived } from 'svelte/store';
import { type IColorThemeStore } from '../interfaces/color-theme/IColorThemeStore';

// Начальный режим темы
const themeMode = writable('light');

// Определение цветов на основе текущей темы с использованием тернарных операторов
const theme = derived(themeMode, ($themeMode): IColorThemeStore => ({
    colors: {
        primary: $themeMode === 'light' ? '#5bb056' : '#f41c1c',
        secondary: $themeMode === 'light' ? '#d86ff2' : '#f314f0',
        background: $themeMode === 'light' ? 'white' : 'black',
        text: {
            primary: $themeMode === 'light' ? '#000000' : '#ffffff',
            label: $themeMode === 'light' ? '#b3b3b3' : '#808080',
        },
    },
    border: {
        disabled: {
            color:  $themeMode === 'light' ? '#c3c3c3' : '#606060',
            width: '1px',
        },
        active: {
            width: '2px',
        },
        borderRadius: '4px',
    },
    action: {
        hover: $themeMode === 'light' ? '#fdfdfd' : '#181818',
        selected: $themeMode === 'light' ? '#ddd' : '#222',
    },
    disabled: {
        fill: $themeMode === 'light' ? '#e2e2e2' : '#424242',
    },
    themeMode: $themeMode // добавляем режим темы, чтобы отслеживать его изменения
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
