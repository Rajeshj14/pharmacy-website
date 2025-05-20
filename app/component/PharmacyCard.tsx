// import React from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   CardContent,
//   IconButton,
// } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const team = [
//   {
//     name: "Vivienne Lewis",
//     role: "Founder",
//     image: "/pharmacist-1.jpg",
//     socials: true,
//   },
//   {
//     name: "William Painter",
//     role: "Head Office Manager",
//     image: "/pharmacist-5.jpg",
//     socials: true,
//   },
//   {
//     name: "Sarah Barnes",
//     role: "Warehouse Manager",
//     image: "/pharmacist-6.jpg",
//     socials: true,
//   },
// ];

// const iconColors = {
//   Facebook: "#47A2A3",
//   Twitter: "#47A2A3",
//   Pinterest: "#47A2A3",
//   LinkedIn: "#47A2A3",
// };

// const TeamCard = ({ member }) => (
//   <Box
//     sx={{
//       width: 280,

//       borderRadius: "16px",
//       overflow: "hidden",
//       boxShadow: 3,
//       backgroundColor: "#fff",
//       mx: 1.5,
//       position: "relative",
//       transition: "transform 0.3s ease",
//       "&:hover": {
//         transform: "translateY(-8px)",
//       },
//       "&:hover .overlay": {
//         opacity: 1,
//       },
//     }}
//   >
//     <Box sx={{ position: "relative" }}>
//       <CardMedia
//         component="img"
//         height="100"
//         image={member.image}
//         alt={member.name}
//         sx={{ width: "100%", objectFit: "cover" }}
//       />
//       {member.socials && (
//         <Box
//           className="overlay"
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 60, 60, 0.55)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 1.2,
//             opacity: 0,
//             transition: "opacity 0.3s ease",
//             zIndex: 2,
//           }}
//         >
//           <HoverIcon icon={<FacebookIcon />} color={iconColors.Facebook} />
//           <HoverIcon icon={<TwitterIcon />} color={iconColors.Twitter} />
//           <HoverIcon icon={<PinterestIcon />} color={iconColors.Pinterest} />
//           <HoverIcon icon={<LinkedInIcon />} color={iconColors.LinkedIn} />
//         </Box>
//       )}
//     </Box>
//     <CardContent sx={{ textAlign: "center", p: 2 }}>
//       <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00796b" }}>
//         {member.name}
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         {member.role}
//       </Typography>
//     </CardContent>
//   </Box>
// );

// // Hoverable Icon with animation and background color change
// const HoverIcon = ({ icon, color }) => (
//   <IconButton
//     sx={{
//       backgroundColor: "#fff",
//       transition: "transform 0.3s, background-color 0.3s, color 0.3s",
//       color: color,
//       "&:hover": {
//         transform: "translateY(-6px)",
//         backgroundColor: color,
//         color: "#fff",
//       },
//     }}
//   >
//     {icon}
//   </IconButton>
// );

// export default function MeetOurPharmacist() {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#f5fafd",
//         py: 10,
//         px: 6,
//       }}
//     >
//       <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//         {/* Left Text Section */}
//         <Box sx={{ flex: "0 0 30%", pr: 4 }}>
//           <Typography variant="overline" color="text.secondary">
//             MEET OUR PHARMACIST
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{ fontWeight: "bold", mt: 1, mb: 2, lineHeight: 1.2 }}
//           >
//             Your Partner in <br />
//             Health and Healing
//           </Typography>
//           <Typography variant="body1" color="text.secondary" mb={2}>
//             Natoque fusce et orci molestie condimentum montes cras ex mauris
//             finibus in. Odio iaculis sed nec maecenas lobortis arcu.
//           </Typography>
//           <Box sx={{ height: "3px", width: "60px", bgcolor: "#cddc39" }} />
//         </Box>

//         {/* Cards Section */}
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "stretch",
//           }}
//         >
//           {team.map((member, idx) => (
//             <TeamCard key={idx} member={member} />
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }
"use client"
import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Container
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const team = [
  {
    name: "Vivienne Lewis",
    role: "Founder",
    image: "/pharmacist-1.jpg",
    socials: true,
  },
  {
    name: "William Painter",
    role: "Head Office Manager",
    image: "/pharmacist-5.jpg",
    socials: true,
  },
  {
    name: "Sarah Barnes",
    role: "Warehouse Manager",
    image: "/pharmacist-6.jpg",
    socials: true,
  },
];

const iconColors = {
  Facebook: "#47A2A3",
  Twitter: "#47A2A3",
  Pinterest: "#47A2A3",
  LinkedIn: "#47A2A3",
};

const TeamCard = ({ member }) => (
  <Box
    sx={{
      width: "100%",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: 3,
      backgroundColor: "#fff",
      position: "relative",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
      },
      "&:hover .overlay": {
        opacity: 1,
      },
    }}
  >
    <Box sx={{ position: "relative", height: { xs: 314, sm: 240, md: 280 } }}>
      <CardMedia
        component="img"
        height="100%"
        image={member.image}
        alt={member.name}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {member.socials && (
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 60, 60, 0.55)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.2,
            opacity: 0,
            transition: "opacity 0.3s ease",
            zIndex: 2,
          }}
        >
          <HoverIcon icon={<FacebookIcon />} color={iconColors.Facebook} />
          <HoverIcon icon={<TwitterIcon />} color={iconColors.Twitter} />
          <HoverIcon icon={<PinterestIcon />} color={iconColors.Pinterest} />
          <HoverIcon icon={<LinkedInIcon />} color={iconColors.LinkedIn} />
        </Box>
      )}
    </Box>
    <CardContent sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#00796b" }}>
        {member.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {member.role}
      </Typography>
    </CardContent>
  </Box>
);

const HoverIcon = ({ icon, color }) => (
  <IconButton
    sx={{
      backgroundColor: "#fff",
      transition: "transform 0.3s, background-color 0.3s, color 0.3s",
      color: color,
      "&:hover": {
        transform: "translateY(-6px)",
        backgroundColor: color,
        color: "#fff",
      },
    }}
  >
    {icon}
  </IconButton>
);

export default function MeetOurPharmacist() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        backgroundColor: "#f5fafd",
        py: { xs: 5, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        {/* Desktop Layout - Side by side with 3 cards in one row */}
        {isDesktop && (
          <Box sx={{ 
            display: "flex", 
            alignItems: "flex-start",
            gap: 4
          }}>
            {/* Left Text Section */}
            <Box sx={{ 
              flex: "0 0 30%",
              maxWidth: 400,
              pt: 2
            }}>
              <Typography variant="overline" color="text.secondary">
                MEET OUR PHARMACIST
              </Typography>
              <Typography
                variant="h4"
                sx={{ 
                  fontWeight: "bold", 
                  mt: 1, 
                  mb: 2, 
                  lineHeight: 1.2 
                }}
              >
                Your Partner in <br />
                Health and Healing
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Natoque fusce et orci molestie condimentum montes cras ex mauris
                finibus in. Odio iaculis sed nec maecenas lobortis arcu.
              </Typography>
              <Box sx={{ height: "3px", width: "60px", bgcolor: "#cddc39" }} />
            </Box>

            {/* Cards Section - Fixed 3 in a row */}
            <Box
              sx={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 3,
              }}
            >
              {team.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </Box>
          </Box>
        )}

        {/* Tablet Layout - 3 cards in one row */}
        {isTablet && (
          <Box>
            {/* Text Section */}
            <Box sx={{ 
              mb: 4, 
              textAlign: "center",
              maxWidth: 600,
              mx: "auto"
            }}>
              <Typography variant="overline" color="text.secondary">
                MEET OUR PHARMACIST
              </Typography>
              <Typography
                variant="h4"
                sx={{ 
                  fontWeight: "bold", 
                  mt: 1, 
                  mb: 2, 
                  lineHeight: 1.2 
                }}
              >
                Your Partner in Health and Healing
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={2}>
                Natoque fusce et orci molestie condimentum montes cras ex mauris
                finibus in. Odio iaculis sed nec maecenas lobortis arcu.
              </Typography>
              <Box sx={{ 
                height: "3px", 
                width: "60px", 
                bgcolor: "#cddc39", 
                mx: "auto" 
              }} />
            </Box>

            {/* Cards in one row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
              }}
            >
              {team.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </Box>
          </Box>
        )}

        {/* Mobile Layout - Stacked */}
        {isMobile && (
          <Box>
            {/* Text Section */}
            <Box sx={{ 
              mb: 4, 
              textAlign: "center",
              px: 1
            }}>
              <Typography variant="overline" color="text.secondary">
                MEET OUR PHARMACIST
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  fontWeight: "bold", 
                  mt: 1, 
                  mb: 2, 
                  lineHeight: 1.2 
                }}
              >
                Your Partner in Health and Healing
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Natoque fusce et orci molestie condimentum montes cras ex mauris
                finibus in. Odio iaculis sed nec maecenas lobortis arcu.
              </Typography>
              <Box sx={{ 
                height: "3px", 
                width: "60px", 
                bgcolor: "#cddc39", 
                mx: "auto" 
              }} />
            </Box>

            {/* Cards stacked vertically */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              {team.map((member, idx) => (
                <Box key={idx} sx={{ width: "100%", maxWidth: "280px" }}>
                  <TeamCard member={member} />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}