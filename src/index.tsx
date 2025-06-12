import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FinalDesign } from "./screens/FinalDesign/FinalDesign";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FinalDesign />
  </StrictMode>
);
