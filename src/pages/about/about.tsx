import { Box, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h4" component="div">
        ABOUT US
      </Typography>
      <Typography gutterBottom>
        Founded in 2003, Mile of Smiles Timing Services is an event timing
        provider, that primarily concentrates on road races. We offer to our
        clients a variety of services which includes not only timing of the
        participants, but will also help with promotions for the event.
      </Typography>
      <Typography gutterBottom>
        Miles of Smiles Timing Services' goal is to provide the highest level of
        service to our clients. In our first year of business, we coordinated
        the race results of more than twenty races within the Western
        Pennsylvania region. In Western Pennsylvania, we are the timing service
        of choice for affordable, accurate, and professional service.
      </Typography>
      <Typography gutterBottom>
        WE HAVE DISPOSABLE CHIP TIMING FOR LARGE EVENTS.
      </Typography>
    </Box>
  );
};
