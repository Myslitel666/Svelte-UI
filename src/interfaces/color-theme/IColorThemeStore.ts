export interface IColorThemeStore {
    colors: {
        primary: string,
        secondary: string,
        background: string;
        text: {
            primary: string,
            label: string,
        };
    };
    border: {
        disabled: {
            color:  string;
            width: string;
        },
        active: {
            width: string;
        },
        borderRadius: string;
    };
    action: {
        hover: string;
        selected: string;
    },
    disabled: {
        fill: string,
    };
    themeMode: string;
}