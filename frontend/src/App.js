import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/Categories/CategoryDetails";
import Joyride from 'react-joyride';
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

// Centralized Joyride Logic
export default function App() {
  const [tourState, setTourState] = useState({
    run: true, // Start automatically
    steps: [
      {
        target: ".dashboard",
        content: "This is the dashboard overview.",
        disableBeacon: true, // Start immediately
      },
      {
        target: ".create-category-button",
        content: "This button creates a new category.",
        disableBeacon: true,
      },
      {
        target: ".category-details",
        content: "You can fill out the category details here.",
        disableBeacon: true,
      }
    ],
    currentStep: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Handle route changes to progress the tour
  useEffect(() => {
    const handleRouteChange = () => {
      if (location.pathname === "/") {
        setTourState((prevState) => ({
          ...prevState,
          run: true,
          currentStep: 0, // Dashboard
        }));
      } else if (location.pathname === "/categories") {
        setTourState((prevState) => ({
          ...prevState,
          run: true,
          currentStep: 1, // Categories
        }));
      } else if (location.pathname === "/categories/create") {
        setTourState((prevState) => ({
          ...prevState,
          run: true,
          currentStep: 2, // Create Category
        }));
      }
    };

    handleRouteChange();
  }, [location]);

  const handleJoyrideCallback = (data) => {
    const { index, action, status } = data;
    if (action === 'next') {
      if (index === 0) {
        navigate('/categories'); // Move to Categories after Dashboard
      } else if (index === 1) {
        navigate('/categories/create'); // Move to Create Category after Categories
      }
    }

    if (status === "finished" || status === "skipped") {
      setTourState({ ...tourState, run: false }); // Stop tour when finished
    }
  };

  return (
    <ThemeModeProvider>
      <CssBaseline />
      <AuthContextProvider>
        <SnackbarProvider>
          <Router>
            <Joyride
              steps={tourState.steps}
              run={tourState.run}
              stepIndex={tourState.currentStep}
              continuous={true}
              showProgress={true}
              showSkipButton={true}
              callback={handleJoyrideCallback}
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

                <Route element={<RequireNotAuth />}>
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
    </ThemeModeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
