"use client";
import { Grid, Card, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";

const products = [
  {
    id: 1,
    name: "Zani T-shirt",
    tagline: "Exclusief comfort, binnenkort beschikbaar.",
    image: "/vercel.svg",
    price: 29.99,
  },
  {
    id: 2,
    name: "Zani Hoodie",
    tagline: "Warmte en stijl, binnenkort bij Zani.",
    image: "/globe.svg",
    price: 49.99,
  },
  {
    id: 3,
    name: "Zani Cap",
    tagline: "Maak je look af. Coming soon.",
    image: "/window.svg",
    price: 19.99,
  },
];

export default function ProductList() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(120deg, #0a0a0a 60%, #2d0036 100%)',
      py: 8,
      px: { xs: 2, md: 8 },
    }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: '#fff',
          fontWeight: 900,
          letterSpacing: 2,
          mb: 6,
          textShadow: '0 4px 32px #ff0051a0',
        }}
      >
        Zani Collectie
      </Typography>
      <Grid container spacing={6} justifyContent="center">
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 8, md: 4 }} display="flex" justifyContent="center">
            <Card sx={{ width: 360, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 420, background: 'linear-gradient(135deg, #181824 60%, #2d0036 100%)', color: '#fff', borderRadius: 4, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)', border: '1px solid #2d0036', }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: 180, height: 180, objectFit: 'contain', mb: 3, filter: 'drop-shadow(0 0 24px #a600ff88)' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, letterSpacing: 1 }}>{product.name}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#ffb3e6', fontWeight: 500, mb: 2, fontSize: 18 }}>{product.tagline}</Typography>
                <Typography variant="h6" sx={{ color: '#ff0051', fontWeight: 700, mb: 1 }}>
                  € {product.price.toFixed(2)}
                </Typography>
                <Chip label="Coming Soon" sx={{ background: 'linear-gradient(90deg, #ff0051 0%, #a600ff 100%)', color: '#fff', fontWeight: 700, fontSize: 16, borderRadius: 8, boxShadow: '0 2px 8px 0 #ff0051a0', mt: 2, letterSpacing: 1.2 }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

    