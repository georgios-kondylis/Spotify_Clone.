import './App.css';
import { Box } from '@mui/material';
import Login from './pages/Login';
import { getAccessToken } from './utils/getAccessToken';
import { getAccessTokenFromSessionStorage } from './utils/getAccessTokenFromSessionStorage';

import Dashboard from './components/Dashboard';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App({ spotifyApi }) {
	const [token, setToken] = useState(getAccessTokenFromSessionStorage());

	useEffect(() => {
		const accessToken = getAccessToken() || getAccessTokenFromSessionStorage();
		if (accessToken) {
			setToken(accessToken);
			sessionStorage.setItem('spotifyToken', accessToken);
			window.location.hash = '';
		}
	}, []);

	return (
		<Box className="App">
			{token ? (
				<Dashboard spotifyApi={spotifyApi} />
			) : (
				<Routes>
					<Route path="*" element={<Login />} />
				</Routes>
			)}
		</Box>
	);
}

export default App;

// redirect URLs:  http://localhost:5173/ , http://localhost:5173/callback

//        	     console log the SpotifyApi creds
{
	/* <pre>{JSON.stringify(spotifyApi, null, 2)}</pre> */
}
