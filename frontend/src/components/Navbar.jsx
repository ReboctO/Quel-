import { Button, AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useState } from "react";
import AuthModal from "./AuthModal"; // Ensure correct casing in the import
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6b4f4f" }}>
        <Toolbar>
          <Typography
            variant="h6"
            color="white"
            component={Link}
            sx={{ flexGrow: 1, fontWeight: "bold", textDecoration: "none" }}
            to="/"
          >
            Quel "
          </Typography>
          <Button color="inherit" component={Link} to="/aboutUs">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/service">
            Service
          </Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit" component={Link} to="/contactUs">
            Contact
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{ ml: 2 }}
            component={Link}
            to="/exploreProperties"
          >
            Explore Properties
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ ml: 2 }}
            onClick={() => setOpen(true)}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Authentication Modal */}
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default Navbar;
