import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../functions';

export const CharactersList = () => {
	const [listCharacters, setListCharacters] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const list = await fetchCharacters();
			setListCharacters(list);
		}
		fetchData();
	}, []);
	console.log('listCharacters', listCharacters);
	return (
		<div>
			{listCharacters.length &&
				listCharacters.map((ch: { name: string }, i) => (
					<div key={i}>{ch.name}</div>
				))}
		</div>
	);
};
