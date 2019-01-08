import React from 'react';
import { Text } from 'react-native';

export const Bold = props => (
  <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
);

export const Colors = {
  gold: '#c3b381',
  red: '#9e2523',
  blue: '#004584',
  orange: '#db5d2a',
  brown: '#7d4a25',
  green: '#4d4f27'
};
