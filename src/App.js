import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Map from "./components/Map";
import { getData } from "./api";


function App() {
  const [coordinates, setCoordinates] = useState({});
  const [places, setPlaces] = useState([]);
  const [bound, setBound] = useState({});
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) =>
      setCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      })
    );
  }, []);


  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  };

  useEffect(() => {

    const filtered = places.filter((place) => Number(place.rating) > rating);
    setFilteredPlaces(filtered);
 
  }, [rating,places]);

  useEffect(() => {
    setIsLoading(true);
    getData(bound, type).then((data) => {
      setPlaces(data.filter((place) => place.name));
      setIsLoading(false);

    });
  }, [bound, type]);

  return (
    <Box sx={{height:'100vh'}}>
      <Header  onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
      <Grid container spacing={0}>
        <Grid item sm={12} md={4}>
          <Sidebar
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            isLoading={isLoading}
            childClicked={childClicked}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBound={setBound}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
