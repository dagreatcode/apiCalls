import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./containers/NotFound";
import Flights from "./containers/Flights";

function App() {
  return (
    <div className="App">
    <>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/Flights" element={<Flights />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
    </div>
  );
}

export default App;
