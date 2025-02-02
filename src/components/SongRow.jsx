import { Grid, Box, Typography, Skeleton, Avatar } from '@mui/material';
import React from 'react';
import { formatTime } from '../utils/formatTime';

const SongRow = ({images, title, artist, album, duration, loading, i, position, contextUri, spotifyApi}) => {
  const image = images?.length > 0? images[0].url : null

  const onRowClick = async ()=> {
    const song = {context_uri : contextUri, offset: {position: position}, position_ms : 0 };
    await spotifyApi.play(song)
  }
  

	return (
		<Grid onClick={onRowClick} container px={2} py={1}
			sx={{ width: '100%', color: 'text.secondary', fontSize: 14, cursor: loading? 'default' : 'pointer',
				'&:hover': { bgcolor: '#ffffff10' }}}>

			<Grid item sx={{ width: 35, display: 'flex', alignItems: 'center', fontSize: 16 }}>
				{i + 1}
			</Grid>

			<Grid item sx={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2 }}>

       {loading ? (
					<Skeleton variant="rectangular" width={40} height={40} />
			  	) : (
					<Avatar src={image} alt={image} variant="square" />
				  )}

				<Box ml={1}>
					<Typography sx={{ fontSize: 16, color: 'text.primary' }}>
						{loading ? <Skeleton variant="text" width={130} height={24} /> :  title.length > 35 ? `${title.slice(0, 35)}...` : title}
					</Typography>
					<Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
						{loading ? <Skeleton variant="text" width={50} height={18} /> : artist}
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
		  	{loading ? <Skeleton variant="text" width={50} height={14} /> : album.length > 40? `${album.slice(0, 40)}...`: album}
			</Grid>

			<Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      {loading ? <Skeleton variant="text" width={50} height={14} /> : formatTime(duration)}
			</Grid>

		</Grid>
	);
};

export default SongRow;
