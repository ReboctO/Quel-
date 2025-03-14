import { TextField, Button, Grid, Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#6b4f4f", // Brown background
        color: "white",
        padding: "3rem 2rem",
        position: "relative", // For absolute positioning of the large text
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="body1">Info@quel.com</Typography>
          <Typography variant="body2">Contact: +1-800-123-4567</Typography>
          <Typography variant="body2">
            Address: 123 Main Street, Happy Valley, Cebu City
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="body1">Newsletter</Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                backgroundColor: "white",
                borderRadius: "4px 0 0 4px",
                marginRight: "-1px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e91e63",
                color: "white",
                borderRadius: "0 4px 4px 0",
                padding: "0.5rem 1.5rem",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          bottom: "-3rem", // Adjust as needed
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "9rem", // Adjust as needed
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 0.1)", // Very light white
          whiteSpace: "nowrap",
        }}
      >
        The Quel "
      </Typography>
    </Box>
  );
}

export default Footer;
