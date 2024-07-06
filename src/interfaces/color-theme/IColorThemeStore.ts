export interface IColorThemeStore {
    action: {
        hover: string;
        selected: string;
    };
    border: {
        disabled: {
            color:  string;
            width: string;
        };
        active: {
            width: string;
        };
        borderRadius: string;
    };
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: {
            primary: string;
            label: string;
        };
    };
    controls: {
        button: {
            padding: string;
            minWidth: string;
        };
        textField: {
            minWidth: string;
            padding: string;
        };
        height: string;
    };
    disabled: {
        fill: string;
    };
    typography: {
        font: string;
        fontSize: string;
        fontWeight: string;
        letterSpacing: string;
    };
    themeMode: string;
}