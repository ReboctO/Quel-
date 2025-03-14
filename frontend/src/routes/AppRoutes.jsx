import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/DashBoardPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Service from "../pages/Service";
import ExploreProperties from "../pages/ExploreProperties";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/exploreProperties" element={<ExploreProperties />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
