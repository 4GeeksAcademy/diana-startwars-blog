import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../styles/home.css"

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  
  const handleRemoveFavoriteCharacter = (character) => {
    actions.removeFavoriteCharacter(character); // Llama a la función removeFromFavorites del contexto con el personaje actual
  };

  const handleRemoveFavoritePlanet = (planet) => {
    actions.removeFavoritePlanet(planet);
  };

  const handleRemoveFavoriteVehicle = (vehicle) => {
    actions.removeFavoriteVehicle(vehicle);
  };


  return (
    <>
      <div className="nav__custom">
        <nav className="navbar navbar-dark mb-3" id="nav__custom">
          <Link to="/">
            <img
              className="logo"
              style={{ width: "70px", height: "70px" }}
              src="https://pngimg.com/d/star_wars_logo_PNG34.png"
              alt="Star Wars logo"
            />
          </Link>
          <div className="btn-group fav__button">
            <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Your favorites
            </button>
            <ul className="dropdown-menu bg-dark text-white">
              <h4 className="ps-3">Characters</h4>
              {store.favCharacters.map((character, index) => (
                <><li key={index} className="nav-item">
                  <span className="nav-link d-flex justify-content-around align-items-center">
                    {character.name}
                    <i className="borrar"
                      onClick={() => handleRemoveFavoriteCharacter(character)}>
                      &#215;
                    </i>
                  </span>
                </li><hr className="dropdown-divider" /></>
              ))}
              <h4 className="ps-3">Planets</h4>
              {store.favPlanets.map((planet, index) => (
                <><li key={index} className="nav-item">
                  <span className="nav-link d-flex justify-content-around align-items-center">
                    {planet.name}
                    <i className="borrar"
                      onClick={() =>handleRemoveFavoritePlanet(planet)}>
                      &#215;
                    </i>
                  </span>
                </li><hr className="dropdown-divider" /></>
              ))}
              <h4 className="ps-3">Vehicles</h4>
              {store.favVehicles.map((vehicle, index) => (
                <><li key={index} className="nav-item">
                  <span className="nav-link d-flex justify-content-around align-items-center">
                    {vehicle.name}
                    <i className="borrar"
                      onClick={() =>handleRemoveFavoriteVehicle(vehicle)}>
                      &#215;
                    </i>
                  </span>
                </li><hr className="dropdown-divider" /></>
              ))}
            </ul>
          </div>

        </nav>
      </div>

    </>
  );
};
