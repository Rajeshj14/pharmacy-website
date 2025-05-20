import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";

const testimonials = [
  {
    name: "Paula Jefferson",
    location: "Surabaya",
    image: "/client1.jpg",
    message:
      "Choosing Healminos was one of the best decisions I made for my well-being. The global community aspect is inspiring, and the platform's commitment to continuous innovation ensures I always have access to the latest in healthcare technology. Thank you, Healminos!",
  },
  {
    name: "John Dalton",
    location: "Bandung",
    image: "/client2.jpg",
    message:
      "Healminos has truly transformed the way I manage my health. The personalized guidance and direct consultations with pharmacists make it an invaluable resource for anyone seeking proactive and comprehensive healthcare. I couldn't be happier with the results!",
  },
  {
    name: "Katty Laurent",
    location: "Jakarta",
    image: "/client3.jpg",
    message:
      "As a busy professional, Healminos has been a game-changer in my life. The automatic medication dosage tracking and convenient delivery service have saved me time and effort, allowing me to prioritize my health without any hassle. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  return (
    <Box sx={{ textAlign: "center", py: 8, px: 2, backgroundColor: "#ddd" }}>
      <Typography
        variant="subtitle2"
        sx={{ color: "#47A2A3", letterSpacing: 1, mb: 1 }}
      >
        TESTIMONIALS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
        Member Feedback & Reviews
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: 600, mx: "auto", color: "#666", mb: 6 }}
      >
        Massa sollicitudin nostra quam duis sagittis turpis netus pede
        imperdiet interdum dignissim est parturient
      </Typography>

      {/* Testimonial cards in a row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "nowrap",
          overflowX: "auto", // optional horizontal scroll
          px: 2,
        }}
      >
        {testimonials.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              flex: "0 0 340px", // fixed width, no shrink
              p: 4,
              borderRadius: "16px",
              textAlign: "center",
              minHeight: "100%",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={item.image}
              alt={item.name}
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 2,
                border: "4px solid white",
                boxShadow: 2,
              }}
            />
            <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
              "{item.message}"
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", fontWeight: 500 }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#47A2A3", fontWeight: 400 }}
            >
              {item.location}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
