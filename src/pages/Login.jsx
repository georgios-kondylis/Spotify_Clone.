import React from 'react';
import { Box, Button } from '@mui/material';
import { accessUrl } from '../config/config';


const Login = () => {
	return (
		<Box sx={{
			backgroundColor: 'primary.paper',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
		}}>
			<img src="/Spotify_Logo.png" alt="Spotify" className="mb-[300px] w-[70%] max-w-[500px]" />
			<Button color='primary' size='large' variant='contained' href={accessUrl}>Login to Spotify</Button>
		</Box>
	);
};

export default Login;


// console.log(accessUrl); https://accounts.spotify.com/authorize?client_id=af8f4f43f7f848ee9b31a846d42ea775&redirect_uri=http://localhost:5173/&scope=playlist-read-collaborative%20playlist-modify-public%20playlist-read-private%20playlist-modify-private%20app-remote-control%20streaming%20user-read-email%20user-read-private%20user-library-modify%20user-library-read%20user-top-read%20user-read-playback-position%20ugc-image-upload%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-follow-modify%20user-follow-read%20user-read-recently-played&response_type=token&show_dialog=true
