// // // app/components/HeroBanner.tsx
// 'use client';

// import { Box, Button, Typography, Container } from '@mui/material';
// import Image from 'next/image';

// export default function HeroBanner() {
//   return (
//     <Box pl={3} pr={3}>
//       <Box
//         sx={{
//           position: 'relative',
//           overflow: 'hidden',
//           borderRadius: 3,
//           height:"100vh"
//         }}
//       >
//         {/* Background Image */}
//         <Box
//           sx={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             zIndex: 1,
//           }}
//         >
//           <Image
//             src="/Doctor-bg.jpg"
//             alt="Pharmacy background"
//             fill
//             style={{ objectFit: 'cover' }}
//           />
//           {/* Overlay */}
//           <Box
//             sx={{
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               bgcolor: 'rgba(49, 111, 111, 0.7)', // teal overlay
//             }}
//           />
//         </Box>

//         {/* Content */}
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: 'relative',
//             zIndex: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             minHeight: { xs: 400, md: 500 },
//             // py: 4,
//           }}
//         >
//           {/* Text Section */}
//           <Box maxWidth={500}>
//             <Typography variant="h3" fontWeight="bold" color="white" gutterBottom>
//               Delivering Care, <br />
//               One Prescription <br />
//               At A Time
//             </Typography>
//             <Typography variant="body1" color="white" mb={4}>
//               Aenean gravida nibh consectetur mollis montes mi ridiculus vitae ac
//               suspendisse sollicitudin.
//             </Typography>

//             <Box display="flex" gap={2}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: '#cdd06c',
//                   color: 'black',
//                   fontWeight: 600,
//                   px: 3,
//                   '&:hover': { bgcolor: '#bcbf5e' },
//                 }}
//               >
//                 Shop Online
//               </Button>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   color: 'white',
//                   borderColor: 'white',
//                   fontWeight: 600,
//                   px: 3,
//                   '&:hover': {
//                     borderColor: '#ddd',
//                     bgcolor: 'rgba(255,255,255,0.1)',
//                   },
//                 }}
//               >
//                 Consultation
//               </Button>
//             </Box>
//           </Box>

//           {/* Doctor Image */}
//           <Box sx={{ position: 'relative', width: 480, height: 680, mt:2, display: { xs: 'none', md: 'block' } }}>
//             <Image
//               src="/doctor.png"
//               alt="Doctors"
//               fill
//               style={{ objectFit: 'cover' }}
//               priority
//             />
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }


'use client';

import { Box, Button, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export default function HeroBanner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box px={isMobile ? 2 : 3}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          height: isMobile ? '80vh' : '100vh',
          maxHeight: isMobile ? '800px' : 'none'
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Image
            src="/Doctor-bg.jpg"
            alt="Pharmacy background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(49, 111, 111, 0.7)', // teal overlay
            }}
          />
        </Box>

        {/* Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            height: '100%',
            pt: isMobile ? 8 : 0,
            pb: isMobile ? 4 : 0,
          }}
        >
          {/* Text Section */}
          <Box maxWidth={isMobile ? '100%' : isTablet ? 400 : 500}>
            <Typography 
              variant={isMobile ? 'h4' : isTablet ? 'h3' : 'h3'} 
              fontWeight="bold" 
              color="white" 
              gutterBottom
              sx={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                lineHeight: 1.2
              }}
            >
              Delivering Care, <br />
              One Prescription <br />
              At A Time
            </Typography>
            <Typography 
              variant="body1" 
              color="white" 
              mb={4}
              sx={{
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}
            >
              Aenean gravida nibh consectetur mollis montes mi ridiculus vitae ac
              suspendisse sollicitudin.
            </Typography>

            <Box display="flex" gap={2} flexDirection={isMobile ? 'column' : 'row'}>
              <Button
                variant="contained"
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  bgcolor: '#cdd06c',
                  color: 'black',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': { bgcolor: '#bcbf5e' },
                }}
              >
                Shop Online
              </Button>
              <Button
                variant="outlined"
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': {
                    borderColor: '#ddd',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Consultation
              </Button>
            </Box>
          </Box>

          {/* Doctor Image - Hidden on mobile, smaller on tablet */}
          {!isMobile && (
            <Box sx={{ 
              position: 'relative', 
              width: isTablet ? 300 : 480, 
              height: isTablet ? 450 : 680, 
              mt: isTablet ? 4 : 2,
              alignSelf: isTablet ? 'flex-end' : 'center'
            }}>
              <Image
                src="/doctor.png"
                alt="Doctors"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}


// 'use client';

// import { Box, Button, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
// import Image from 'next/image';

// export default function HeroBanner() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
//   return (
//     <Box pl={{ xs: 1, sm: 2, md: 3 }} pr={{ xs: 1, sm: 2, md: 3 }}>
//       <Box
//         sx={{
//           position: 'relative',
//           overflow: 'hidden',
//           borderRadius: { xs: 2, md: 3 },
//           height: {
//             xs: '90vh', // Slightly smaller on mobile
//             sm: '95vh', // Almost full on tablets
//             md: '100vh' // Full height on desktop
//           }
//         }}
//       >
//         {/* Background Image */}
//         <Box
//           sx={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             zIndex: 1,
//           }}
//         >
//           <Image
//             src="/Doctor-bg.jpg"
//             alt="Pharmacy background"
//             fill
//             sizes="100vw"
//             priority
//             style={{ objectFit: 'cover' }}
//           />
//           {/* Overlay */}
//           <Box
//             sx={{
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               bgcolor: 'rgba(49, 111, 111, 0.7)', // teal overlay
//             }}
//           />
//         </Box>
        
//         {/* Content */}
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: 'relative',
//             zIndex: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             alignItems: 'center',
//             justifyContent: { xs: 'center', md: 'space-between' },
//             minHeight: { 
//               xs: 450, 
//               sm: 500, 
//               md: 500 
//             },
//             height: '100%',
//             pt: { xs: 8, sm: 4, md: 0 },
//             pb: { xs: isMobile && !isTablet ? 10 : 4 },
//           }}
//         >
//           {/* Text Section */}
//           <Box 
//             maxWidth={{ xs: '90%', sm: 450, md: 500 }}
//             textAlign={{ xs: 'center', md: 'left' }}
//             mt={{ xs: 2, md: 0 }}
//           >
//             <Typography 
//               variant={isMobile ? "h4" : "h3"} 
//               fontWeight="bold" 
//               color="white" 
//               gutterBottom
//             >
//               Delivering Care, <br />
//               One Prescription <br />
//               At A Time
//             </Typography>
//             <Typography 
//               variant="body1" 
//               color="white" 
//               mb={4}
//               fontSize={{ xs: '0.9rem', sm: '1rem' }}
//             >
//               Aenean gravida nibh consectetur mollis montes mi ridiculus vitae ac
//               suspendisse sollicitudin.
//             </Typography>
            
//             <Box 
//               display="flex" 
//               gap={2}
//               justifyContent={{ xs: 'center', md: 'flex-start' }}
//               flexDirection={{ xs: isMobile ? 'column' : 'row', md: 'row' }}
//               width={{ xs: isMobile ? '100%' : 'auto' }}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: '#cdd06c',
//                   color: 'black',
//                   fontWeight: 600,
//                   px: 3,
//                   py: { xs: 1.2, md: 1 },
//                   width: { xs: isMobile ? '100%' : 'auto' },
//                   '&:hover': { bgcolor: '#bcbf5e' },
//                 }}
//               >
//                 Shop Online
//               </Button>
//               <Button
//                 variant="outlined"
//                 sx={{
//                   color: 'white',
//                   borderColor: 'white',
//                   fontWeight: 600,
//                   px: 3,
//                   py: { xs: 1.2, md: 1 },
//                   width: { xs: isMobile ? '100%' : 'auto' },
//                   '&:hover': {
//                     borderColor: '#ddd',
//                     bgcolor: 'rgba(255,255,255,0.1)',
//                   },
//                 }}
//               >
//                 Consultation
//               </Button>
//             </Box>
//           </Box>
          
//           {/* Doctor Image */}
//           <Box 
//             sx={{ 
//               position: 'relative',
//               width: { sm: 350, md: 420, lg: 480 },
//               height: { sm: 500, md: 600, lg: 680 },
//               mt: { xs: 4, sm: 2, md: 2 },
//               display: { xs: 'none', sm: 'block' },
//               alignSelf: { sm: 'flex-end', md: 'flex-end' },
//               mb: { sm: -1 }, // Slight adjustment to make image appear to come from bottom
//             }}
//           >
//             <Image
//               src="/doctor.png"
//               alt="Doctors"
//               fill
//               sizes="(max-width: 600px) 0vw, (max-width: 960px) 350px, 480px"
//               style={{ 
//                 objectFit: 'cover',
//                 objectPosition: 'bottom'
//               }}
//               priority
//             />
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }