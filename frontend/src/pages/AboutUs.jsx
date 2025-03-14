import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://via.placeholder.com/150",
  },
  { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    image: "https://via.placeholder.com/150",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container maxWidth="lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Typography variant="h3" className="font-bold text-gray-800 mb-4">
            About Us
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            We are a passionate team dedicated to building innovative web
            solutions that transform businesses and enhance user experiences.
          </Typography>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-12">
          <Typography variant="h4" className="font-semibold text-gray-800 mb-4">
            Our Mission
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Our mission is to develop cutting-edge software solutions that
            empower businesses to achieve their goals efficiently and
            effectively.
          </Typography>
        </div>

        {/* Team Section */}
        <div className="text-center mb-6">
          <Typography variant="h4" className="font-semibold text-gray-800">
            Meet Our Team
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="shadow-lg rounded-lg">
                <CardMedia
                  component="img"
                  height="140"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-800"
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
