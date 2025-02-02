import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavPlaylist = ({ name, id, loading }) => {
	return (
		<NavLink
			className="playlist_navlink no-underline"
			style={({ isActive }) => ({
				textDecoration: 'none',
				color: isActive ? '#1bd760' : '#b3b3b3' // Green when active
			})}
			to={loading ? '' : `playlist/${id}`}
		>
			<Box
				px={3}
				py={0.7}
				sx={(theme) => ({
					cursor: 'pointer',
					color: 'inherit',
					'&:hover': { color: theme.palette.text.primary },
					transition: 'color 0.2s ease-in-out',
					fontSize: '12px'
				})}
			>
				{loading ? <Skeleton px={3}
				py={1} variant="text" sx={{ fontSize: 12 }} /> : name}
			</Box>
		</NavLink>
	);
};

export default NavPlaylist;
