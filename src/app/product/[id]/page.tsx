"use client";
import { useParams } from "next/navigation";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Zani T-shirt",
    price: 29.99,
    image: "/vercel.svg",
    description: "Comfortabel Zani T-shirt van hoge kwaliteit.",
  },
  {
    id: 2,
    name: "Zani Hoodie",
    price: 49.99,
    image: "/globe.svg",
    description: "Warme hoodie met Zani logo.",
  },
  {
    id: 3,
    name: "Zani Cap",
    price: 19.99,
    image: "/window.svg",
    description: "Stoere cap voor elke dag.",
  },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Box p={4}>
        <Typography variant="h5">Product niet gevonden</Typography>
        <Link href="/" passHref legacyBehavior>
          <Button variant="outlined" sx={{ mt: 2 }}>Terug naar overzicht</Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box p={4} display="flex" flexDirection="column" alignItems="center">
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>{product.name}</Typography>
          <Typography color="text.secondary" gutterBottom>€ {product.price.toFixed(2)}</Typography>
          <Typography variant="body1" mb={2}>{product.description}</Typography>
          <Link href="/" passHref legacyBehavior>
            <Button variant="contained">Terug naar overzicht</Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
} 