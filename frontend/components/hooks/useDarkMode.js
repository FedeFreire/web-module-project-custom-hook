import React, { useEffect, } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key, initialValue) {
    const [darkMode, setDarkMode] = useLocalStorage (key, initialValue);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, toggleMode];
}

