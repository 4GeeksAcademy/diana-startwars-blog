import React from "react";
import CharacterList from "./CharacterList";
import "../styles/home.css";
import PlanetList from "./PlanetList";
export const Home = () => {
	return (
	<div className="container mt-5">
		<p>
			<CharacterList/>
		</p>
		<p>
			<PlanetList/>
		</p>						
	</div>
	)
};
