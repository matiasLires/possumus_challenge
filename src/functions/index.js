import axios from 'axios';

export const fetchAllCharacters = () =>
	axios
		.get('https://swapi.dev/api/people/')
		.then(response => {
			return response.data.results;
		})
		.catch(err => err);

export const fetchCharacter = url =>
	axios
		.get(url)
		.then(response => {
			return response.data.results;
		})
		.catch(err => err);
