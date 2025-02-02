import React from 'react';
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const NavItem = ({ name, Icon, target }) => {
  return (
     <NavLink
      to={target}
      className="NavLink no-underline"
      style={({ isActive }) => ({
        textDecoration: 'none',
        color: isActive ? '#1bd760' : '#b3b3b3', // Green when active
      })}>
      <Box
        px={3}
        py={1}
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: 'inherit',
          '&:hover': { color: theme.palette.text.primary },
          transition: 'color 0.2s ease-in-out',
          fontSize: '14px',
        })}
      >
        {Icon && <Icon sx={{ fontSize: 28, marginRight: 1 }} />}
        {name}
      </Box>
    </NavLink>
  );
};

export default NavItem;
