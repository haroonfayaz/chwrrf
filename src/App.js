import Navbar from "./Components/Navbar";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Mission from "./Pages/Mission";
import About from "./Pages/About";
import Campaigns from "./Pages/Campaigns";
import Volunteers from "./Pages/Volunteers";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Jost", sans-serif', // Specify "Jost" as the primary font family
  },
});

function App() {
  const routes = useRoutes([
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <About />,
      path: "/about",
    },
    {
      element: <Mission />,
      path: "/mission",
    },
    {
      element: <Team />,
      path: "/team",
    },
    {
      element: <Campaigns />,
      path: "/campaigns",
    },
    {
      element: <Volunteers />,
      path: "/volunteers",
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {routes}
      </ThemeProvider>
    </>
  );
}

export default App;
