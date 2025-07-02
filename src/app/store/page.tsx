"use client";
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const products = [
  {
    id: 1,
    name: "ROZ MARK 1",
    tagline: "D",
    image: "/coming.jpg",
    price: 149.99,
  },
];

export default function Store() {
  return (
    <Box sx={{ minHeight: '70vh', py: 6 }}>
      <Typography variant="h3" align="center" sx={{ color: '#fff', fontWeight: 900, letterSpacing: 2, mb: 6, textShadow: '0 4px 32px #e50000a0' }}>
        Keyboards Store
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ width: 340, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 420, background: 'linear-gradient(135deg, #181824 60%, #2d0036 100%)', color: '#fff', borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)', border: '1px solid #e50000', }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: 180, height: 120, objectFit: 'contain', mb: 3, filter: 'drop-shadow(0 0 24px #e5000088)' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, letterSpacing: 1 }}>{product.name}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#ffb3e6', fontWeight: 500, mb: 2, fontSize: 16, mt: 6 }}>{product.tagline}</Typography>
                <Typography variant="h6" sx={{ color: '#e50000', fontWeight: 700, mb: 2 }}>
                  € {product.price.toFixed(2)}
                </Typography>
                <Button variant="contained" sx={{ background: 'linear-gradient(90deg, #e50000 0%, #a600ff 100%)', color: '#fff', fontWeight: 700, borderRadius: 2, px: 4, py: 1, fontSize: 16, boxShadow: '0 2px 8px 0 #e50000a0', letterSpacing: 1.1 }}>
                  Koop nu
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 