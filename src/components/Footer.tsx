import { Link } from 'react-router-dom';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-serif mb-4">
              Serene Spa
            </Typography>
            <Typography variant="body2" className="text-gray-300">
              Experience tranquility and rejuvenation at our luxury spa. We offer a range of massage therapies and wellness treatments designed to restore your body and mind.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-serif mb-4">
              Quick Links
            </Typography>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-primary transition-colors duration-300">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-primary transition-colors duration-300">
                Services
              </Link>
              <Link to="/booking" className="text-gray-300 hover:text-primary transition-colors duration-300">
                Book Appointment
              </Link>
            </div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-serif mb-4">
              Contact Us
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-2">
              123 Serenity Lane<br />
              Wellness District<br />
              Contact: (555) 123-4567<br />
              Email: info@serenespa.com
            </Typography>
            <div className="flex space-x-2 mt-4">
              <IconButton className="text-white hover:text-primary">
                <FacebookIcon />
              </IconButton>
              <IconButton className="text-white hover:text-primary">
                <InstagramIcon />
              </IconButton>
              <IconButton className="text-white hover:text-primary">
                <TwitterIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        
        <Typography variant="body2" className="text-center text-gray-300 mt-8 pt-8 border-t border-gray-700">
          © {new Date().getFullYear()} Serene Spa. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
