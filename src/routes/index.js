import { Routes, Route } from 'react-router-dom';
import { CharactersList, CharacterDetails } from '../components';

export const RenderRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<CharactersList />} />
			<Route
				path='character/:characterName/details'
				element={<CharacterDetails />}
			/>
		</Routes>
	);
};
