import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const ThemeModeContext = React.createContext({
    toggleThemeMode: () => { }
});

const getDesignTokens = (mode) => {
    return {
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? '#6A1B9A' : '#bb86fc', // Customize your primary color for dark mode
            },
            secondary: {
                main: mode === 'light' ? '#bb86fc' : '#333333', // Customize your secondary color for dark mode
            },
            background: {
                default: mode === 'light' ? '#F3E5F5' : '#333333', // Customize your background color for dark mode
                paper: mode === 'light' ? '#E1BEE7' : '##bb86fc',
                AppBar: mode === 'light' ? '#6A1B9A' : '#bb86fc',  // Customize your paper background color for dark mode
            },
            text: {
                primary: mode === 'light' ? '#333333' : '#ffffff', // Customize your primary text color for dark mode
                secondary: mode === 'light' ? '#666666' : '#bbbbbb', // Customize your secondary text color for dark mode
            },
            error: {
                main: mode === 'light' ? '#f44336' : '#cf6679', // Customize your error color for dark mode
            },
            warning: {
                main: mode === 'light' ? '#ff9800' : '#ffb74d', // Customize your warning color for dark mode
            },
            info: {
                main: mode === 'light' ? '#2196f3' : '#81d4fa', // Customize your info color for dark mode
            },
            success: {
                main: mode === 'light' ? '#4caf50' : '#66bb6a', // Customize your success color for dark mode
            },
        },
        components: {
            AppBar: {
                backgroundColor: mode === 'light' ? '#dc004e' : '#bb86fc', // Customize your AppBar color
            },
            Drawer: {
                backgroundColor: mode === 'light' ? '#dc004e' : '##bb86fc', // Customize your Sidebar color
            },
        }
    };
};

export default function ThemeModeProvider({ children }) {
    const [mode, setMode] = useState("light");

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') || 'light';
        setMode(savedMode);
    }, [setMode]);

    useEffect(() => {
        localStorage.setItem("themeMode", mode);
    }, [mode]);

    const themeMode = useMemo(() => {
        return {
            toggleThemeMode: () => {
                setMode((prevMode) => {
                    if (prevMode === "light") {
                        return "dark";
                    }
                    return "light";
                });
            }
        };
    }, [setMode]);

    const theme = useMemo(() => {
        return createTheme(getDesignTokens(mode));
    }, [mode]);

    return (
        <ThemeModeContext.Provider value={themeMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

ThemeModeProvider.propTypes = {
    children: PropTypes.node
};
