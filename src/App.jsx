import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TeamSection from "./components/TeamSection";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/team" element={<TeamSection />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
