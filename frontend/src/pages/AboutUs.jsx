import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
} from "@mui/material";
import hannahly from "../assets/hannahly.jpg";
import jerome from "../assets/jerome.jpg";
import erl from "../assets/erl.jpg";
import charles from "../assets/charles.jpg";
import mark from "../assets/mark.jpg";
import anne from "../assets/anne.webp";
const teamMembers = [
  {
    name: "Erl Cay",
    role: "CEO & Founder",
    image: erl,
  },
  { name: "Anne Hathaway ", role: "CTO", image: anne },
  {
    name: "Jerome Layese",
    role: "Lead Developer",
    image: jerome,
  },
  {
    name: "Hannahly Dela Cruz",
    role: "Marketing Head",
    image: hannahly,
  },
  {
    name: "Charles Andre Pammilar",
    role: "Project Manager",
    image: charles,
  },
  {
    name: "Mark Lape ",
    role: "Designer",
    image: mark,
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", py: 12 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#333", mb: 4 }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#555", maxWidth: 700, mx: "auto", lineHeight: 1.8 }}
          >
            We are a passionate team dedicated to building innovative web
            solutions that transform businesses and enhance user experiences.
          </Typography>
        </Box>

        {/* Mission Section */}
        <Box
          sx={{
            backgroundColor: "white",
            p: 6,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            mb: 12,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "#333", mb: 4 }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.6 }}>
            Our mission is to develop cutting-edge software solutions that
            empower businesses to achieve their goals efficiently and
            effectively.
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box
          sx={{
            backgroundColor: "white",
            p: 6,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            mb: 12,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "600", color: "#333", mb: 4 }}
          >
            Our Vision
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", lineHeight: 1.6 }}>
            We strive for nothing less than excellence. The skills and knowledge
            of our team set us apart. We take a distinctive approach to serving
            our clients. We envision a groundbreaking future for real estate.
          </Typography>
        </Box>

        {/* Team Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: "600", color: "#333" }}>
            Meet Our Team
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", color: "#333" }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
