import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container maxWidth="md">
        <Paper elevation={3} className="p-6 rounded-lg shadow-lg bg-white">
          <Typography
            variant="h4"
            className="font-semibold text-gray-800 text-center mb-4"
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 text-center mb-6"
          >
            Have questions about our home subdivision projects? Fill out the
            form below, and we will get back to you soon.
          </Typography>

          <form className="space-y-4">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
            <div className="flex justify-center mt-4">
              <Button variant="contained" color="primary" size="large">
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactUs;
