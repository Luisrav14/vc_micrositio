import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_color.png";

export default function App() {
  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center mt-5 pt-5">
        <form className="pt-3">
          <div className="col-md-12 text-center pb-5 px-5 mb-4">
            <img src={Logo} className="img-fluid w-100" />
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Contraseña
            </label>
          </div>

          <Link to="home" type="button" class="btn btn-primary btn-block mb-4">
            Inicar Sesión
          </Link>
        </form>
      </div>
    </div>
  );
}
