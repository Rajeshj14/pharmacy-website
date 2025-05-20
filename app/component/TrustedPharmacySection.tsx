// "use client";

// import { Box, Typography, Button } from "@mui/material";
// // import CheckIcon from "@mui/icons-mate/rial/Check";
// import Image from "next/image";
// import DoneAllIcon from '@mui/icons-material/DoneAll';


// const features = [
//     "Green Lab",
//     "General Medicine",
//     "Free Delivery",
//     "Pharmacy Support",
// ];

// const logos = [
//     "/Brand-1.png",
//     "/Brand-2.png",
//     "/Brand-3.png",
//     "/Brand-4.png",
//     "/Brand-5.png",
// ];

// const TrustedPharmacySection = () => {
//     return (
//         <Box sx={{ p: 4 }}>
//             {/* Main Content */}
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column", md: "row" },
//                     alignItems: "center",
//                     gap: 10,
//                     mb: 6,
//                 }}
//             >
//                 {/* Left: Image with features box */}
//                 <Box>
//                     <Box sx={{ position: "relative" }}>
//                         <Image
//                             src="/doctor1.jpg"
//                             alt="Pharmacy Doctor"
//                             width={600}
//                             height={400}
//                             style={{ borderRadius: 12 }}
//                         />

//                         {/* Overlay Feature Card */}
//                         <Box
//                             sx={{
//                                 position: "absolute",
//                                 bottom: -20,
//                                 left: -16,
//                                 backgroundColor: "#2bb4b1",
//                                 color: "white",
//                                 p: 2.5,
//                                 borderRadius: 2,
//                                 boxShadow: 4,
//                                 width: 220,
//                             }}
//                         >
//                             {features.map((item, i) => (
//                                 <Box
//                                     key={i}
//                                     sx={{
//                                         display: "flex",
//                                         alignItems: "center",
//                                         mb: i !== features.length - 1 ? 1.5 : 0,
//                                     }}
//                                 >
//                                     <DoneAllIcon sx={{ fontSize: 26, color: "#C2C375", mr: 1 }} />
//                                     <Typography
//                                         variant="body2"
//                                         sx={{ fontSize: 14, fontWeight: 500, color: "#fff" }}
//                                     >
//                                         {item}
//                                     </Typography>
//                                 </Box>
//                             ))}
//                         </Box>
//                     </Box>
//                 </Box>

//                 {/* Right: Text Content */}
//                 <Box maxWidth={550}>
//                     <Typography
//                         variant="caption"
//                         fontSize={17}
//                         sx={{ textTransform: "uppercase", color: "#2F6C6D" }}
//                     >
//                         Who We Are
//                     </Typography>
//                     <Typography
//                         variant="h4"
//                         sx={{ fontWeight: 700, my: 2, lineHeight: 1.3 }}
//                     >
//                         We Are The Most Trusted <br /> Pharmacy In This Town
//                     </Typography>
//                     <Typography variant="body1" sx={{ color: "#6c757d", mb: 2 }}>
//                         Phasellus eu duis parturient ut ipsum. Nibh natoque platea venenatis
//                         egestas vel litora neque.
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: "#6c757d", mb: 3 }}>
//                         Ullamcorper magna euismod aliquam dui at mollis risus imperdiet ac.
//                         Lorem consequat egestas si hac venenatis pharetra per metus arcu sem.
//                         Sodales duis eget bibendum sapien imperdiet si conubia nullam.
//                     </Typography>
//                     <Button
//                         variant="contained"
//                         sx={{ backgroundColor: "#47A2A3", textTransform: "none" ,padding:'10px 30px',borderRadius:2}}
//                     >
//                         More About Us
//                     </Button>
//                 </Box>
//             </Box>

//             {/* Partner Logos */}
//             <Box mr={3} ml={3}
//                 sx={{

//                     overflow: "hidden",
//                     whiteSpace: "nowrap",
//                     mt: 4,
//                     position: "relative",
//                     padding: 5
//                 }}
//             >
//                 <Box
//                     sx={{
//                         display: "inline-flex",
//                         animation: "scrollLogos 30s linear infinite",
//                         alignItems: "center",
//                         gap: 6,
//                         "&:hover":{
//                             animationPlayState:"paused"
//                         },
//                     }}
//                 >
//                     {[...logos, ...logos].map((src, i) => (
//                         <Image
//                             key={i}
//                             src={src}
//                             alt={`logo-${i}`}
//                             width={250}
//                             height={220}
//                             style={{ objectFit: "contain" }}
//                         />
//                     ))}
//                 </Box>

//                 {/* Add Keyframes Globally */}
//                 <style jsx global>{`
//     @keyframes scrollLogos {
//       0% {
//         transform: translateX(0%);
//       }
//       100% {
//         transform: translateX(-50%);
//       }
//     }
//   `}</style>
//             </Box>

//         </Box>
//     );
// };

// export default TrustedPharmacySection;


"use client";

import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const features = [
    "Green Lab",
    "General Medicine",
    "Free Delivery",
    "Pharmacy Support",
];

const logos = [
    "/Brand-1.png",
    "/Brand-2.png",
    "/Brand-3.png",
    "/Brand-4.png",
    "/Brand-5.png",
];

const TrustedPharmacySection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box sx={{ 
            px: { xs: 2, sm: 3, md: 4, lg: 6 }, 
            py: { xs: 3, sm: 4, md: 6 },
            maxWidth: '1800px',
            mx: 'auto'
        }}>
            {/* Main Content */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    gap: { xs: 4, md: 6, lg: 10 },
                    mb: { xs: 4, md: 6 },
                }}
            >
                {/* Left: Image with features box */}
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    position: 'relative'
                }}>
                    <Box sx={{ 
                        position: "relative",
                        width: '100%',
                        aspectRatio: '4/3'
                    }}>
                        <Image
                            src="/doctor1.jpg"
                            alt="Pharmacy Doctor"
                            fill
                            style={{ 
                                borderRadius: '12px',
                                objectFit: 'cover'
                            }}
                            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />

                        {/* Overlay Feature Card */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: { xs: -16, sm: -20 },
                                left: { xs: 8, sm: -16 },
                                right: { xs: 8, sm: 'auto' },
                                backgroundColor: "#2bb4b1",
                                color: "white",
                                p: { xs: 1.5, sm: 2.5 },
                                borderRadius: 2,
                                boxShadow: 4,
                                width: { xs: 'auto', sm: 220 },
                                maxWidth: '100%',
                                zIndex: 2
                            }}
                        >
                            {features.map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        mb: i !== features.length - 1 ? { xs: 1, sm: 1.5 } : 0,
                                    }}
                                >
                                    <DoneAllIcon sx={{ 
                                        fontSize: { xs: 20, sm: 26 }, 
                                        color: "#C2C375", 
                                        mr: 1 
                                    }} />
                                    <Typography
                                        variant="body2"
                                        sx={{ 
                                            fontSize: { xs: 12, sm: 14 }, 
                                            fontWeight: 500, 
                                            color: "#fff" 
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Right: Text Content */}
                <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    maxWidth: { md: 550 },
                    mt: { xs: 4, md: 0 }
                }}>
                    <Typography
                        variant="caption"
                        sx={{ 
                            fontSize: { xs: 14, sm: 17 }, 
                            textTransform: "uppercase", 
                            color: "#2F6C6D",
                            fontWeight: 500
                        }}
                    >
                        Who We Are
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ 
                            fontWeight: 700, 
                            my: 2, 
                            lineHeight: 1.3,
                            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.125rem' }
                        }}
                    >
                        We Are The Most Trusted {!isMobile && <br />} Pharmacy In This Town
                    </Typography>
                    <Typography variant="body1" sx={{ 
                        color: "#6c757d", 
                        mb: 2,
                        fontSize: { xs: '0.9375rem', sm: '1rem' }
                    }}>
                        Phasellus eu duis parturient ut ipsum. Nibh natoque platea venenatis
                        egestas vel litora neque.
                    </Typography>
                    <Typography variant="body2" sx={{ 
                        color: "#6c757d", 
                        mb: 3,
                        fontSize: { xs: '0.875rem', sm: '0.9375rem' }
                    }}>
                        Ullamcorper magna euismod aliquam dui at mollis risus imperdiet ac.
                        Lorem consequat egestas si hac venenatis pharetra per metus arcu sem.
                        Sodales duis eget bibendum sapien imperdiet si conubia nullam.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ 
                            backgroundColor: "#47A2A3", 
                            textTransform: "none",
                            padding: '10px 30px',
                            borderRadius: 2,
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            '&:hover': {
                                backgroundColor: "#3a8a8b"
                            }
                        }}
                    >
                        More About Us
                    </Button>
                </Box>
            </Box>

            {/* Partner Logos */}
            <Box
                sx={{
                    mt: { xs: 3, sm: 4, md: 6 },
                    position: "relative",
                    width: '100%',
                    overflow: "hidden",
                    py: { xs: 2, sm: 3, md: 4 },
                    px: { xs: 0, sm: 3 }
                }}
            >
                <Box
                    sx={{
                        display: "inline-flex",
                        animation: "scrollLogos 30s linear infinite",
                        alignItems: "center",
                        gap: { xs: 4, sm: 6 },
                        "&:hover": {
                            animationPlayState: "paused"
                        },
                    }}
                >
                    {[...logos, ...logos].map((src, i) => (
                        <Box key={i} sx={{
                            width: { xs: 120, sm: 150, md: 180, lg: 200 },
                            height: { xs: 60, sm: 80, md: 100 },
                            position: 'relative',
                            flexShrink: 0
                        }}>
                            <Image
                                src={src}
                                alt={`logo-${i}`}
                                fill
                                style={{ 
                                    objectFit: "contain",
                                    filter: 'grayscale(100%)',
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.7';
                                }}
                                sizes="(max-width: 600px) 120px, (max-width: 900px) 150px, (max-width: 1200px) 180px, 200px"
                            />
                        </Box>
                    ))}
                </Box>

                {/* Gradient overlays for better UX */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '100px',
                    background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                    zIndex: 1,
                    display: { xs: 'none', sm: 'block' }
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100px',
                    background: 'linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                    zIndex: 1,
                    display: { xs: 'none', sm: 'block' }
                }} />

                {/* Add Keyframes Globally */}
                <style jsx global>{`
                    @keyframes scrollLogos {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}</style>
            </Box>
        </Box>
    );
};

export default TrustedPharmacySection;