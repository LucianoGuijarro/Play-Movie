import React from "react";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center ">
      <div className="row ">
        <div class="mb-3 ">
          <label for="usuario" class="form-label fs-4 text-light">
            Usuario
          </label>
          <input
            type="text"
            class="form-control"
            id="usuario"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="usuario" class="form-label fs-4 text-light">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="usuario"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
