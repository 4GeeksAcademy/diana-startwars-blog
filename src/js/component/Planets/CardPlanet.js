import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '/workspaces/diana-startwars-blog/src/js/component/Cards.css';
import { Context } from "/workspaces/diana-startwars-blog/src/js/store/appContext";




const CardPlanet = ({ planet }) => {
  const { id, name, description1, description2, description3, image } = planet;
  const { store, actions } = useContext(Context);

  const handleAddFavoritePlanet = () => {
    actions.addFavoritePlanet(planet);
  };


  return (
    <div className="container-fluid m-4">
      <div className="card card-custom text-white round" style={{
        width: "18.9rem"
      }}>
        <img className="img-fluid" src={planet.image} alt={planet.name} onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "https://i.pinimg.com/originals/9f/d0/02/9fd00203ccb2d3b53270623f7c5e8482.jpg";
        }} width="300" height="350" />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
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
          <Link to={`/Planetas/${id}`}>
            <span className="btn btn-warning " role="button">
              Learn more!
            </span>
          </Link>
          <span className="btn btn-warning " role="button" onClick={handleAddFavoritePlanet}>
            &#9829;
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardPlanet