import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCharacter } from '../../functions';
import { Character } from '../../types';
interface CharacterState {
	character: Character;
}
export const CharacterDetails = () => {
	const [character, setCharacter] = useState<CharacterState['character']>();

	const { state } = useLocation();

	useEffect(() => {
		async function fetchData() {
			const data = await fetchCharacter(state);
			setCharacter(data);
			console.log('state', data);
		}
		fetchData();
	}, []);
	return (
		<div>
			{character ? <div>{character.name}</div> : <div>Cargando...</div>}
		</div>
	);
};
