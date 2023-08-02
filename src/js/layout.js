import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import InfoCharacters from "./component/Characters/InfoCharacters";
import InfoPlanets from "./component/Planets/InfoPlanets";
import InfoVehicles from "./component/Vehicles/InfoVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<h1>Not found!</h1>} />
 						<Route path="/Personajes/:idPersonajes" element={<InfoCharacters/>} />
						<Route path="/Planetas/:idPlanetas" element={<InfoPlanets/>} />
						<Route path="/Vehiculos/:idVehiculos" element={<InfoVehicles/>} />

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
