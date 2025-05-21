"use client"

import React, { useState } from "react";
import { Box, Typography, Button, InputBase, Paper, Snackbar, Alert } from "@mui/material";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error" | "info" | "warning";
  }>({
    open: false,
    message: "",
    severity: "success", // or "error"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSnackbar({
          open: true,
          message: data.message || "Something went wrong. Please try again.",
          severity: "error",
        });
      } else {
        setSnackbar({
          open: true,
          message: data.message || "Thank you for your submission",
          severity: "success",
        });
        setEmail(""); // Clear input field
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setSnackbar({
        open: true,
        message: "Network error. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };


  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "180px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 10 },
        backgroundImage: "url('/empty-pharmacy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 60, 60, 0.55)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          color: "#fff",
        }}
      >
        {/* Text Side */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Sign Up For Newsletter
          </Typography>
          <Typography sx={{ fontSize: "18px", mt: 1 }}>
            Join 60,000+ Subscribers and get a new discounts coupon every saturday
          </Typography>
        </Box>

        {/* Form Side */}
        <Paper
          component="form"
          elevation={0}
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", sm: 400 },
            borderRadius: "10px",
            overflow: "hidden",
            bgcolor: "#fff",
          }}
        >
          <InputBase
            sx={{ ml: 2, flex: 1, fontSize: 16 }}
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputProps={{ "aria-label": "email" }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              borderRadius: 0,
              px: 4,
              height: "100%",
              backgroundColor: "#b5b96d",
              color: "#000",
              fontWeight: "bold",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#a6aa60",
              },
              "&:disabled": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </Paper>
      </Box>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}