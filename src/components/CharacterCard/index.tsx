type Character = {
	character: { name: string };
};

export const CharacterCard = ({ character }: Character) => {
	return (
		<div>
			<div>{character.name}</div>
		</div>
	);
};
