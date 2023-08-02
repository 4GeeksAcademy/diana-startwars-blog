import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardVehicles from "../component/Vehicles/CardVehicles";
import "../styles/home.css"


const VehicleList = () => {
    const {store, actions} = useContext(Context)

    return (
        <div className='d-flex overflow-auto custom-scrollbar'>
          {store.vehicles.map((vehicle) => (
            <div className="col" style={{ flex: '0 0 33.33%' }} key={vehicle.id}>
              <CardVehicles vehicle={vehicle} /></div>
          ))}
        </div>
      )
}

export default VehicleList