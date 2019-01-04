import React from "react";
import { Text } from "react-native";

export const Bold = props => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);
