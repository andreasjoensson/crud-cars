import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute, { ProtectedRouteProps } from "./utils/ProtectedRoute";
import Biler from "./pages/Biler";
import LejBil from "./pages/LejBil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
  isAuthenticated: !!localStorage.getItem("token"),
  authenticationPath: "/login",
};

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/app/dashboard"
        element={
          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={<Dashboard />}
          />
        }
      />
      <Route
        path="/app/biler"
        element={
          <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Biler />} />
        }
      />

      <Route
        path="/app/lej"
        element={
          <ProtectedRoute {...defaultProtectedRouteProps} outlet={<LejBil />} />
        }
      />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
