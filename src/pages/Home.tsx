import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container, Typography, Button, Grid, Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '32rem', color: 'white' }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontFamily: 'Playfair Display, serif'
              }}
            >
              Experience Pure Tranquility
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.125rem' }}>
              Immerse yourself in a world of relaxation and rejuvenation. Our expert therapists are here to help you find your perfect state of wellness.
            </Typography>
            <Button
              component={Link}
              to="/booking"
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontSize: '1.125rem' }}
            >
              Book Your Session
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {[
              {
                icon: '🌿',
                title: 'Natural Healing',
                description: 'Experience the power of natural healing techniques combined with modern expertise.'
              },
              {
                icon: '✨',
                title: 'Expert Therapists',
                description: 'Our certified therapists bring years of experience and expertise to every session.'
              },
              {
                icon: '🌺',
                title: 'Luxurious Environment',
                description: 'Relax in our carefully designed spaces that promote peace and tranquility.'
              }
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  style={{ textAlign: 'center', padding: '1.5rem' }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 2,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem'
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1.5, fontFamily: 'Playfair Display, serif' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
