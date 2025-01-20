import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const menuItems = [
  { text: 'Home', path: '/' },
  { text: 'Services', path: '/services' },
  { text: 'Therapists', path: '/therapists' },
  { text: 'Book Now', path: '/booking', isButton: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
          sx={{ textAlign: 'center' }}
        >
          <ListItemText
            primary={item.text}
            sx={{ color: 'text.primary' }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'white',
        boxShadow: 1,
      }}
    >
      <Toolbar sx={{ maxWidth: 'lg', width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            color: 'primary.main',
            textDecoration: 'none',
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.5rem',
            fontWeight: 700,
          }}
        >
          Serene Spa
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, ml: 'auto' }}>
          {menuItems.map((item) =>
            item.isButton ? (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                variant="contained"
                color="primary"
                sx={{ fontSize: '1rem' }}
              >
                {item.text}
              </Button>
            ) : (
              <Typography
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  transition: 'color 0.3s',
                }}
              >
                {item.text}
              </Typography>
            )
          )}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            ml: 'auto',
            color: 'text.primary',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
