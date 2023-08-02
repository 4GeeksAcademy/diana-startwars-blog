
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],
			favCharacters: [],
			favPlanets: [],
			favVehicles: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			/* Añadir favs */
			addFavoriteCharacter: (character) => {
				// Obtener el estado actual del store
				const store = getStore();
		  
				// Agregar los datos de la card al arreglo de favoritos
				setStore({ favCharacters: [...store.favCharacters, character] });
			},

			addFavoritePlanet: (planet) => {
				// Obtener el estado actual del store
				const store = getStore();
				// Agregar los datos de la card al arreglo de favoritos
				setStore({ favPlanets: [...store.favPlanets, planet] });
			},

			addFavoriteVehicle: (vehicle) => {
				// Obtener el estado actual del store
				const store = getStore();
				// Agregar los datos de la card al arreglo de favoritos
				setStore({ favVehicles: [...store.favVehicles, vehicle] });
			},


			/* Borrar favs */
			removeFavoriteCharacter: (character) => {
				// Obtener el estado actual del store
				const store = getStore();
			
				// Filtrar el personaje que deseas eliminar del arreglo de favoritos
				const updatedFavorites = store.favCharacters.filter((favCharacter) => favCharacter.id !== character.id);
			
				// Actualizar el estado con la nueva lista de favoritos sin el personaje eliminado
				setStore({ favCharacters: updatedFavorites });
			},
			
			removeFavoritePlanet: (planet) => {
				// Obtener el estado actual del store
					const store = getStore();
							
					// Filtrar el personaje que deseas eliminar del arreglo de favoritos
					const updatedFavorites = store.favPlanets.filter((favPlanet) => favPlanet.id !== planet.id);
							
					// Actualizar el estado con la nueva lista de favoritos sin el personaje eliminado
					setStore({ favPlanets: updatedFavorites });
				},

			removeFavoriteVehicle: (vehicle) => {
				// Obtener el estado actual del store
				const store = getStore();

				// Filtrar el personaje que deseas eliminar del arreglo de favoritos
				const updatedFavorites = store.favVehicles.filter((favVehicle) => favVehicle.id !== vehicle.id);

				// Actualizar el estado con la nueva lista de favoritos sin el personaje eliminado
				setStore({ favVehicles: updatedFavorites });
			},


			loadSomeData: () => {

				/* FETCH DE CHARACTERS */
				fetch("https://www.swapi.tech/api/people/")
					.then((response) => response.json())
					.then((data) => {
						const characterURLs = data.results.map((result) => result.url);
						// URL de los personajes
						Promise.all(
							characterURLs.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((charactersData) => {
								// Procesamos la respuesta para obtener los datos que necesitamos
								const characterDetails = charactersData.map((data) => ({
									id: data.result.uid,
									name: data.result.properties.name,
									url: data.result.properties.url,
									image: `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`,
									description1: `Height: ${data.result.properties.height} cm`,
									description2: `Mass: ${data.result.properties.mass} kg`,
									description3: `Eye color: ${data.result.properties.eye_color} `,
									description4: `Birth year: ${data.result.properties.birth_year} `,
									description5: `Gender: ${data.result.properties.gender} `,
									description6: `Skin color: ${data.result.properties.skin_color} `,
								}));
								setStore({ characters: characterDetails });
							})
							.catch((err) => console.error(err));
					})
					.catch((err) => console.error(err));

				/* FETCH DE PLANETS */

				fetch("https://www.swapi.tech/api/planets/")
					.then((response) => response.json())
					.then((data) => {
						const planetURLs = data.results.map((result) => result.url);
						// URL de los personajes
						Promise.all(
							planetURLs.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((planetsData) => {
								// Procesamos la respuesta para obtener los datos que necesitamos
								const planetDetails = planetsData.map((data) => ({
									id: data.result.uid,
									name: data.result.properties.name,
									url: data.result.properties.url,
									image: `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`,
									description1: `Diameter: ${data.result.properties.diameter}`,
									description2: `Rotation period: ${data.result.properties.rotation_period} `,
									description3: `Orbital period: ${data.result.properties.orbital_period} `,
									description4: `Gravity: ${data.result.properties.gravity} `,
									description5: `Population: ${data.result.properties.population} people`,
									description6: `Climate: ${data.result.properties.climate} `,
								}));
								setStore({ planets: planetDetails });
							})
							.catch((err) => console.error(err));
					})
					.catch((err) => console.error(err));

				/* FETCH DE VEHICLES */

				fetch("https://www.swapi.tech/api/vehicles/")
					.then((response) => response.json())
					.then((data) => {
						const vehicleURLs = data.results.map((result) => result.url);
						// URL de los personajes
						Promise.all(
							vehicleURLs.map((url) =>
								fetch(url).then((response) => response.json())
							)
						)
							.then((vehiclesData) => {
								// Procesamos la respuesta para obtener los datos que necesitamos
								const vehicleDetails = vehiclesData.map((data) => ({
									id: data.result.uid,
									name: data.result.properties.name,
									url: data.result.properties.url,
									image: `https://starwars-visualguide.com/assets/img/vehicles/${data.result.uid}.jpg`,
									description1: `Model: ${data.result.properties.model}`,
									description2: `Vehicle class: ${data.result.properties.vehicle_class} `,
									description3: `Manufacturer: ${data.result.properties.manufacturer} `,
									description4: `Crew: ${data.result.properties.crew} people`,
									description5: `Passengers: ${data.result.properties.passengers} people`,
									description6: `Length: ${data.result.properties.length} `,
								}));
								setStore({ vehicles: vehicleDetails });
								console.log(vehicleDetails)
							})
							.catch((err) => console.error(err));
					})
					.catch((err) => console.error(err));

			},

		}
	};
};

export default getState;
