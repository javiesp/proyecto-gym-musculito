import React from 'react';
import { Grid, Card, CardHeader, CardContent, CardActions, Button, Typography, Container, CssBaseline } from '@mui/material';

const tiers = [
    {
      title: 'Plan Básico',
      price: '10.000',
      description: ['Acceso básico al gimnasio', 'Acceso a clases grupales limitadas', 'Asistencia en línea'],
      buttonText: 'Inscríbete gratis',
      buttonVariant: 'outlined',
    },
    {
      title: 'Plan Estándar',
      subheader: 'Más popular',
      price: '15.000',
      description: [
        'Acceso completo al gimnasio',
        'Acceso ilimitado a clases grupales',
        'Asistencia personalizada',
      ],
      buttonText: 'Comenzar ahora',
      buttonVariant: 'contained',
    },
    {
      title: 'Plan Premium',
      price: '30.000',
      description: [
        'Acceso exclusivo al gimnasio',
        'Entrenamiento personalizado',
        'Acceso a todas las clases y servicios',
        'Asistencia prioritaria',
      ],
      buttonText: 'Contáctanos',
      buttonVariant: 'outlined',
    },
];

const buttonStyle = {
  backgroundColor: '#ffbc04',
  color: 'black', // Cambia el color del texto según el contraste con el fondo
};
  

export default function Pricing() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Transforma tu rutina con nuestros planes exclusivos</h2>
            <p className="text-xl text-gray-400">Descubre cómo nuestros planes pueden optimizar tu experiencia en el gimnasio, ofreciendo beneficios adaptados a tus necesidades.</p>
           </div>


          {/* Items */}
          <Container maxWidth="md">
            <Grid container spacing={5} alignItems="flex-start" justifyContent="center">
              {tiers.map((tier) => (
                <Grid item key={tier.title} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <div className="card-pricing" style={{ textAlign: 'center' }}>
                        <Typography variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mes
                        </Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} style={buttonStyle}>
                        {tier.buttonText} 
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </section>
  );
}
