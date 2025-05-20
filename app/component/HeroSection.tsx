"use client";

import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/bg-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: { xs: 6, md: 15 },
        position: "relative",
        textAlign: "center",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 60, 60, 0.55)",
          zIndex: 1,
        },
      }}
    >
      <Box sx={{ zIndex: 2, maxWidth: 800 }}>
        <Typography
          variant="overline"
          sx={{ color: "#C2C375", fontWeight: 600, fontSize:13, letterSpacing: 2 }}
        >
          WE'RE THE PHARMEDIC
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mt: 2,
            mb: 3,
            fontSize: { xs: "2rem", md: "2.8rem" },
            lineHeight: 1.3,
          }}
        >
          Delivering Wellness with Every <br /> Prescription
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "#ffffffcc",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Euismod sapien eros mus imperdiet commodo tellus luctus. Eleifend ultrices primis litora turpis nisl donec euismod habitant erat dolor.
        </Typography>

        <Button
          sx={{
            backgroundColor: "#C2C375",
            color: "#000",
            fontWeight: 500,
            fontSize: "0.85rem",
            px: 3,
            py: 1.1,
            borderRadius: 2,
            textTransform:'initial',
            "&:hover": {
              backgroundColor: "#c9cb56",
            },
          }}
        >
          Discover More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
