import React from 'react';
import { Link } from 'react-router-dom';
import '/workspaces/diana-startwars-blog/src/js/component/Cards.css';

const CardCharacters = ({ character }) => {
  const { id, name, description1, description2, description3, image } = character;
  return (
    <div className="container-fluid m-4">
      <div className="card card-custom text-white round" style={{ width: "18.9rem" }}>
        <img className="img-fluid" src={character.image} alt={character.name} width="300" height="350" />
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
        <div>
          <Link to={`/Personajes/${id}`} className="pb-3 d-flex justify-content-around">
            <span className="btn btn-warning " role="button">
              Learn more!
            </span>
            <span className="btn btn-warning " role="button">
              corazón
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default CardCharacters