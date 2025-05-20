'use client';

import { Box, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const categories = [
  {
    title: 'Medicines',
    description: 'Massa maecenas mauris nam pharetra risus natoque etiam laoreet.',
  },
  {
    title: 'Beauty Care',
    description: 'Maximus curae cubilia purus neque dictum amet vivamus.',
  },
  {
    title: 'Health Products',
    description: 'Class morbi donec ac letius orci non interdum dapibus parturient.',
  },
  {
    title: 'Cardio Care',
    description: 'Sociosqu non nostra aliquet ante fusce mattis eleifend cursus.',
  },
];

export default function CategoryCards() {
  return (
    <Box mr={3} ml={3}>
      <Box 
        sx={{
          backgroundColor: '#f8f8f8',
          borderRadius: '8px',
          padding: '20px 10px',
          mt: 3,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap', // Ensures it wraps on small screens
        }}
      >
        {categories.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 25%',
              display: 'flex',
              alignItems: 'center',
              padding: '16px',
              borderRight:
                index !== categories.length - 1 ? '1px dashed #ccc' : 'none',
              minWidth: '200px',
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: '#2a6f6f', mb: 0.5 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Box>
            <IconButton size="small" sx={{ color: '#2a6f6f' }}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
