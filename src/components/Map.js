import React from "react";
import GoogleMapReact from "google-map-react";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { red } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";
function Map({
  places,
  coordinates,
  setCoordinates,
  setBound,
  setChildClicked,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        mt: 1,
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[10, 10, 10, 10]}
        options={""}
        onChange={(e) => {
          setBound({
            ne_lat: e.bounds.ne.lat,
            ne_lng: e.bounds.ne.lng,
            sw_lat: e.bounds.sw.lat,
            sw_lng: e.bounds.sw.lng,
          });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <Box
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <Tooltip title={place.name} arrow placement="top">
              <LocationOnIcon
                color="error"
                sx={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Box>
        ))}
      </GoogleMapReact>
    </Box>
  );
}

export default Map;
