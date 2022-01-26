import React, { createRef, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import {
  Box,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import PlaceDetails from "./PlaceDetails";
function Sidebar({
  places,
  type,
  setType,
  isLoading,
  childClicked,
  rating,
  setRating,
}) {
  const styleBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor:'#f8f8f8',
    flex:'1',

  };

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <Box sx={styleBox}>

      <center>
        <Typography variant="h5" color="initial" sx={{ mt: 4 }}>
          Restaurants, Hotels and Attractions
        </Typography>
      </center>

      <Box sx={{ mt: 2 }}>
        <FormControl
          sx={{
            width: 140,
            margin: 1,
          }}
        >
          <Select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            width: 140,
            margin: 1,
          }}
        >
          <InputLabel id="rating">Rating</InputLabel>
          <Select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {isLoading ? (
        <Box sx={(styleBox, { height: "40vh", mt: "50%" })}>
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <Grid
            container
            spacing={3}
            sx={{
              overflow: "auto",
              height: "70vh",
              mt: 5,
            }}
          >
            {places?.map((place, i) => (
              <Grid item xs={12} ref={elRefs[i]} key={i}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                  key={i}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default Sidebar;
