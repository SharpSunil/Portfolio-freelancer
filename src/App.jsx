
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Header from "./componant/Header/Header";
import Home from "./Pages/Home";
import Footer from "./componant/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="portfolio-wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
