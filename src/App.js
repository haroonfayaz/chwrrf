import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlogPost from "./Pages/BlogPost";

const theme = createTheme({
  typography: {
    fontFamily: '"Jost", sans-serif',
  },
});

function App() {
  // const routes = useRoutes([
  //   {
  //     element: <Home />,
  //     path: "/",
  //   },
  //   {
  //     element: <BlogPost />,
  //     path: "/blog",
  //   },
  // ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route exact path="/blog" element={<BlogPost />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
