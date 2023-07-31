import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import CardPlanet from "../component/Planets/CardPlanet";

const PlanetList = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='d-flex overflow-auto'>
        {store.planets.map((planet) => (
          <div className="col" style={{ flex: '0 0 33.33%' }} key=
      {planet.id}>
            <CardPlanet planet={planet} /></div>
        ))}
      </div>
    )
}

export default PlanetList