// "use client"
// import React, { useState, useRef } from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Card,
//   Snackbar,
//   Alert,
//   useMediaQuery,
//   useTheme,
//   Container,
// } from '@mui/material';

// import Grid from '@mui/material/Grid';

// import { Clock, CheckCircle, Phone } from 'lucide-react';
// import emailjs from '@emailjs/browser';

// export default function MembershipForm() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//   const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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

//       setSnackbarMessage('Form submitted successfully! We will contact you soon.');
//       setSnackbarSeverity('success');
//       setOpenSnackbar(true);
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
//     <Box
//       sx={{
//         width: '100%',
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
//       <Container
//         maxWidth="xl"
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           py: { xs: 4, md: 8 },
//           px: { xs: 2, sm: 4 },
//         }}
//       >
//         <Grid container spacing={4} >

//           <Grid
//             item
//             xs={12}
//             md={5}
//             sx={{
//               position: { xs: 'static', md: 'relative' },
//               order: { xs: 2, md: 1 },
//             }}
//           >
//             <Paper
//               elevation={3}
//               sx={{
//                 width: {xs:'100%',md:'514px'},
//                 p: { xs: 3, sm: 4 },
//                 borderRadius: 2,
//                 backgroundColor: '#fff',
//                 position: { xs: 'static', md: 'absolute' },
//                 zIndex:2,
//                 top: { md: '50%' },
//                 transform: { md: 'translateY(-50%)' },
//                 left: { md: 0 },
//                 maxWidth: { md: 670,  },
//               }}
//             >
//               <Typography variant="h5" gutterBottom fontWeight="bold">
//                 Complete the form below
//               </Typography>
//               <Typography variant="body2" color="text.secondary" paragraph>
//                 Eleifend cubilia parturient id ridiculus lacus nisl dui dictum maximus.
//               </Typography>

//               <Box component="form" ref={form} mt={2} onSubmit={handleSubmit}>
//                 <Grid container spacing={2} display={'flex'} flexDirection={'column'}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       name="firstName"
//                       label="First Name"
//                       size="small"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       error={!!errors.firstName}
//                       helperText={errors.firstName}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       name="lastName"
//                       label="Last Name"
//                       size="small"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       error={!!errors.lastName}
//                       helperText={errors.lastName}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       name="phone"
//                       label="Phone"
//                       size="small"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       error={!!errors.phone}
//                       helperText={errors.phone}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       name="email"
//                       label="Email"
//                       size="small"
//                       value={formData.email}
//                       onChange={handleChange}
//                       error={!!errors.email}
//                       helperText={errors.email}
//                     />
//                   </Grid>
//                   <Grid item xs={12}>
//                     <TextField
//                       fullWidth
//                       name="address"
//                       label="Address"
//                       multiline
//                       rows={4}
//                       value={formData.address}
//                       onChange={handleChange}
//                       error={!!errors.address}
//                       helperText={errors.address}
//                     />
//                   </Grid>
//                   <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
//                   <input type="hidden" name="reply_to" value={formData.email} />
//                   <input type="hidden" name="message" value={`Phone: ${formData.phone}\nAddress: ${formData.address}`} />
//                   <Grid item xs={12}>
//                     <Button
//                       fullWidth
//                       variant="contained"
//                       type="submit"
//                       disabled={submitting}
//                       sx={{ backgroundColor: '#56a8a8', mt: 1, '&:hover': { backgroundColor: '#3d8d8d' } }}
//                     >
//                       {submitting ? 'Submitting...' : 'Submit'}
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Paper>
//           </Grid>

//           {/* Content Section */}
//           <Grid
//             item
//             xs={12}
//             md={7}
//             sx={{
//               order: { xs: 1, md: 2 },
//               pl: { md: '582px' },
//               color: 'white',
//             }}
//           >
//             <Box
//               sx={{
//                 maxWidth: { md: 600 },
//                 mb: { xs: 4, md: 0 },
//               }}
//             >
//               <Typography variant="subtitle2" gutterBottom fontWeight="bold">
//                 BECOME A MEMBER
//               </Typography>
//               <Typography variant="h4" fontWeight="bold" mb={2}>
//                 We assure customer satisfaction{!isMobile && <br />} with personal care
//               </Typography>
//               <Typography mb={4}>
//                 Enim scelerisque ut in vestibulum elit ridiculus laoreet torquent. Sodales euismod porta finibus phasellus justo inceptos nisl erat.
//               </Typography>
//               <Typography variant="h6" fontWeight="bold" gutterBottom>
//                 Benefits of our membership program:
//               </Typography>
//               <List dense={isMobile}>
//                 {[
//                   'Suscipit sagittis enim inceptos non feugiat rhoncus',
//                   'Fermentum mattis ridiculus finibus lacus phasellus viverra dui.',
//                   'Sociosqu volutpat class ipsum adipiscing mauris.',
//                   'Magna bibendum lacinia ullamcorper convallis quis mattis.'
//                 ].map((text, idx) => (
//                   <ListItem key={idx} sx={{ py: 0.5 }}>
//                     <ListItemIcon sx={{ minWidth: 32 }}>
//                       <CheckCircle color="#ffd166" size={20} />
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItem>
//                 ))}
//               </List>

//               <Box mt={4} display="flex" flexWrap="wrap" gap={2}>
//                 <Card sx={{ 
//                   display: 'flex', 
//                   p: 2, 
//                   alignItems: 'center', 
//                   minWidth: { xs: '100%', sm: 220 },
//                   flex: { xs: '1 1 100%', sm: '0 1 calc(50% - 8px)' }
//                 }}>
//                   <Box
//                     sx={{
//                       backgroundColor: '#56a8a8',
//                       p: 1,
//                       borderRadius: 1,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       mr: 2,
//                       width: 40,
//                       height: 40,
//                     }}
//                   >
//                     <Phone size={20} color="white" />
//                   </Box>
//                   <Box>
//                     <Typography variant="body2">Contact Us</Typography>
//                     <Typography fontWeight="bold">(555) 987-6543</Typography>
//                   </Box>
//                 </Card>

//                 <Card sx={{ 
//                   display: 'flex', 
//                   p: 2, 
//                   alignItems: 'center', 
//                   minWidth: { xs: '100%', sm: 220 },
//                   flex: { xs: '1 1 100%', sm: '0 1 calc(50% - 8px)' }
//                 }}>
//                   <Box
//                     sx={{
//                       backgroundColor: '#56a8a8',
//                       p: 1,
//                       borderRadius: 1,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       mr: 2,
//                       width: 40,
//                       height: 40,
//                     }}
//                   >
//                     <Clock size={20} color="white" />
//                   </Box>
//                   <Box>
//                     <Typography variant="body2">Office Hours</Typography>
//                     <Typography fontWeight="bold">8.00am - 9.00pm</Typography>
//                   </Box>
//                 </Card>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

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
//   );
// }


"use client"
import React, { useState, useRef } from 'react';
import { Clock, CheckCircle, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function MembershipForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="form-container">
      <div className="background-overlay"></div>
      
      <div className="content-wrapper">
        <div className="form-section">
          <div className="form-paper">
            <h5 className="form-title">Complete the form below</h5>
            <p className="form-subtitle">Eleifend cubilia parturient id ridiculus lacus nisl dui dictum maximus.</p>

            <form ref={form} onSubmit={handleSubmit} className="form">
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group full-width">
                  <textarea
                    name="address"
                    placeholder="Address"
                    rows={4}
                    value={formData.address}
                    onChange={handleChange}
                    className={`form-input ${errors.address ? 'error' : ''}`}
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>
                <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />
                <input type="hidden" name="reply_to" value={formData.email} />
                <input type="hidden" name="message" value={`Phone: ${formData.phone}\nAddress: ${formData.address}`} />
                <div className="form-group full-width">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="submit-button"
                  >
                    {submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="content-section">
          <div className="content-inner">
            <p className="content-subtitle">BECOME A MEMBER</p>
            <h4 className="content-title">We assure customer satisfaction with personal care</h4>
            <p className="content-text">
              Enim scelerisque ut in vestibulum elit ridiculus laoreet torquent. Sodales euismod porta finibus phasellus justo inceptos nisl erat.
            </p>
            <h6 className="benefits-title">Benefits of our membership program:</h6>
            <ul className="benefits-list">
              {[
                'Suscipit sagittis enim inceptos non feugiat rhoncus',
                'Fermentum mattis ridiculus finibus lacus phasellus viverra dui.',
                'Sociosqu volutpat class ipsum adipiscing mauris.',
                'Magna bibendum lacinia ullamcorper convallis quis mattis.'
              ].map((text, idx) => (
                <li key={idx} className="benefit-item">
                  <CheckCircle color="#ffd166" size={20} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon">
                  <Phone size={20} color="white" />
                </div>
                <div>
                  <p className="card-label">Contact Us</p>
                  <p className="card-value">(555) 987-6543</p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon">
                  <Clock size={20} color="white" />
                </div>
                <div>
                  <p className="card-label">Office Hours</p>
                  <p className="card-value">8.00am - 9.00pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {openSnackbar && (
        <div className={`snackbar ${snackbarSeverity}`}>
          <span>{snackbarMessage}</span>
          <button onClick={handleCloseSnackbar} className="snackbar-close">×</button>
        </div>
      )}

      <style jsx>{`
        .form-container {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background-color: #56a8a8;
          background-image: url("/flat-lay-medical.jpg");
          background-size: cover;
          background-position: center;
        }
        
        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(86, 168, 168, 0.9);
          z-index: 1;
        }
        
        .content-wrapper {
          position: relative;
          z-index: 2;
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
        }
        
        .form-section {
          width: 100%;
          order: 2;
          margin-bottom: 2rem;
        }
        
        .form-paper {
          width: 100%;
          padding: 1.5rem;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 3px 5px rgba(0,0,0,0.2);
        }
        
        .form-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .form-subtitle {
          color: #666;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        
        .form {
          margin-top: 1rem;
        }
        
        .form-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .form-group {
          flex: 1 1 100%;
        }
        
        .form-group.full-width {
          flex: 1 1 100%;
        }
        
        .form-input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 0.875rem;
        }
        
        .form-input.error {
          border-color: #f44336;
        }
        
        textarea.form-input {
          min-height: 100px;
          resize: vertical;
        }
        
        .error-message {
          color: #f44336;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          display: block;
        }
        
        .submit-button {
          width: 100%;
          padding: 0.5rem;
          background-color: #56a8a8;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        
        .submit-button:hover {
          background-color: #3d8d8d;
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .content-section {
          width: 100%;
          order: 1;
          color: white;
          margin-bottom: 2rem;
        }
        
        .content-inner {
          max-width: 600px;
        }
        
        .content-subtitle {
          font-size: 0.875rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        
        .content-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .content-text {
          margin-bottom: 2rem;
        }
        
        .benefits-title {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        
        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .info-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .info-card {
          display: flex;
          padding: 1rem;
          align-items: center;
          background-color: white;
          border-radius: 8px;
          min-width: 100%;
          color: #333;
        }
        
        .card-icon {
          background-color: #56a8a8;
          padding: 0.5rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          width: 40px;
          height: 40px;
        }
        
        .card-label {
          font-size: 0.875rem;
          margin: 0;
        }
        
        .card-value {
          font-weight: bold;
          margin: 0;
        }
        
        .snackbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 1rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 300px;
          box-shadow: 0 3px 5px rgba(0,0,0,0.2);
          z-index: 1000;
        }
        
        .snackbar.success {
          background-color: #4caf50;
          color: white;
        }
        
        .snackbar.error {
          background-color: #f44336;
          color: white;
        }
        
        .snackbar-close {
          background: none;
          border: none;
          color: white;
          font-size: 1.25rem;
          cursor: pointer;
          margin-left: 1rem;
        }
        
        @media (min-width: 768px) {
          .content-wrapper {
            padding: 4rem 2rem;
          }
          
          .form-section {
            width: 41.6667%;
            order: 1;
            position: relative;
            margin-bottom: 0;
          }
          
          .form-paper {
            width: 381px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            padding: 2rem;
          }
          
          .content-section {
            width: 58.3333%;
            order: 2;
            // padding-left: 582px;
            margin-bottom: 0; 
          }
          
          .form-group {
            flex: 1 1 calc(50% - 0.5rem);
          }
          
          .info-card {
            min-width: 220px;
            flex: 0 1 calc(50% - 0.5rem);
          }
        }
      `}</style>
    </div>
  );
}