import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
