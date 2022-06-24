import { useEffect, useState } from 'react';
import { fetchAllCharacters } from '../../functions';
import { CharacterCard } from '../CharacterCard';

export const CharactersList = () => {
	const [listCharacters, setListCharacters] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const list = await fetchAllCharacters();
			setListCharacters(list);
		}
		fetchData();
	}, []);

	return (
		<div>
			{listCharacters.length ? (
				listCharacters.map((character, i) => (
					<div key={i}>
						<CharacterCard character={character} />
					</div>
				))
			) : (
				<div>Cargando...</div>
			)}
		</div>
	);
};
