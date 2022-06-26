import { useNavigate } from 'react-router-dom';
interface CharacterCardProps {
	name: String;
	url: String;
}

export const CharacterCard = ({ name, url }: CharacterCardProps) => {
	const navigate = useNavigate();

	const handleDetails = () =>
		navigate(`character/${name}/details`, { state: url });

	return (
		<div
			onClick={handleDetails}
			className='bg-white flex justify-center items-center w-80 m-2 p-2 rounded-lg border-2 border-gray-50 shadow-lg cursor-pointer transform scale-95 hover:scale-105 transition-colors duration-75'
		>
			<div>{name}</div>
		</div>
	);
};
