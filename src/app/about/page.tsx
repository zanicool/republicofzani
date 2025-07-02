"use client";
import { Box, Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 8 }}>
      <Paper elevation={6} sx={{ background: 'linear-gradient(120deg, #181824 60%, #2d0036 100%)', color: '#fff', p: 6, borderRadius: 4, maxWidth: 600, mx: 'auto', boxShadow: '0 8px 32px 0 #e50000a0', border: '1px solid #e50000' }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: '#e50000', mb: 2, letterSpacing: 1 }}>Over Empire of Zani</Typography>
        <Typography variant="body1" sx={{ fontSize: 20, color: '#fff', mb: 2 }}>
          Empire of Zani is ontstaan uit pure passie voor mechanische toetsenborden en gaming gear. Wij geloven dat een keyboard niet alleen een tool is, maar een verlengstuk van je creativiteit en skills.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, color: '#ffb3e6' }}>
          Onze missie: de mooiste, snelste en meest innovatieve keyboards naar jouw bureau brengen. Voor gamers, creators en iedereen die topkwaliteit zoekt.
        </Typography>
      </Paper>
    </Box>
  );
} 