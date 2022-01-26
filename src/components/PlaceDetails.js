import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { styled } from "@mui/styles";
import PhoneIcon from "@mui/icons-material/Phone";
function PlaceDetails({ selected, place, refProp }) {
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  };
  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    margin: 4,
    alignItems: "center",
  });
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Box sx={boxStyle}>
      <Card sx={{ width: "90%" }}>
        <CardMedia
          sx={{ height: 300 }}
          image={
            place.photo
              ? place.photo.images.large.url
              : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
        <CardContent>
          <center>
            <Typography variant="h6" color="initial" sx={{ m: "auto" }}>
              {place.name}
            </Typography>
          </center>
          <CardBox>
            <Rating
              name="read-only"
              value={Number(place.rating)}
              readOnly
              precision={0.5}
            />
            <Typography component="legend">
              {place.num_reviews} review{place.num_reviews > 1 && "s"}
            </Typography>
          </CardBox>

    
          {place.address && (
            <Box
              display="flex"
              justifyContent="space-between"
              my={1}
              alignItems="center"
            >
              <CardBox>
                <LocationOnIcon sx={{ color: "gray" }} />
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  c
                >
                  {place.address}
                </Typography>
              </CardBox>
            </Box>
          )}
          {place.phone && (
            <Box
              display="flex"
              justifyContent="space-between"
              my={1}
              alignItems="center"
            >
              <CardBox>
                <PhoneIcon sx={{ color: "gray" }} />
                <Typography variant="body2" color="textSecondary">
                  {place.phone}
                </Typography>
              </CardBox>
            </Box>
          )}
                <Box
              display="flex"
              my={1}
              sx={{width:"100%"}}
            >
          {place?.cuisine?.slice(0,5).map(({ name }) => (
              <Chip key={name} size="small" label={name} sx={{mx:0.5}} />
              ))}
              </Box>
        </CardContent>
        {place.website && (
          <CardActions sx={boxStyle}>
            <Button
            variant='outlined'
            sx={{mb:1}}
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          </CardActions>
        )}
      </Card>
    </Box>
  );
}

export default PlaceDetails;
