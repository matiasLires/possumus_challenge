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
		<div
			onClick={handleDetails}
			className='bg-white flex justify-center items-center w-80 m-2 p-2 rounded-lg border-2 border-gray-50 shadow-lg cursor-pointer transform scale-95 hover:scale-105 transition-colors duration-75'
		>
			<div>{character.name}</div>
		</div>
	);
};
