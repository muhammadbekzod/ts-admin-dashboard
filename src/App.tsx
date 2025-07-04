import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Sidebar from "./components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginComponent from "./components/auth/login";

import AddProduct from "./components/pages/CampingProduct";
import CampingPlace from "./components/pages/Place";
import UserList from "./components/pages/UserList";

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
          <Route path="/camping-car-product" element={<AddProduct />} />
          <Route path="/camping-place" element={<CampingPlace />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </Box>
    </CssVarsProvider>
  );
}
