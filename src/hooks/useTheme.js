import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => (
    typeof window !== 'undefined' && window.localStorage.getItem('ujwal-theme') === 'dark'
  ));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('ujwal-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, setDark];
}
