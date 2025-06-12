import { useTheme } from '../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default ThemeSwitcher; // Must include this line!
