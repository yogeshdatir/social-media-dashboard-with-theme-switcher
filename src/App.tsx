import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Themes } from "./contexts/Themes";
import { useToggleThemeContext } from "./contexts/themeToggleContext";

function App() {
  const { currentThemeName } = useToggleThemeContext();

  return (
    <div>
      <ThemeProvider
        theme={currentThemeName === "light" ? Themes.light : Themes.dark}
      >
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
