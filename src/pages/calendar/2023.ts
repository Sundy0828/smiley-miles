import { GridRowsProp } from "@mui/x-data-grid";
import {
  randomAddress,
  randomCity,
  randomId,
} from "@mui/x-data-grid-generator";

export const rows2023: GridRowsProp = [
  {
    id: randomId(),
    name: "Groundhog Day 4 Mile",
    date: "02-03-2024",
    time: "10:00 a.m.",
    address: randomAddress(),
    city: randomCity(),
    state: "PA",
    information: "Proceeds benefit Make A Wish Foundation",
    signup: "https://smileymiles.com/2023/APP012823%20Groundhog%20Jog.pdf",
  },
  {
    id: randomId(),
    name: "Community Options Cupid's Chase",
    date: "02-10-2024",
    time: "10:00 a.m.",
    address: randomAddress(),
    city: randomCity(),
    state: "PA",
    information: "Registration starts @ 8:30 a.m.",
    signup: "",
  },
  {
    id: randomId(),
    name: "Big One Run Mile Race",
    date: "02-17-2024",
    time: "4:00 p.m.",
    address: randomAddress(),
    city: randomCity(),
    state: "PA",
    information:
      "It is a very fast course, point to point starting at Armory parking lot and finishing at lower back gate of Cascade Park. Hot chocolate will be provided",
    signup: "https://smileymiles.com/2023/APP022523%20Big%20One%20Run.pdf",
  },
];
