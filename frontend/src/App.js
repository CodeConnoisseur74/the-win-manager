import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Joyride from "react-joyride";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/Categories/CategoryDetails";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import AuthContextProvider from "./contexts/AuthContextProvider";
import RequireAuth from "./components/RequireAuth";
import RequireNotAuth from "./components/RequireNotAuth";
import BaseLayout from "./components/BaseLayout";
import Wins from "./pages/Wins";
import WinDetails from "./pages/Wins/WinDetails";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import RequestResetPassword from "./pages/Auth/RequestResetPassword";
import ResetPasswordConfirm from "./pages/Auth/ResetPasswordConfirm";
import ThemeModeProvider from "./contexts/ThemeModeProvider";
import Admin from "./pages/Admin";
import PageNotFound from "./pages/PageNotFound";

// Define Joyride steps
const steps = [
  {
    target: ".header > h3", // Adjust as per your component structure
    content: "Welcome!! Please spare a minute to learn about our page",
  },
  {
    target: ".login", // Adjust as per your component structure
    content: "You can log in here",
  },
  {
    target: ".signup", // Adjust as per your component structure
    content: "Sign up here, if you're new",
  },
  {
    target: ".categories", // Adjust as per your component structure
    content: "Here you can manage categories.",
  },
  {
    target: ".wins", // Adjust as per your component structure
    content: "Here you can manage wins.",
  },
  {
    target: ".dashboard", // Adjust as per your component structure
    content: "This is the dashboard overview.",
  },
];

export default function App() {
  return <ThemeModeProvider>
    <CssBaseline />
    <AuthContextProvider>
      <SnackbarProvider>
        <Router>
          <Joyride
            steps={steps}
            continuous
            showProgress
            showSkipButton
          />
          <Box sx={{
            bgcolor: (theme) => theme.palette.background.default,
            minHeight: "100vh",
            width: "100%"
          }}>
            <Routes>

              <Route path="/admin" element={<Admin />} />

              <Route element={<RequireAuth />}>
                <Route element={<BaseLayout />}>
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categories/create" element={<CategoryDetails />} />
                  <Route path={`/categories/edit/:id`} element={<CategoryDetails />} />
                  <Route path="/wins" element={<Wins />} />
                  <Route path="/wins/create" element={<WinDetails />} />
                  <Route path="/wins/edit/:id" element={<WinDetails />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="*" element={<PageNotFound />} />
                </Route>

              </Route>

              <Route element={<RequireNotAuth />} >
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/password-reset" element={<RequestResetPassword />} />
                <Route path="/auth/password-reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />

              </Route>

            </Routes>
          </Box>
        </Router>
      </SnackbarProvider>
    </AuthContextProvider>
  </ThemeModeProvider>;
}

ReactDOM.render(<App />, document.getElementById("root"));