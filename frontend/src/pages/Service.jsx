import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";

const services = [
  {
    title: "Property Development",
    description:
      "We develop high-quality residential subdivisions with modern amenities and infrastructure. Our projects are designed to provide a comfortable and sustainable living environment.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Home Construction",
    description:
      "Custom-built homes designed to meet your needs and preferences. We ensure quality craftsmanship, energy efficiency, and modern design elements in every home we build.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Real Estate Consultation",
    description:
      "Expert advice on property investment and home ownership. Our team will guide you through the buying process and help you make informed decisions.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Landscaping & Community Planning",
    description:
      "We create well-planned subdivisions with beautiful landscaping, parks, and recreational areas to enhance community living.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Financing Assistance",
    description:
      "We help you find the best mortgage and financing options to make homeownership more accessible and stress-free.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Property Management",
    description:
      "Comprehensive property management services to maintain and enhance the value of your investment.",
    image: "https://via.placeholder.com/300",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography variant="h3" className="font-bold text-gray-800 mb-4">
            Our Services
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of services tailored to help you find, build, and
            invest in the perfect home within our subdivisions.
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="shadow-lg rounded-lg">
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-800"
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-2">
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
