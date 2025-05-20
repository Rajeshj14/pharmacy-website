// "use client"

// import React, { useState, useRef } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Card,
//   Snackbar,
//   Alert
// } from '@mui/material';
// import { Clock, CheckCircle, Phone } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// export default function MembershipForm() {
//   const form = useRef<HTMLFormElement>(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     address: ''
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitting, setSubmitting] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Clear error when user types
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validate = (): boolean => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
//     if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
//     if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
//     if (!formData.address.trim()) newErrors.address = 'Address is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setSubmitting(true);

//     try {
//       console.log('EmailJS Config:', {
//         serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//         templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//         publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
//       });
//       // First send the email using EmailJS
//       if (!form.current) throw new Error('Form reference not found');

//       const emailJsResponse = await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
//         form.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
//       );

//       if (emailJsResponse.status !== 200) {
//         throw new Error('Failed to send email notification');
//       }

//       // Then submit to your API
//       const apiResponse = await fetch('/api/memberships', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await apiResponse.json();

//       if (!apiResponse.ok) {
//         throw new Error(data.error || 'Failed to submit membership');
//       }

//       // Show success
//       setSnackbarMessage('Form submitted successfully! We will contact you soon.');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);

//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         phone: '',
//         email: '',
//         address: ''
//       });

//     } catch (error: any) {
//       console.error('Submission error:', error);

//       let errorMessage = 'Failed to submit form. Please try again.';
//       if (error instanceof Error) {
//         errorMessage = error.message;
//       } else if (typeof error === 'string') {
//         errorMessage = error;
//       } else if (error?.text) {
//         errorMessage = error.text;
//       }

//       setSnackbarMessage(errorMessage);
//       setSnackbarSeverity('error');
//       setOpenSnackbar(true);
//     } finally {
//       setSubmitting(false);
//     }
//   };



//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Box display={'flex'} flexWrap={'wrap'}>
//     <Box
//       sx={{
//         marginLeft: '330px',
//         width: '75%',
//         minHeight: '100vh',
//         position: 'relative',
//         backgroundColor: '#56a8a8',
//         backgroundImage: 'url("/flat-lay-medical.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(86, 168, 168, 0.9)',
//           zIndex: 1,
//         },
//       }}
//     >
//       <Grid
//         container
//         sx={{
//           position: 'relative',
//           maxWidth: 1200,
//           margin: '0 auto',
//           zIndex: 2,
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             position: 'absolute',
//             top: '45%',
//             left: -330,
//             height: '80%',
//             transform: 'translateY(-50%)',
//             width: { xs: '100%', sm: 670 },
//             m: { xs: 2, sm: 4 },
//             p: 4,
//             borderRadius: 2,
//             backgroundColor: '#fff',
//             zIndex: 3,
//           }}
//         >
//           <Typography variant="h5" gutterBottom fontWeight="bold">
//             Complete the form below
//           </Typography>
//           <Typography variant="body2" color="text.secondary" paragraph>
//             Eleifend cubilia parturient id ridiculus lacus nisl dui dictum maximus.
//           </Typography>

//           <Box
//             component="form"
//             ref={form}
//             mt={2}
//             onSubmit={handleSubmit}
//           >
//             <Grid container spacing={2} display={'flex'} flexDirection={'column'}>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   name="firstName"
//                   label="First Name"
//                   size="small"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   name="lastName"
//                   label="Last Name"
//                   size="small"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   error={!!errors.lastName}
//                   helperText={errors.lastName}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   name="phone"
//                   label="Phone"
//                   size="small"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   error={!!errors.phone}
//                   helperText={errors.phone}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   name="email"
//                   label="Email"
//                   size="small"
//                   value={formData.email}
//                   onChange={handleChange}
//                   error={!!errors.email}
//                   helperText={errors.email}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   name="address"
//                   label="Address"
//                   multiline
//                   rows={4}
//                   value={formData.address}
//                   onChange={handleChange}
//                   error={!!errors.address}
//                   helperText={errors.address}
//                 />
//               </Grid>
//               {/* Add hidden fields for EmailJS if needed */}
//               <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
//               <input type="hidden" name="reply_to" value={formData.email} />
//               <input type="hidden" name="message" value={`Phone: ${formData.phone}\nAddress: ${formData.address}`} />
//               <Grid item xs={12}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   type="submit"
//                   disabled={submitting}
//                   sx={{ backgroundColor: '#56a8a8', mt: 1 }}
//                 >
//                   {submitting ? 'Submitting...' : 'Submit'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Paper>
//         {/* Right content */}
//         <Grid item xs={12}>
//           <Box
//             sx={{
//               ml: { xs: 0, md: '450px' },
//               py: 10,
//               color: 'white',
//               zIndex: 2,
//               position: 'relative',
//             }}
//           >
//             <Typography variant="subtitle2" gutterBottom fontWeight="bold">
//               BECOME A MEMBER
//             </Typography>
//             <Typography variant="h4" fontWeight="bold" mb={2}>
//               We assure customer satisfaction<br /> with personal care
//             </Typography>
//             <Typography maxWidth="90%" mb={4}>
//               Enim scelerisque ut in vestibulum elit ridiculus laoreet torquent. Sodales euismod porta finibus phasellus justo inceptos nisl erat.
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               Benefits of our membership program:
//             </Typography>
//             <List>
//               {[
//                 'Suscipit sagittis enim inceptos non feugiat rhoncus',
//                 'Fermentum mattis ridiculus finibus lacus phasellus viverra dui.',
//                 'Sociosqu volutpat class ipsum adipiscing mauris.',
//                 'Magna bibendum lacinia ullamcorper convallis quis mattis.'
//               ].map((text, idx) => (
//                 <ListItem key={idx} sx={{ py: 0.5 }}>
//                   <ListItemIcon sx={{ minWidth: 32 }}>
//                     <CheckCircle color="#ffd166" size={20} />
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               ))}
//             </List>

//             <Box mt={4} display="flex" flexWrap="wrap" gap={2}>
//               <Card sx={{ display: 'flex', p: 2, alignItems: 'center', minWidth: 220 }}>
//                 <Box
//                   sx={{
//                     backgroundColor: '#56a8a8',
//                     p: 1,
//                     borderRadius: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mr: 2,
//                     width: 40,
//                     height: 40,
//                   }}
//                 >
//                   <Phone size={20} color="white" />
//                 </Box>
//                 <Box>
//                   <Typography variant="body2">Contact Us</Typography>
//                   <Typography fontWeight="bold">(555) 987-6543</Typography>
//                 </Box>
//               </Card>

//               <Card sx={{ display: 'flex', p: 2, alignItems: 'center', minWidth: 220 }}>
//                 <Box
//                   sx={{
//                     backgroundColor: '#56a8a8',
//                     p: 1,
//                     borderRadius: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mr: 2,
//                     width: 40,
//                     height: 40,
//                   }}
//                 >
//                   <Clock size={20} color="white" />
//                 </Box>
//                 <Box>
//                   <Typography variant="body2">Office Hours</Typography>
//                   <Typography fontWeight="bold">8.00am - 9.00pm</Typography>
//                 </Box>
//               </Card>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//     </Box>
//   );
// }



"use client"
import React, { useState, useRef } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import { Clock, CheckCircle, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function MembershipForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      if (!form.current) throw new Error('Form reference not found');

      const emailJsResponse = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (emailJsResponse.status !== 200) {
        throw new Error('Failed to send email notification');
      }

      const apiResponse = await fetch('/api/memberships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(data.error || 'Failed to submit membership');
      }

      setSnackbarMessage('Form submitted successfully! We will contact you soon.');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: ''
      });

    } catch (error: any) {
      console.error('Submission error:', error);
      let errorMessage = 'Failed to submit form. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      } else if (error?.text) {
        errorMessage = error.text;
      }

      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: '#56a8a8',
        backgroundImage: 'url("/flat-lay-medical.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(86, 168, 168, 0.9)',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Grid container spacing={4} >

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              position: { xs: 'static', md: 'relative' },
              order: { xs: 2, md: 1 },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: {xs:'100%',md:'514px'},
                p: { xs: 3, sm: 4 },
                borderRadius: 2,
                backgroundColor: '#fff',
                position: { xs: 'static', md: 'absolute' },
                zIndex:2,
                top: { md: '50%' },
                transform: { md: 'translateY(-50%)' },
                left: { md: 0 },
                maxWidth: { md: 670,  },
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Complete the form below
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Eleifend cubilia parturient id ridiculus lacus nisl dui dictum maximus.
              </Typography>

              <Box component="form" ref={form} mt={2} onSubmit={handleSubmit}>
                <Grid container spacing={2} display={'flex'} flexDirection={'column'}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="firstName"
                      label="First Name"
                      size="small"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="lastName"
                      label="Last Name"
                      size="small"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone"
                      size="small"
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email"
                      size="small"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="address"
                      label="Address"
                      multiline
                      rows={4}
                      value={formData.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </Grid>
                  <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
                  <input type="hidden" name="reply_to" value={formData.email} />
                  <input type="hidden" name="message" value={`Phone: ${formData.phone}\nAddress: ${formData.address}`} />
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      disabled={submitting}
                      sx={{ backgroundColor: '#56a8a8', mt: 1, '&:hover': { backgroundColor: '#3d8d8d' } }}
                    >
                      {submitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Content Section */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              order: { xs: 1, md: 2 },
              pl: { md: '582px' },
              color: 'white',
            }}
          >
            <Box
              sx={{
                maxWidth: { md: 600 },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                BECOME A MEMBER
              </Typography>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                We assure customer satisfaction{!isMobile && <br />} with personal care
              </Typography>
              <Typography mb={4}>
                Enim scelerisque ut in vestibulum elit ridiculus laoreet torquent. Sodales euismod porta finibus phasellus justo inceptos nisl erat.
              </Typography>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Benefits of our membership program:
              </Typography>
              <List dense={isMobile}>
                {[
                  'Suscipit sagittis enim inceptos non feugiat rhoncus',
                  'Fermentum mattis ridiculus finibus lacus phasellus viverra dui.',
                  'Sociosqu volutpat class ipsum adipiscing mauris.',
                  'Magna bibendum lacinia ullamcorper convallis quis mattis.'
                ].map((text, idx) => (
                  <ListItem key={idx} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircle color="#ffd166" size={20} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>

              <Box mt={4} display="flex" flexWrap="wrap" gap={2}>
                <Card sx={{ 
                  display: 'flex', 
                  p: 2, 
                  alignItems: 'center', 
                  minWidth: { xs: '100%', sm: 220 },
                  flex: { xs: '1 1 100%', sm: '0 1 calc(50% - 8px)' }
                }}>
                  <Box
                    sx={{
                      backgroundColor: '#56a8a8',
                      p: 1,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <Phone size={20} color="white" />
                  </Box>
                  <Box>
                    <Typography variant="body2">Contact Us</Typography>
                    <Typography fontWeight="bold">(555) 987-6543</Typography>
                  </Box>
                </Card>

                <Card sx={{ 
                  display: 'flex', 
                  p: 2, 
                  alignItems: 'center', 
                  minWidth: { xs: '100%', sm: 220 },
                  flex: { xs: '1 1 100%', sm: '0 1 calc(50% - 8px)' }
                }}>
                  <Box
                    sx={{
                      backgroundColor: '#56a8a8',
                      p: 1,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <Clock size={20} color="white" />
                  </Box>
                  <Box>
                    <Typography variant="body2">Office Hours</Typography>
                    <Typography fontWeight="bold">8.00am - 9.00pm</Typography>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}