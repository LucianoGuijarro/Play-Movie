import { useAuth0 } from "@auth0/auth0-react";
import Serch from "../Serch/Serch";
import LoginButton from "../LoginButton/LoginButton";
import Profile from "../Profile/Profile";

const Navbars = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Play-Movie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active px-4"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Categorias
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Serch />
        {isAuthenticated ? <Profile /> : <LoginButton />}
      </nav>
    </>
  );
};

export default Navbars;
