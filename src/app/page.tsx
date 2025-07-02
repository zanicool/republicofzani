"use client";
import { Box, Typography, Button, Stack, Grid, Card, CardContent, CardMedia, Chip } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      {/* Hero */}
      <Box sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(120deg, #0a0a0a 60%, #2d0036 100%)",
        borderRadius: 6,
        boxShadow: "0 8px 32px 0 rgba(229,0,0,0.25)",
        mt: 8,
        mb: 8,
        px: 2,
      }}>
        <img src="/roz-logo.jpg" alt="Republic of Zani logo" style={{ width: 120, marginBottom: 24 }} />
        <Typography variant="h2" sx={{ color: "#fff", fontWeight: 900, letterSpacing: 2, mb: 2, textShadow: "0 4px 32px #e50000a0" }}>
          Republic of Zani
        </Typography>
        <Typography variant="h5" sx={{ color: "#e50000", fontWeight: 700, mb: 4, textAlign: "center" }}>
          Premium Keyboards & Gear for Gamers and Creators
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Button component={Link} href="/store" size="large" variant="contained" sx={{ background: "linear-gradient(90deg, #e50000 0%, #a600ff 100%)", color: "#fff", fontWeight: 800, fontSize: 20, px: 5, py: 2, borderRadius: 3, boxShadow: "0 2px 16px #e50000a0", letterSpacing: 1.2 }}>
            Shop Keyboards
          </Button>
          <Button component={Link} href="/about" size="large" variant="outlined" sx={{ color: "#fff", borderColor: "#e50000", fontWeight: 700, fontSize: 20, px: 5, py: 2, borderRadius: 3, '&:hover': { background: "#e50000", color: "#fff" } }}>
            About Us
          </Button>
        </Stack>
      </Box>

      {/* ROZ MARK 1 Keyboard Info */}
      <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ maxWidth: 1100, mx: "auto", background: "#181824", borderRadius: 4, boxShadow: "0 4px 32px #e50000a0", p: { xs: 2, md: 6 }, mb: 8 }}>
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex", justifyContent: "center" }}>{}
          <CardMedia
            component="img"
            image="/coming.png"
            alt="ROZ MARK 1"
            sx={{ width: 220, height: 220, objectFit: "contain", background: "#e50000", borderRadius: 3, p: 2, boxShadow: "0 2px 16px #e50000a0" }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Card sx={{ background: "transparent", boxShadow: "none", color: "#fff" }}>
            <CardContent>
              <Typography variant="h3" sx={{ fontWeight: 900, color: "#e50000", mb: 1, letterSpacing: 1 }}>
                ROZ MARK 1
              </Typography>
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 2 }}>
                Hall Effect Keyboard – Rapid Trigger, Snappy, Ultra Low Response Time
              </Typography>
              <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
                <Chip label="Hall Effect" sx={{ background: "#e50000", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 2 }} />
                <Chip label="Rapid Trigger" sx={{ background: "#e50000", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 2 }} />
                <Chip label="Snappy" sx={{ background: "#e50000", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 2 }} />
                <Chip label="Ultra Low Response Time" sx={{ background: "#e50000", color: "#000", fontWeight: 700, fontSize: 16, borderRadius: 2 }} />
              </Stack>
              <Typography variant="h5" sx={{ color: "#e50000", fontWeight: 800, mb: 2 }}>
                Binnenkort beschikbaar
              </Typography>
              <Button variant="contained" size="large" sx={{ background: "linear-gradient(90deg, #e50000 0%, #a600ff 100%)", color: "#fff", fontWeight: 800, fontSize: 18, px: 5, py: 1.5, borderRadius: 2, boxShadow: "0 2px 8px 0 #e50000a0", letterSpacing: 1.1 }}>
                Blijf op de hoogte
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

    