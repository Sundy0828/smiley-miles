import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Box from "@mui/material/Box";
import {
  CircularProgress,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <CircularProgress color="inherit" />
  </div>
);

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#fffa50",
//     },
//     secondary: {
//       main: "#309999",
//     },
//   },
// });
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#F50057",
    },
  },
});
// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Container
            maxWidth="xl"
            sx={{
              p: 2,
            }}
          >
            <Outlet />
          </Container>
          <Footer />
        </Box>
      </ThemeProvider>
    </Suspense>
  );
}
