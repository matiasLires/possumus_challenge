import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchCharacter } from '../../functions';
import { Character } from '../../types';
interface CharacterState {
	character: Character;
}

export const CharacterDetails = () => {
	const [character, setCharacter] = useState<CharacterState['character']>();
	const navigate = useNavigate();
	const { state } = useLocation();

	const handleBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		async function fetchData() {
			const data = await fetchCharacter(state);
			setCharacter(data);
		}
		fetchData();
	}, []);

	return (
		<div>
			{character ? (
				<>
					<button onClick={handleBack}>⬅</button>
					<div>
						<div>Name: {character.name}</div>
						<div>Birth year: {character.birth_year}</div>
						<div>Gender: {character.gender}</div>
						<div>Height: {character.height}</div>
						<div>Eye color: {character.eye_color}</div>
						<div>Hair color: {character.hair_color}</div>
						<div>Skin color: {character.skin_color}</div>
					</div>
				</>
			) : (
				<div>Cargando...</div>
			)}
		</div>
	);
};
