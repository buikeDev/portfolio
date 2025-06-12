import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinalDesign } from "./screens/FinalDesign/FinalDesign";
import { HireMeSection } from "./screens/FinalDesign/sections/HireMeSection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FinalDesign />} />
        <Route path="/hire-me" element={<HireMeSection />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
