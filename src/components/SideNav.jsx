import React, { useEffect, useState } from 'react';
import { Box, Divider } from '@mui/material';
import NavItem from './NavItem';
import HomeIcon from '@mui/icons-material/Home';
import NavPlaylist from './NavPlaylist';

const SideNav = ({ spotifyApi, token }) => {
	const [albumList, setAlbumList] = useState(null);
	const [loading, setLoading] = useState(true);
	const [playlists, setPlaylists] = useState([]);

	useEffect(() => {
		async function getPlaylists() {
			if (!spotifyApi) return;

			const data = await spotifyApi.getUserPlaylists();
			setPlaylists(data.body.items);
			console.log(data);
			setLoading(false);
		}
		getPlaylists();
	}, [spotifyApi, token]);

	const renderPlaylists = () => {
		return loading
			? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, i) => (
					<NavPlaylist key={i} loading={loading} />
			  ))
			: playlists.map((item, i) => <NavPlaylist key={i} loading={loading} name={item.name} id={item.id} />);
	};

	return (
		<Box
			sx={{ bgcolor: 'background.default', width: 230, 	height: '100vh',
				display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>

			<Box p={3}>
				<img src="/Spotify_Logo.png" width={'75%'} alt="Spotify" />
			</Box>

			<NavItem name={'home'} Icon={HomeIcon} target="/" />

			<Box px={3} py={1}>
				<Divider sx={{ backgroundColor: '#ffffff40' }} />
			</Box>
			
			<Box sx={{ overflowY: 'auto', flex: 1, height: '100vh' }}>
				{renderPlaylists()}
			</Box>
		</Box>
	);
};

export default SideNav;


