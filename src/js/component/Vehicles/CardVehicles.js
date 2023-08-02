import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '/workspaces/diana-startwars-blog/src/js/component/Cards.css';
import { Context } from "/workspaces/diana-startwars-blog/src/js/store/appContext";


const CardVehicles = ({ vehicle }) => {
  const { id, name, description1, description2, description3, image } = vehicle;
  const { store, actions } = useContext(Context);

  const handleAddFavoriteVehicle = () => {
    actions.addFavoriteVehicle(vehicle);
  };

  return (
    <div className="container-fluid m-4">
      <div className="card card-custom text-white round" style={{ width: "18.9rem" }}>
        <img className="img-fluid" src={vehicle.image} alt={vehicle.name} width="300" height="350" />
        <div className="card-body text-center">
          <h5 className="card-title">{vehicle.name}</h5>
          <p className="card-text">
            {description1}
          </p>
          <p className="card-text">
            {description2}
          </p>
          <p className="card-text">
            {description3}
          </p>
        </div>
        <div className="pb-3 d-flex justify-content-around">
          <Link to={`/Vehiculos/${id}`}>
            <span className="btn btn-warning " role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-warning " role="button" onClick={handleAddFavoriteVehicle}>
            &#9829;
          </span>
        </div>
      </div>
    </div>
  )
};

export default CardVehicles