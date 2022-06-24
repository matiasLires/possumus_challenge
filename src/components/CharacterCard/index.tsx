import { Character } from '../../types';
import { useNavigate } from 'react-router-dom';
interface Props {
	character: Character;
}
export const CharacterCard = ({ character }: Props) => {
	const navigate = useNavigate();
	const handleDetails = () =>
		navigate(`character/${character.name}/details`, { state: character.url });

	return (
		<div>
			<div style={{ cursor: 'pointer' }} onClick={handleDetails}>
				{character.name}
			</div>
		</div>
	);
};
