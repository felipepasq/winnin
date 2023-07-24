import { defaultTheme } from "./styles/themes/default";
import { darkTheme } from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { useThemeStore } from "./stores/themeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? defaultTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
