import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginComponent from "./components/auth/login";
import WorkerList from "./components/pages/workerList";

export default function JoyOrderDashboardTemplate() {
  let location = useLocation();

  const hiddenSideBar =
    location.pathname === "/" || location.pathname === "/sign-up";
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        {!hiddenSideBar && <Sidebar />}
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/out-rourcing-worker-list" element={<WorkerList />} />
        </Routes>
      </Box>
    </CssVarsProvider>
  );
}
