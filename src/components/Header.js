import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Paper } from "@mui/material";
import { Autocomplete } from "@react-google-maps/api";
import { Box } from "@mui/system";
function Header({ onPlaceChanged, onLoad }) {
  return (
    <div sx={{ height: "10vh" }}>
      <AppBar position="static" color="primary">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4"> Traveler</Typography>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              opacity: 0.5,
              width: 250,
              height: 45,
              "&:hover": {
                opacity: 0.7,
              },
            }}
          >
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <Box display='flex' alignItems='center'>
                <InputBase
                  placeholder="Search for places..."
                  sx={{
                    ml: 2,
                  }}
                />
                <SearchIcon
                  sx={{
                    color: "gray",
                  }}
                />
              </Box>
            </Autocomplete>
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
