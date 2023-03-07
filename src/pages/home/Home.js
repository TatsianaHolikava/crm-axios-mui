import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="line"></div>
      <div className="cards">
        <Card className="card">
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              Total clients:
            </Typography>
            <Typography variant="h3" component="div">
              1288
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              We have customers who trust us to help them manage their business
              needs. Our CRM software is designed to streamline your business
              processes, increase productivity, and drive revenue growth. With
              our user-friendly interface, you can easily manage customer
              information, track sales leads, and automate your marketing
              campaigns.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              Total services:
            </Typography>
            <Typography variant="h3" component="div">
              13
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              We have customers who trust us to help them manage their business
              needs. Our CRM software is designed to streamline your business
              processes, increase productivity, and drive revenue growth. With
              our user-friendly interface, you can easily manage customer
              information, track sales leads, and automate your marketing
              campaigns.
            </Typography>
          </CardContent>
        </Card>
        <Card className="card">
          <CardContent className="card">
            <Typography
              sx={{ fontSize: 18 }}
              color="text.secondary"
              gutterBottom
            >
              Total orders:
            </Typography>
            <Typography variant="h3" component="div">
              2451
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              We have customers who trust us to help them manage their business
              needs. Our CRM software is designed to streamline your business
              processes, increase productivity, and drive revenue growth. With
              our user-friendly interface, you can easily manage customer
              information, track sales leads, and automate your marketing
              campaigns.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
