
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./componant/Header/Header";
import Home from "./Pages/Home";
import Footer from "./componant/Footer/Footer";
import About_page from "./Pages/About/About_page";
import Services_page from "./Pages/Service/Service_page";
import ProjectDetails from "./Pages/Project/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <main className="portfolio-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About_page />} />
          <Route path="/services" element={<Services_page />} />   
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
