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
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
						setStore({characters: characterDetails});
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
						  description2: `Rotation_period: ${data.result.properties.rotation_period} `,
						  description3: `Orbital_period: ${data.result.properties.orbital_period} `,
						  description4: `Gravity: ${data.result.properties.gravity} `,
						  description5: `Population: ${data.result.properties.population} people`,
						  description6: `Climate: ${data.result.properties.climate} `,
						}));
						setStore({planets: planetDetails});
					  })
					  .catch((err) => console.error(err));
				  })
				  .catch((err) => console.error(err));
								
								
			},
		}
	};
};

export default getState;
