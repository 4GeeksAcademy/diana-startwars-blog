import React from "react";
import "../styles/home.css";
import CharacterList from "./CharacterList.js";
import PlanetList from "./PlanetList.js";
import VehicleList from "./VehicleList.js";


export const Home = () => {
	return (
		<>
		<div className="container mt-5">
			<div>
				<h2 className="text-white mt-4">CHARACTERS</h2>
				<CharacterList />
				<h2 className="text-white mt-4">PLANETS</h2>
				<PlanetList />
				<h2 className="text-white mt-4">VEHICLES</h2>
				<VehicleList />
			</div>
		</div>
		</>
	)
};
