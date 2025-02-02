import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const access_key = import.meta.env.VITE_MAIL_ACCESS_KEY;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });};

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button

    // Prepare form data
    const form = new FormData(e.target);
    form.append("access_key", access_key); // Add your Web3Forms access key

    //           Log the form data
    // for (let [key, value] of form.entries()) {
    //   console.log(`${key}: ${value}`);
    // }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage('Your message was sent successfully!');
      } else {
        setResponseMessage('There was an issue with your submission. Please try again.');
      }
    } catch (error) {
      setResponseMessage('There was an error submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false); // Enable submit button again
    }
  };

  return (
    <Box sx={{
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 2,
        boxShadow: 3, }}>

      <Typography variant="h5" gutterBottom>
        Contact Me
      </Typography>

      <form
        action="https://api.web3forms.com/submit" method="POST"
        onSubmit={handleSubmit}
        className='flex flex-col gap-2'>

        {/* Grid for form fields */}
        <Grid container spacing={2}>
          {/* First Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            //  autoComplete="new-password" // disables autofill and i cant fix light blue BGcolor
              required />
          </Grid>

          {/* Last Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required/>
          </Grid>

          {/* Email Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
              type="email"/>
          </Grid>

          {/* Phone Number Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
              type="tel"/>
          </Grid>

          {/* Message Field */}
          <Grid item xs={12} sm={12}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              required
              multiline
              rows={4}/>
          </Grid>
        </Grid>

        {/* Hidden input for Web3Forms access key */}
        <input type="hidden" name="access_key" value="4ad0733f-4b5b-4cad-b86d-67d9cc4e510d" />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
          disabled={isSubmitting} // Disable button while submitting
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>

      {/* Response message */}
      {responseMessage && (
        <Typography
          variant="body1"
          sx={{ marginTop: 2, color: responseMessage.includes('success') ? 'green' : 'red', }}>

          {responseMessage}
        </Typography>
      )}
    </Box>
  );
}

export default ContactForm;

