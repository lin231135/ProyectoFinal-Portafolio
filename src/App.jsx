import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./sections/Inicio";
import AcercaDe from "./sections/AcercaDe";
import Proyectos from "./sections/Proyectos";
import Contacto from "./sections/Contacto";
import Habilidades from "./sections/Habilidades";
import AcercaDePage from "./pages/AcercaDePage";
import ContactoPage from "./pages/ContactoPage";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Inicio />
              <AcercaDe />
              <Habilidades />
              <Proyectos />
              <Contacto />
            </>
          }
        />
        <Route path="/acercade" element={<AcercaDePage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/proyecto/:id" element={<ProyectoDetalle />} />
      </Routes>
    </div>
  );
}

export default App;