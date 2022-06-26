import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LadingPage from "./Components/LadingPage";
import PeliculasDetail from "./Pages/PeliculasDetail";
import Login from "./Pages/Login";
import Navbars from "./Components/Headers/Navbars";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbars />
        <Routes>
          <Route path="/" element={<LadingPage />}></Route>
          <Route
            path="/pelicula/:peliculaId"
            element={<PeliculasDetail />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
