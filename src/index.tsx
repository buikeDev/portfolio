import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { FinalDesign } from "./screens/FinalDesign/FinalDesign";
import { MotionConfig } from "framer-motion";

createRoot(document.getElementById("app") as HTMLElement).render(
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FinalDesign />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </MotionConfig>,
);
