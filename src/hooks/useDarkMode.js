import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const darkMode = () => {
    const[someValue, setSomeValue] = useLocalStorage(darkMode)

}