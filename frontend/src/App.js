import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";

function App() {
  useEffect(() => {
    console.log("✅ Risk Prediction App deployed successfully on GitHub Pages!");
  }, []);

  return (
    <div className="App">
      {/* ✅ 'basename' ensures routing works correctly on GitHub Pages */}
      <BrowserRouter basename="/riskprediction">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
