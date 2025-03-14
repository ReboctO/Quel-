import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import house01 from "../assets/house01.jpg";
import house02 from "../assets/house02.jpg";

const properties = [
  {
    name: "Sunrise Hills",
    location: "Los Angeles, CA",
    price: "$350,000 - $500,000",
    image: house01,
  },
  {
    name: "Greenwood Estates",
    location: "Austin, TX",
    price: "$280,000 - $420,000",
    image: house02,
  },
  {
    name: "Blue Lake Residences",
    location: "Miami, FL",
    price: "$400,000 - $600,000",
    image: house01,
  },
  {
    name: "Maple Grove",
    location: "Denver, CO",
    price: "$320,000 - $450,000",
    image: house02,
  },
  {
    name: "Oakwood Village",
    location: "Seattle, WA",
    price: "$375,000 - $550,000",
    image: house01,
  },
  {
    name: "Sunnyvale Heights",
    location: "San Diego, CA",
    price: "$290,000 - $460,000",
    image: house02,
  },
  {
    name: "Willow Creek Homes",
    location: "Dallas, TX",
    price: "$330,000 - $480,000",
    image: house01,
  },
  {
    name: "Silverwood Estates",
    location: "Phoenix, AZ",
    price: "$310,000 - $440,000",
    image: house02,
  },
  {
    name: "Riverside Meadows",
    location: "Chicago, IL",
    price: "$350,000 - $520,000",
    image: house01,
  },
  {
    name: "Hilltop Haven",
    location: "Atlanta, GA",
    price: "$300,000 - $470,000",
    image: house02,
  },
  {
    name: "Riverside Meadows",
    location: "Chicago, IL",
    price: "$350,000 - $520,000",
    image: house01,
  },
  {
    name: "Hilltop Haven",
    location: "Atlanta, GA",
    price: "$300,000 - $470,000",
    image: house02,
  },
];

const ExploreProperties = () => {
  return (
    <div className="bg-gray-100 py-12">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography variant="h3" className="font-bold text-gray-800 mb-4">
            Explore Our Properties
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Discover premium home subdivisions designed for modern living. Find
            your dream home today.
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {properties.map((property, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className="shadow-lg rounded-lg">
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.name}
                />
                <CardContent className="text-center">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-800"
                  >
                    {property.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-1">
                    {property.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-semibold text-gray-800 mt-2"
                  >
                    {property.price}
                  </Typography>
                  <Button variant="contained" color="primary" className="mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ExploreProperties;
