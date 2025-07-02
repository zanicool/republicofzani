"use client";
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Zani T-shirt",
    price: 29.99,
    image: "/vercel.svg",
  },
  {
    id: 2,
    name: "Zani Hoodie",
    price: 49.99,
    image: "/globe.svg",
  },
  {
    id: 3,
    name: "Zani Cap",
    price: 19.99,
    image: "/window.svg",
  },
];

export default function ProductList() {
  return (
    <div style={{ padding: 32 }}>
      <Typography variant="h3" gutterBottom>
        Producten
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="text.secondary">€ {product.price.toFixed(2)}</Typography>
              </CardContent>
              <CardActions>
                <Link href={`/product/${product.id}`} passHref legacyBehavior>
                  <Button size="small" variant="contained" color="primary">Bekijk</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

    