import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SideNav from './SideNav';
import { getAccessTokenFromSessionStorage } from '../utils/getAccessTokenFromSessionStorage';
import Playlist from '../pages/Playlist';
import Player from './Player';
import MobileNav from './MobileNav';
import Library from '../pages/Library';

const Dashboard = ({ spotifyApi }) => {
	const token = useState(getAccessTokenFromSessionStorage());

	useEffect(() => {
		const onMount = async () => {
			await spotifyApi.setAccessToken(token);
		};

		if (token) {
			onMount();
		}
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<Box sx={{ flex: 1, overflowY: 'auto', display: 'flex'}}>
				<SideNav spotifyApi={spotifyApi} token={token} />
				<Routes>
					<Route path="/playlist/:id" element={<Playlist spotifyApi={spotifyApi} token={token} />} />
					<Route path="/library" element={<Library spotifyApi={spotifyApi} token={token}/>} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Box>
			<Player spotifyApi={spotifyApi} token={token}/>

			<MobileNav/>
		</Box>
	);
};

export default Dashboard;
