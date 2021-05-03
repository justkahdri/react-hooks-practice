import { createContext, useState } from "react";

type ProviderProps = {
    children: JSX.Element | JSX.Element[];
}

type ThemeContextProps = {
    darkMode?: boolean;
    setDarkMode?: (toggle: boolean) => void;
}
const INITIAL_THEME: ThemeContextProps = {}

const ThemeContext = createContext(INITIAL_THEME);

export const DarkModeProvider = ({children}: ProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;