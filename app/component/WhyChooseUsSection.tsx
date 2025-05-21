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
          xs: 2,    
          sm: 4,    
          md: 6,     
          lg: 10    
        },
        py: { 
          xs: 6,   
          sm: 7,    
          md: 8     
        },
        backgroundColor: '#fff',
        gap: { 
          xs: 4,   
          sm: 6,   
          md: 8,   
          lg: 10   
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
              xs: '0.7rem', 
              sm: '0.75rem', 
              md: '0.8rem'  
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
              xs: '1.5rem',  
              sm: '1.75rem', 
              md: '2rem',    
              lg: '2.125rem'
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
              xs: '0.875rem',
              sm: '0.9375rem', 
              md: '1rem'       
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
              flexDirection: { xs: 'column', sm: 'row' } 
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#219E9D',
                width: { 
                  xs: 40,  
                  sm: 44, 
                  md: 48   
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
                  xs: 24,  
                  sm: 26,  
                  md: 30   
                } 
              }} />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="subtitle1" 
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: '1rem',    
                    sm: '1.0625rem', 
                    md: '1.125rem' 
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
                    xs: '0.8125rem', 
                    sm: '0.875rem'    
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
                  ml: { xs: 0, sm: '56px' } 
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
          xs: '300px', 
          sm: '400px', 
          md: '500px', 
          lg: '600px'  
        },
        mt: {
          xs: 2,   
          sm: 0        
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
              xs: 'auto',    
              sm: 'auto',   
              md: '440px',   
              lg: '510px'    
            },
            bottom: {
              xs: '-40px',   
              sm: '-50px',   
              md: 'auto'      
            },
            right: {
              xs: '20px',    
              sm: '0px',    
              md: '-40px',    
              lg: '-60px'     
            },
            left: {
              xs: '20px',    
              sm: 'auto'      
            },
            px: {
              xs: 1.5,       
              sm: 2,        
              md: 2,         
              lg: 2          
            },
            py: {
              xs: 2,          
              sm: 3,          
              md: 4          
            },
            borderRadius: 2,
            maxWidth: {
              xs: 'calc(100% - 40px)',  
              sm: '390px',             
              md: '350px',             
              lg: '400px'               
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
                xs: '1.5rem',   
                sm: '1.75rem',   
                md: '2rem',     
                lg: '2.125rem'   
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
                  xs: '0.875rem',   
                  sm: '0.9375rem',  
                  md: '1rem'        
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
                  xs: '0.75rem',    
                  sm: '0.8125rem',  
                  md: '0.875rem'   
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
