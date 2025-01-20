import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface Therapist {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  description: string;
  image: string;
}

const therapists: Therapist[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "Swedish Massage, Deep Tissue",
    experience: "8 years",
    description: "Sarah specializes in Swedish and deep tissue massage, helping clients achieve deep relaxation and muscle tension relief.",
    image: "/images/therapist1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    specialization: "Thai Massage, Reflexology",
    experience: "10 years",
    description: "Michael is an expert in traditional Thai massage and reflexology, focusing on energy flow and pressure points.",
    image: "/images/therapist2.jpg"
  },
  {
    id: 3,
    name: "Emma Williams",
    specialization: "Hot Stone Massage, Aromatherapy",
    experience: "6 years",
    description: "Emma combines hot stone therapy with aromatherapy to create a deeply relaxing and healing experience.",
    image: "/images/therapist3.jpg"
  },
  {
    id: 4,
    name: "David Martinez",
    specialization: "Sports Massage, Trigger Point Therapy",
    experience: "12 years",
    description: "David specializes in sports massage and trigger point therapy, helping athletes and active individuals maintain peak performance.",
    image: "/images/therapist4.jpg"
  }
];

const Therapists = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box mb={6} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          Our Expert Therapists
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Meet our team of experienced and certified massage therapists
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {therapists.map((therapist) => (
          <Grid item xs={12} sm={6} md={3} key={therapist.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={therapist.image}
                alt={therapist.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {therapist.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {therapist.specialization}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Experience: {therapist.experience}
                </Typography>
                <Typography variant="body2">
                  {therapist.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Therapists;
