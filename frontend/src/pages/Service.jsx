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
import Service01 from "../assets/service01.png";
import construction from "../assets/construction.jpg";
import realstate from "../assets/realstate.png";
import landscape from "../assets/landscape.jpg";
import financial from "../assets/financial.jpg";
import management from "../assets/management.jpeg";

const services = [
  {
    title: "Property Development",
    description:
      "We develop high-quality residential subdivisions with modern amenities and infrastructure. Our projects are designed to provide a comfortable and sustainable living environment.",
    image: Service01,
  },
  {
    title: "Home Construction",
    description:
      "Custom-built homes designed to meet your needs and preferences. We ensure quality craftsmanship, energy efficiency, and modern design elements in every home we build.",
    image: construction,
  },
  {
    title: "Real Estate Consultation",
    description:
      "Expert advice on property investment and home ownership. Our team will guide you through the buying process and help you make informed decisions.",
    image: realstate,
  },
  {
    title: "Landscaping & Community Planning",
    description:
      "We create well-planned subdivisions with beautiful landscaping, parks, and recreational areas to enhance community living.",
    image: landscape,
  },
  {
    title: "Financing Assistance",
    description:
      "We help you find the best mortgage and financing options to make homeownership more accessible and stress-free.",
    image: financial,
  },
  {
    title: "Property Management",
    description:
      "Comprehensive property management services to maintain and enhance the value of your investment.",
    image: management,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "gray.800", mb: 4 }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "gray.600",
              maxWidth: 700,
              mx: "auto",
              fontWeight: "light",
              lineHeight: 1.6,
            }}
          >
            We offer a range of services tailored to help you find, build, and
            invest in the perfect home within our subdivisions.
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  height: "100%", // Make all cards the same height
                  display: "flex",
                  flexDirection: "column", // Ensures that content is aligned properly
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                  }}
                />
                <CardContent sx={{ flex: 1, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "semibold", color: "gray.800" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "gray.600",
                      mt: 2,
                      lineHeight: 1.6,
                      paddingX: 2,
                    }}
                  >
                    {service.description}
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

export default Services;
