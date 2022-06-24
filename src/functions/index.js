import axios from 'axios';

export const fetchAllCharacters = () =>
	axios
		.get('https://swapi.dev/api/people/')
		.then(response => response.data.results)
		.catch(err => err);

export const fetchCharacter = url =>
	axios
		.get(url)
		.then(response => response.data)
		.catch(err => err);
