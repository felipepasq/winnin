import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { router } from "./router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
