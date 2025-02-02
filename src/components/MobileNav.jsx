import { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { BorderTop, Home, List } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MobileNav = () => {
	const [value, setValue] = useState(0);
	const navigate = useNavigate();

	const styledNav = { color: 'text.secondary' };

	return (
		<Box sx={{ display: { xs: 'block', md: 'none'}, height:'75px' , borderTop: 'solid 1px #ffffff15' }}>
			<BottomNavigation
				sx={{ bgcolor: 'background.paper', height: '100%' }}
				showLabels
				value={value}
				onChange={(_, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction sx={styledNav} label="Home" icon={<Home />} onClick={() => navigate('/')} />
				<BottomNavigationAction
					sx={styledNav}
					label="Library"
					icon={<PlaylistPlayIcon />}
					onClick={() => navigate('/library')}
				/>
			</BottomNavigation>
		</Box>
	);
};

export default MobileNav;