import { useTheme } from '../context/ThemeContext';

const themes = [
  { id: 'cat-mocha', name: 'Catppuccin Mocha' },
  { id: 'cat-latte', name: 'Catppuccin Latte' },
  { id: 'biscuit', name: 'Biscuit' },
] as const;

export const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 font-mono">
      <span className="text-fg-lighter">Theme:</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as typeof theme)}
        className="bg-bg-lighter text-fg border-card border rounded px-2 py-1 outline-none focus:ring-2 focus:ring-special"
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}; 