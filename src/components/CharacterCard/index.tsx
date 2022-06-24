import { Character } from '../../types';
import { useNavigate } from 'react-router-dom';

export const CharacterCard = ({ character }: Character) => {
	const navigate = useNavigate();
	const handleDetails = () =>
		navigate(`character/${character.name}/details`, {
			replace: true,
			state: character.url,
		});

	return (
		<div>
			<div onClick={handleDetails}>{character.name}</div>
		</div>
	);
};
