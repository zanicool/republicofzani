import { AppBar, Toolbar, Typography, Button, Container, Box, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata = {
  title: "republic of Zani",
  description: "The official site of the Empire of Zani",
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "About", href: "/about" },
];

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a", color: "#fff", fontFamily: 'Roboto, sans-serif', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ background: "#181824", boxShadow: "0 4px 32px #e50000a0" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/roz-logo.jpg" alt="ROZ Logo" width={40} height={40} style={{ marginRight: 8 }} />
                <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 2, color: "#e50000" }}>
                  REPUBLIC OF ZANI
                </Typography>
              </Box>
            </Stack>
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  sx={{ color: "#fff", fontWeight: 700, mx: 1, fontSize: 18, '&:hover': { color: "#e50000" } }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ py: 6 }}>{children}</Container>
        <Box component="footer" sx={{ background: "#181824", color: "#aaa", py: 3, textAlign: "center", borderTop: "1px solid #222" }}>
          <Typography variant="body2">© 2025 Empire of Zani. All rights reserved.</Typography>
        </Box>
      </body>
    </html>
  );
};

export default Layout;
