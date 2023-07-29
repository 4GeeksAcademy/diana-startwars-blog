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
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
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
						}));
						setStore({characters: characterDetails});
					  })
					  .catch((err) => console.error(err));
				  })
				  .catch((err) => console.error(err));
				
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
