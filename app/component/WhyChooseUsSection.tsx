// import React from 'react';
// import { Box, Grid, Typography, Avatar, Paper } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// const features = [
//   {
//     title: 'Honesty & transparency',
//     description:
//       'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
//   },
//   {
//     title: 'Expert Pharmacist',
//     description:
//       'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
//   },
//   {
//     title: 'Extra Discount',
//     description:
//       'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
//   },
// ];

// const WhyChooseUsSection = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 10 }, py: 8, backgroundColor: '#fff', display:'flex',flexDirection:"row" }}>
//       <Grid container spacing={4} alignItems="center" width={'50%'}>
//         {/* Left Side Text */}
//         <Grid item xs={12} md={7}>
//           <Typography variant="overline" sx={{ color: '#4f4f4f' }}>
//             WHY CHOOSE US
//           </Typography>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
//             We care beyond what your doctors have prescribed
//           </Typography>
//           <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </Typography>

//           {features.map((feature, index) => (
//             <Box key={index} sx={{ display: 'flex', mb: 3, alignItems: 'flex-start' }}>
//               <Avatar
//                 sx={{
//                   bgcolor: '#219E9D',
//                   width: 48,
//                   height: 48,
//                   mr: 2,
//                 }}
//               >
//                 <CheckCircleIcon sx={{ fontSize: 30 }} />
//               </Avatar>
//               <Box>
//                 <Typography variant="subtitle1" fontWeight="bold">
//                   {feature.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: '#555', mt: 0.5 }}>
//                   {feature.description}
//                 </Typography>
//                 {index < features.length - 1 && (
//                   <Box sx={{ borderBottom: '1px dashed #ccc', mt: 2, mb: 2 }} />
//                 )}
//               </Box>
//             </Box>
//           ))}
//         </Grid>

//         {/* Right Side Image + Experience Badge */}
//         <Grid item xs={12} md={5} sx={{ position: 'relative'}}>
//           <Box
//             component="img"
//             src="/whywechooseus.jpg" // Place this image in your public/ folder and name accordingly
//             alt="Pharmacist"
//             sx={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: '12px',
//               boxShadow: 3,
//             }}
//           />

//           {/* Experience Badge */}
//           <Paper
//             elevation={3}
//             sx={{
//               position: 'absolute',
//               bottom: 16,
//               left: 16,
//               bgcolor: '#dce286',
//               px: 3,
//               py: 2,
//               borderRadius: 2,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               sx={{ color: '#1d1d1d', mr: 2 }}
//             >
//               15+
//             </Typography>
//             <Box>
//               <Typography fontWeight="bold" sx={{ color: '#1d1d1d' }}>
//                 Years Experience
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#444' }}>
//                 Accumsan nibh vel integer eget auctor per maecenas himenaeos.
//               </Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default WhyChooseUsSection;
"use client"

import React from 'react';
import { Box, Typography, Avatar, useTheme, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  {
    title: 'Honesty & transparency',
    description:
      'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
  },
  {
    title: 'Expert Pharmacist',
    description:
      'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
  },
  {
    title: 'Extra Discount',
    description:
      'Inceptos viverra dignissim rhoncus consectetur diam vivamus platea. Commodo lectus arcu habitant mus tempus nulla ex sociosqu eros.',
  },
];

const WhyChooseUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        px: { 
          xs: 2,   // Mobile: 16px
          sm: 4,    // Tablet: 32px
          md: 6,    // Laptop: 48px
          lg: 10    // Desktop: 80px
        },
        py: { 
          xs: 6,    // Mobile: 32px
          sm: 7,    // Tablet: 48px
          md: 8     // Laptop/Desktop: 64px
        },
        backgroundColor: '#fff',
        gap: { 
          xs: 4,    // Mobile: 32px
          sm: 6,    // Tablet: 48px
          md: 8,    // Laptop: 64px
          lg: 10    // Desktop: 80px
        },
        maxWidth: 1920,
        margin: '0 auto'
      }}
    >
      {/* Left Side - Content */}
      <Box sx={{ 
        flex: 1,
        minWidth: { md: '50%' } 
      }}>
        <Typography 
          variant="overline" 
          sx={{ 
            color: '#4f4f4f',
            fontSize: {
              xs: '0.7rem',  // Mobile
              sm: '0.75rem', // Tablet
              md: '0.8rem'   // Laptop/Desktop
            }
          }}
        >
          WHY CHOOSE US
        </Typography>
        
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          sx={{ 
            mb: 2,
            fontSize: {
              xs: '1.5rem',  // Mobile: 24px
              sm: '1.75rem', // Tablet: 28px
              md: '2rem',    // Laptop: 32px
              lg: '2.125rem' // Desktop: 34px
            },
            lineHeight: {
              xs: 1.3,
              sm: 1.4
            }
          }}
        >
          We care beyond what your doctors have prescribed
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#666', 
            mb: 4,
            fontSize: {
              xs: '0.875rem', // Mobile: 14px
              sm: '0.9375rem', // Tablet: 15px
              md: '1rem'       // Laptop/Desktop: 16px
            }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        {features.map((feature, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              mb: 3, 
              alignItems: 'flex-start',
              flexDirection: { xs: 'column', sm: 'row' } // Stack on mobile, row on larger
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#219E9D',
                width: { 
                  xs: 40,  // Mobile: 40px
                  sm: 44,  // Tablet: 44px
                  md: 48   // Laptop/Desktop: 48px
                },
                height: { 
                  xs: 40,
                  sm: 44,
                  md: 48
                },
                mr: { xs: 0, sm: 2 },
                mb: { xs: 1, sm: 0 }
              }}
            >
              <CheckCircleIcon sx={{ 
                fontSize: {
                  xs: 24,  // Mobile
                  sm: 26,  // Tablet
                  md: 30   // Laptop/Desktop
                } 
              }} />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="subtitle1" 
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: '1rem',    // Mobile: 16px
                    sm: '1.0625rem', // Tablet: 17px
                    md: '1.125rem'  // Laptop/Desktop: 18px
                  }
                }}
              >
                {feature.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#555', 
                  mt: 0.5,
                  fontSize: {
                    xs: '0.8125rem', // Mobile: 13px
                    sm: '0.875rem'    // Tablet+: 14px
                  }
                }}
              >
                {feature.description}
              </Typography>
              {index < features.length - 1 && (
                <Box sx={{ 
                  borderBottom: '1px dashed #ccc', 
                  mt: 2, 
                  mb: 2,
                  ml: { xs: 0, sm: '56px' } // Align with text on larger screens
                }} />
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right Side - Image */}
      <Box sx={{ 
        flex: 1,
        position: 'relative',
        height: {
          xs: '300px', // Mobile
          sm: '400px', // Tablet
          md: '500px', // Laptop
          lg: '600px'  // Desktop
        },
        mt: {
          xs: 2,      // Mobile
          sm: 0        // Tablet+ no top margin
        }
      }}>
        <Box
          component="img"
          src="/whywechooseus.jpg"
          alt="Pharmacist"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
            boxShadow: 3,
          }}
        />

        {/* Experience Badge - Responsive Positioning */}
        <Box
          sx={{
            position: 'absolute',
            bgcolor: '#dce286',
            top: {
              xs: 'auto',    // Mobile
              sm: 'auto',    // Tablet
              md: '440px',   // Laptop
              lg: '510px'    // Desktop
            },
            bottom: {
              xs: '-40px',   // Mobile
              sm: '-50px',   // Tablet
              md: 'auto'      // Laptop/Desktop
            },
            right: {
              xs: '20px',     // Mobile
              sm: '0px',    // Tablet
              md: '-40px',    // Laptop
              lg: '-60px'     // Desktop
            },
            left: {
              xs: '20px',     // Mobile
              sm: 'auto'      // Tablet+
            },
            px: {
              xs: 1.5,       // Mobile: 12px
              sm: 2,         // Tablet: 16px
              md: 2,        // Laptop: 16px
              lg: 2         // Desktop: 16px
            },
            py: {
              xs: 2,         // Mobile: 16px
              sm: 3,         // Tablet: 24px
              md: 4          // Laptop/Desktop: 32px
            },
            borderRadius: 2,
            maxWidth: {
              xs: 'calc(100% - 40px)', // Mobile
              sm: '390px',             // Tablet
              md: '350px',             // Laptop
              lg: '400px'              // Desktop
            },
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ 
              color: '#1d1d1d', 
              mr: 2,
              fontSize: {
                xs: '1.5rem',  // Mobile: 24px
                sm: '1.75rem',  // Tablet: 28px
                md: '2rem',    // Laptop: 32px
                lg: '2.125rem'  // Desktop: 34px
              }
            }}
          >
            15+
          </Typography>

          <Box>
            <Typography 
              fontWeight="bold" 
              sx={{ 
                color: '#1d1d1d',
                fontSize: {
                  xs: '0.875rem',  // Mobile: 14px
                  sm: '0.9375rem', // Tablet: 15px
                  md: '1rem'       // Laptop/Desktop: 16px
                }
              }}
            >
              Years Experience
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#444',
                fontSize: {
                  xs: '0.75rem',   // Mobile: 12px
                  sm: '0.8125rem', // Tablet: 13px
                  md: '0.875rem'  // Laptop/Desktop: 14px
                }
              }}
            >
              Accumsan nibh vel integer eget auctor per maecenas himenaeos.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUsSection;
