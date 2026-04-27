import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import MbaCoachingPage from "./pages/MbaCoachingPage";
import PgdmPage from "./pages/PgdmPage";
import EngineeringPage from "./pages/EngineeringPage";
import MbbsAbroadPage from "./pages/MbbsAbroadPage";
import ContactPage from "./pages/ContactPage";
import PremiumFooter from "./components/Footer/PremiumFooter";

import "./App.css";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mba-coaching" element={<MbaCoachingPage />} />
          <Route path="/pgdm" element={<PgdmPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/mbbs-abroad" element={<MbbsAbroadPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <PremiumFooter />
      <a
        className="whatsapp-float"
        href="https://wa.me/919172126359?text=Hello%2C%20I%20have%20an%20enquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
      </a>
    </>
  );
}

export default App;
