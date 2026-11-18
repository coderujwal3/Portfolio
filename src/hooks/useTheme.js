import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setDark(window.localStorage.getItem('ujwal-theme') === 'dark');
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (!themeLoaded) return;

    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('ujwal-theme', dark ? 'dark' : 'light');
  }, [dark, themeLoaded]);

  return [dark, setDark];
}
