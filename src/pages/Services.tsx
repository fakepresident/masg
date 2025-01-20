import { motion } from 'framer-motion';
import { Container, Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Swedish Massage',
    description: 'A gentle, relaxing massage that uses long strokes to ease tension.',
    duration: '60 min',
    price: '$80',
    image: 'https://placehold.co/600x400/9F7A49/FFFFFF/png?text=Swedish+Massage'
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Targets deep muscle layers to release chronic tension.',
    duration: '60 min',
    price: '$85',
    image: 'https://placehold.co/600x400/9F7A49/FFFFFF/png?text=Deep+Tissue'
  },
  {
    title: 'Aromatherapy Massage',
    description: 'Combines gentle massage with essential oils for ultimate relaxation.',
    duration: '60 min',
    price: '$90',
    image: 'https://placehold.co/600x400/9F7A49/FFFFFF/png?text=Aromatherapy'
  },
  {
    title: 'Sports Massage',
    description: 'Targets specific areas of muscle tension and aims to enhance athletic performance.',
    duration: '60 min',
    price: '$95',
    image: 'https://placehold.co/600x400/9F7A49/FFFFFF/png?text=Sports+Massage'
  },
  {
    title: 'Couples Massage',
    description: 'Share a relaxing massage experience with your partner in our luxurious couple\'s suite.',
    duration: '60 min',
    price: '$160',
    image: 'https://placehold.co/600x400/9F7A49/FFFFFF/png?text=Couples+Massage'
  }
];

const Services = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <section className="section-padding">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Typography variant="h2" className="text-4xl mb-4 font-serif">
              Our Services
            </Typography>
            <Typography variant="body1" color="textSecondary" className="max-w-2xl mx-auto">
              Choose from our range of therapeutic massages, each designed to provide specific benefits for your body and mind.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={service.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      className="h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <Typography variant="h5" className="mb-2 font-serif">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" className="mb-4">
                        {service.description}
                      </Typography>
                      <div className="flex justify-between items-center mb-4">
                        <Typography variant="subtitle1" className="font-semibold">
                          {service.duration}
                        </Typography>
                        <Typography variant="h6" className="text-primary font-semibold">
                          {service.price}
                        </Typography>
                      </div>
                      <Button
                        component={Link}
                        to="/booking"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="btn-primary"
                      >
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Services;
