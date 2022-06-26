import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div class='dropdown ms-3'>
        <button
          class="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="mx-2" src={user.picture} alt="" width='30' height='30'/>
          {user.name}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="/">
              <LogoutButton />
            </a>
          </li>
        </ul>
      </div>
    )
  );
};

export default Profile;
