import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { DashboardPage } from "../pages/movie/DashboardPage";
import { DetailPage } from "../pages/movie/DetailPage";
import { SearchPage } from "../pages/movie/SearchPage";
import TokenProtected from "../asset/components/protected/TokenProtected";
import { Contoh } from "../pages/Contoh";
import { ContohPage } from "../pages/ContohPage";

export const RouteList = () => {
  //untuk menggunakan react query di index
  const queryMovie = new QueryClient();
  return (
    <BrowserRouter>
      {/* menggunakan react query */}
      <QueryClientProvider client={queryMovie}>
        <Routes>
          <Route path="/" element={<ContohPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<TokenProtected><DashboardPage /></TokenProtected>} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
