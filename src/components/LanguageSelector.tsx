import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-bg text-fg border border-fg/20 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <option value="pt-BR">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
}
