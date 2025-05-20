

// "use client"
// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';

// const CountBox = ({ end, label, isLast }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const target = parseInt(end.replace('+', ''));
//     const duration = 1000;
//     const increment = Math.ceil(target / (duration / 10));
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         setCount(target);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 10);
//     return () => clearInterval(timer);
//   }, [end]);

//   return (
//     <Grid
//       item
//       xs={12}
//       sm={6}
//       md={3}
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         py: 3,
//         borderRight: !isLast ? '1px solid #e0e0e0' : 'none',
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 700,
//           fontSize: { xs: '28px', md: '45px' },
//           color: '#219E9D',
//           mb: 1,
//           marginRight: '20px',
//         }}
//       >
//         {count}+
//       </Typography>
//       <Typography
//         variant="body1"
//         sx={{
//           fontSize: '18px',
//           color: '#333',
//           textAlign: 'center',
//           marginRight: '20px',
//         }}
//       >
//         {label}
//       </Typography>
//     </Grid>
//   );
// };

// const AnimatedStats = () => {
//   const stats = [
//     { count: '123+', label: 'Professional Staff' },
//     { count: '587+', label: 'Kind Of Medicine' },
//     { count: '40+', label: 'Doctor Specialist' },
//     { count: '269+', label: 'Active Member' },
//   ];

//   return (
//     <Grid
//       container
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignContent: 'flex-start',
//         position: 'relative',
//         zIndex: 3,
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         mt: -8,
//         boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
//         width: '90%',
//         maxWidth: '1400px',
//         mx: 'auto',
//         overflow: 'hidden',
//       }}
//     >
//       {stats.map((item, index) => (
//         <CountBox
//           key={index}
//           end={item.count}
//           label={item.label}
//           isLast={index === stats.length - 1}
//         />
//       ))}
//     </Grid>
//   );
// };

// const PharmacyHeroSection = () => {
//   return (
//     <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', p: '20px 0px' }}>
//       {/* Background Image with Overlay */}
//       <Box
//         sx={{
//           backgroundImage: 'url(/pharmacy.jpg)', // Replace with actual path
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: { xs: 'auto', md: '600px' },
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//           position: 'relative',
//           px: { xs: 2, md: 10 },
//           py: { xs: 4, md: 6 },
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             bgcolor: 'rgba(0, 51, 51, 0.5)',
//             zIndex: 1,
//           },
//         }}
//       >
//         <Box sx={{ zIndex: 2, maxWidth: 600, color: 'white' }}>
//           <Typography variant="overline" sx={{ color: '#c2c882' }}>
//             THE BEST PHARMACY STORE
//           </Typography>
//           <Typography variant="h3" fontWeight="bold" sx={{ my: 2 }}>
//             We Have The Most Complete Medicine and Vitamins
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 3 }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
//             ullamcorper mattis, pulvinar dapibus leo.
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{ bgcolor: '#d3db5a', color: 'black', textTransform: 'none', px: 4 }}
//           >
//             Shop Now
//           </Button>
//         </Box>
//       </Box>

//       {/* Animated Stats */}
//       <AnimatedStats />
//     </Box>
//   );
// };

// export default PharmacyHeroSection;


"use client"
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, useTheme, useMediaQuery } from '@mui/material';

const CountBox = ({ end, label, isLast, index }) => {  // Added index as a prop
  const [count, setCount] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    let start = 0;
    const target = parseInt(end.replace('+', ''));
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 16));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <Grid
      item
      xs={6}
      sm={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 2, sm: 3, md: 4 },
        px: 1,
        borderRight: !isLast ? { xs: 'none', sm: '1px solid rgba(224, 224, 224, 0.5)' } : 'none',
        borderBottom: { xs: isMobile && index < 2 ? '1px solid rgba(224, 224, 224, 0.5)' : 'none', sm: 'none' }
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.75rem', lg: '3rem' },
          color: '#219E9D',
          mb: { xs: 0.5, sm: 1 },
          lineHeight: 1.2,
        }}
      >
        {count}+
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
          color: '#333',
          textAlign: 'center',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Grid>
  );
};

const AnimatedStats = () => {
  const stats = [
    { count: '123+', label: 'Professional Staff' },
    { count: '587+', label: 'Kind Of Medicine' },
    { count: '40+', label: 'Doctor Specialist' },
    { count: '269+', label: 'Active Member' },
  ];

  return (
    <Grid
      container
      sx={{
        justifyContent:{xs:'center',md:'space-evenly'},
        backgroundColor: 'white',
        borderRadius: { xs: '8px', sm: '12px' },
        mt: { xs: -6, sm: -8, md: -10 },
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        width: { xs: '90%', sm: '95%', lg: '90%' },
        maxWidth: '1400px',
        mx: 'auto',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 3,
      }}
    >
      {stats.map((item, index) => (
        <CountBox
          key={index}
          end={item.count}
          label={item.label}
          isLast={index === stats.length - 1}
          index={index}  // Now passing index as a prop
        />
      ))}
    </Grid>
  );
};

const PharmacyHeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden', 
      pt: { xs: 0, sm: 2 },
      pb: { xs: 6, sm: 8, md: 10 }
    }}>
      {/* Background Image with Overlay */}
      <Box
        sx={{
          backgroundImage: 'url(/pharmacy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { md: 'fixed' },
          minHeight: { xs: '500px', sm: '600px', md: '700px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-end' },
          position: 'relative',
          px: { xs: 2, sm: 4, md: 6, lg: 10 },
          py: { xs: 8, sm: 10, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 51, 51, 0.6)',
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ 
          zIndex: 2, 
          maxWidth: { xs: '100%', sm: '80%', md: '600px' },
          color: 'white',
          textAlign: { xs: 'center', md: 'left' }
        }}>
          <Typography variant="overline" sx={{ 
            color: '#c2c882',
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            letterSpacing: 2,
            display: 'inline-block',
            mb: 1
          }}>
            THE BEST PHARMACY STORE
          </Typography>
          <Typography variant="h3" fontWeight="bold" sx={{ 
            my: 2,
            fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
            lineHeight: 1.2
          }}>
            We Have The Most Complete Medicine and Vitamins
          </Typography>
          <Typography variant="body1" sx={{ 
            mb: 3,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            opacity: 0.9
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Button
            variant="contained"
            sx={{ 
              bgcolor: '#d3db5a', 
              color: 'black', 
              textTransform: 'none', 
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#c4cc52',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Animated Stats */}
      <AnimatedStats />
    </Box>
  );
};

export default PharmacyHeroSection;