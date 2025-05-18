export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ChatbotQuestion {
  id: number;
  question: string;
  answer: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}