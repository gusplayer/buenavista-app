import React from "react";
import { Text, Image } from "react-native";

export const Bold = props => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

export const Colors = {
  gold: "#c3b381",
  red: "#9e2523",
  blue: "#004584",
  orange: "#db5d2a",
  brown: "#7d4a25",
  green: "#4d4f27"
};

export const CuponesOpera = {
  1: require(`../src/assets/cupones/cupones/BLUE/1.png`),
  2: require("../src/assets/cupones/cupones/OPERA/2.png"),
  3: require("../src/assets/cupones/cupones/OPERA/3.png"),
  4: require("../src/assets/cupones/cupones/OPERA/4.png")
};

export const Membresias = {
  BLUE: require(`../src/assets/membresias/BLUE.png`),
  OPERA: require("../src/assets/membresias/OPERA.png"),
  GOLD: require("../src/assets/membresias/GOLD.png"),
  PREMIUM: require("../src/assets/membresias/PREMIUM.png")
};
