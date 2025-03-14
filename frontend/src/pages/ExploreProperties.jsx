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
import house03 from "../assets/house03.jpg";
import house04 from "../assets/house04.jpg";
import house05 from "../assets/house05.jpg";
import house06 from "../assets/house06.jpg";
import house07 from "../assets/house07.jpg";
import house08 from "../assets/house08.jpg";
import house09 from "../assets/house09.jpg";
import house10 from "../assets/house10.jpg";
import house11 from "../assets/house11.jpg";
import house12 from "../assets/house12.jpg";

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
    image: house03,
  },
  {
    name: "Maple Grove",
    location: "Denver, CO",
    price: "$320,000 - $450,000",
    image: house04,
  },
  {
    name: "Oakwood Village",
    location: "Seattle, WA",
    price: "$375,000 - $550,000",
    image: house05,
  },
  {
    name: "Sunnyvale Heights",
    location: "San Diego, CA",
    price: "$290,000 - $460,000",
    image: house06,
  },
  {
    name: "Willow Creek Homes",
    location: "Dallas, TX",
    price: "$330,000 - $480,000",
    image: house07,
  },
  {
    name: "Silverwood Estates",
    location: "Phoenix, AZ",
    price: "$310,000 - $440,000",
    image: house08,
  },
  {
    name: "Riverside Meadows",
    location: "Chicago, IL",
    price: "$350,000 - $520,000",
    image: house09,
  },
  {
    name: "Hilltop Haven",
    location: "Atlanta, GA",
    price: "$300,000 - $470,000",
    image: house10,
  },
  {
    name: "Riverside Meadows",
    location: "Chicago, IL",
    price: "$350,000 - $520,000",
    image: house11,
  },
  {
    name: "Hilltop Haven",
    location: "Atlanta, GA",
    price: "$300,000 - $470,000",
    image: house12,
  },
];

const ExploreProperties = () => {
  return (
    <div className="bg-gray-100 py-16">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "gray.800", mb: 4 }}
          >
            Explore Our Properties
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "gray.800", mb: 4 }}
          >
            Discover premium home subdivisions designed for modern living. Find
            your dream home today.
          </Typography>
        </div>

        <Grid container spacing={4} justifyContent="center">
          {properties.map((property, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card className="transition-transform duration-300 hover:scale-105 shadow-xl rounded-lg">
                <CardMedia
                  component="img"
                  height="200"
                  image={property.image}
                  alt={property.name}
                  className="object-cover rounded-t-lg"
                />
                <CardContent className="text-center p-6">
                  <Typography
                    variant="h6"
                    className="font-semibold text-gray-800 mb-2"
                  >
                    {property.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-2">
                    {property.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-semibold text-gray-800 mb-4"
                  >
                    {property.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full py-2 text-white rounded-md shadow-md transition-all hover:bg-blue-700"
                  >
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
