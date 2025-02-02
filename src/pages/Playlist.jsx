import { Avatar, Box, Skeleton, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongTable from '../components/SongTable';

const Playlist = ({ spotifyApi, token }) => {
	const [playlistInfo, setPlaylistInfo] = useState(null);
	const [songs, setSongs] = useState([]);
	const { id } = useParams();
	const [status, setStatus] = useState({ loading: true, isError: null });

	const formatSongs = useCallback(
		(item) =>
			item.map((item, i) => {
				// console.log({ item, i });
				const { track } = item;
				track.contextUri = `spotify:playlist:${id}`;
				track.position = i;
				return track;
			}),
		[id]
	);

	useEffect(() => {
		const getData = async () => {
			try {
				const playlistData = await spotifyApi.getPlaylist(id);
				setPlaylistInfo({
					name: playlistData.body.name,
					image: playlistData.body.images?.[1]?.url || playlistData.body.images?.[0]?.url // this covers even ""
					// image: playlistData.body.images?.[1]?.url ?? playlistData.body.images?.[0]?.url  While this doesnt, it only gives fallback if its null or undefined
				});
				const { items } = playlistData.body.tracks;

				const formatedSongs = formatSongs(items);
				setSongs(formatedSongs);
				setStatus({ loading: false, isError: null });

			} catch (err) {
				console.error('malakia', err);
				setStatus({ loading: false, isError: err });
			}
		};

		getData().finally(() => setStatus({loading: false, isError: null}));
    
	}, [id, spotifyApi, formatSongs, token]);

	return (
		<Box id="Playlist__page" sx={{ bgcolor: 'background.paper', flex: 1, overflowY: 'auto', height: '100vh' }}>
			<Box
				p={{ xs: 3, md: 4 }}
				sx={{
					width: '100%',
					background: 'linear-gradient(0deg, #121212 0%, #1bd76060 100%);',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: { xs: 'flex-start', md: 'flex-end', xl: 'center' },
					gap: 3,
					boxSizing: 'border-box',
					flexDirection: { xs: 'column', md: 'row' }
				}}
			>
				{!status.loading && playlistInfo ? (
					<Avatar
						src={playlistInfo?.image}
						variant="square"
						alt={playlistInfo?.name}
						sx={{
							boxShadow: 15,
							minWidth: { md: 235 },
							width: { xs: '100%', md: 235 },
							height: { xs: '100%', md: 235 }
						}}
					/>
				) : (
					<Skeleton
						variant="square"
						sx={{ width: { xs: '100%', md: 235 }, height: { xs: '100%', md: 235 } }}
					/>
				)}

				<Box>
					<Typography sx={{ fontSize: 12, fontWeight: 'bold', color: 'text.primary' }}>Playlist</Typography>
					<Typography
						sx={{
							fontSize: { xs: 42, md: playlistInfo?.name?.length > 15 ? 50 : 62 },
							fontWeight: 'bold',
							color: 'text.primary'
						}}
					>
						{!status.loading && playlistInfo ? 
            playlistInfo.name 
            :
            <Skeleton variant="text" sx={{
							fontSize: { xs: 42, md: playlistInfo?.name?.length > 15 ? 50 : 62},
              width: '250px',
						}}/>}
					</Typography>
				</Box>
			</Box>

      <SongTable songs={songs} loading={status.loading} spotifyApi={spotifyApi}/>

		</Box>
	);
};

export default Playlist;
