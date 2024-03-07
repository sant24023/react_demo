import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/SignUp";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
