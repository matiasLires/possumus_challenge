import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../functions';
import { CharacterCard } from '../CharacterCard';

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
				listCharacters.map((character, i) => (
					<div key={i}>
						<CharacterCard character={character} />
					</div>
				))}
		</div>
	);
};
