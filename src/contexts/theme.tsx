import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  currentTheme: "light" | "dark"; // Actual applied theme
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    getSystemTheme()
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        setCurrentTheme(getSystemTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  useEffect(() => {
    const newTheme = theme === "system" ? getSystemTheme() : theme;
    setCurrentTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "light":
          return "dark";
        case "dark":
          return "system";
        case "system":
          return "light";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
