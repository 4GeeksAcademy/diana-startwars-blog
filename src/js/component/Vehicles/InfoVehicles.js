import React from 'react'
import { useContext } from "react";
import { Context } from "../../store/appContext"
import { Link, useParams } from 'react-router-dom';
import "/workspaces/diana-startwars-blog/src/js/component/Cards.css"

const InfoVehicles = () => {
    const params = useParams();
    const vehicleIndex = params.idVehiculos;
    const { store, actions } = useContext(Context);
    const vehiclesProperties = store.vehicles[vehicleIndex - 1];

    return (
        <>
            <div className="container card general__card" style={{ width: "max-width: 500px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleIndex}.jpg`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title text-center pt-5">{vehiclesProperties.name}</h3>
                            <p className="card-text text-center mt-3">The Star Wars franchise depicts the adventures of characters "A long
                                time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with
                                robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel
                                between planets is common due to lightspeed hyperspace technology.</p>
                            <p className="card-text text-center px-4">The planets range from wealthy, planet-wide cities to deserts scarcely
                                populated by primitive tribes. Virtually any Earth biome, along with many fictional ones, has its counterpart as a
                                Star Wars planet which, in most cases, teem with sentient and non-sentient alien life.</p>

                            <div className='text-center mt-5'>
                                <h4>{vehiclesProperties.name} characteristics</h4>
                                <ul className='d-flex'>
                                    <li className='info__descriptions'>{vehiclesProperties.description1}</li>
                                    <li className='info__descriptions'>{vehiclesProperties.description2}</li>
                                    <li className='info__descriptions'>{vehiclesProperties.description3}</li>
                                    <li className='info__descriptions'>{vehiclesProperties.description4}</li>
                                    <li className='info__descriptions'>{vehiclesProperties.description5}</li>
                                    <li className='info__descriptions'>{vehiclesProperties.description6}</li>

                                </ul>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <span type="button" className="btn btn-outline-secondary"><a className="link"
                                    href="https://starwars-visualguide.com/#/vehicles?page=1" >See more</a></span>
                                <Link to="/">
                                    <span type="button" className="btn btn-outline-secondary" role="button">
                                        Go back
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InfoVehicles