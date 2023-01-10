import { Navbar } from "../components/Navbar";

export const InicioPage = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row d-flex text-center py-3">
          <h1>Bienvenido a la app de Vecinos Comprometidos</h1>
        </div>
      </div>
    </div>
  );
};
