import axios from 'axios';

export const fetchCharacters = () =>
	axios
		.get('https://swapi.dev/api/people/')
		.then(response => {
			return response.data.results;
		})
		.catch(err => err);
