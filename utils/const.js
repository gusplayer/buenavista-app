import React from 'react';
import { Text, Image } from 'react-native';

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

export const CuponesBlue = {
  1: require(`../src/assets/cupones/cupones/BLUE/1.png`),
  2: require('../src/assets/cupones/cupones/BLUE/2.png'),
  3: require('../src/assets/cupones/cupones/BLUE/3.png'),
  4: require('../src/assets/cupones/cupones/BLUE/4.png'),
  5: require('../src/assets/cupones/cupones/BLUE/5.png'),
  83266: require('../src/assets/cupones/cupones/BLUE/83266.png'),
  83267: require('../src/assets/cupones/cupones/BLUE/83267.png'),
  83268: require('../src/assets/cupones/cupones/BLUE/83268.png'),
  83269: require('../src/assets/cupones/cupones/BLUE/83269.png'),
  83270: require('../src/assets/cupones/cupones/BLUE/83270.png')
};

export const CuponesGold = {
  1: require(`../src/assets/cupones/cupones/GOLD/1.png`),
  2: require('../src/assets/cupones/cupones/GOLD/2.png'),
  3: require('../src/assets/cupones/cupones/GOLD/3.png'),
  4: require('../src/assets/cupones/cupones/GOLD/4.png'),
  5: require('../src/assets/cupones/cupones/GOLD/5.png'),
  83266: require('../src/assets/cupones/cupones/GOLD/83266.png'),
  83267: require('../src/assets/cupones/cupones/GOLD/83267.png'),
  83268: require('../src/assets/cupones/cupones/GOLD/83268.png'),
  83269: require('../src/assets/cupones/cupones/GOLD/83269.png'),
  83270: require('../src/assets/cupones/cupones/GOLD/83270.png')
};

export const CuponesOpera = {
  1: require(`../src/assets/cupones/cupones/OPERA/1.png`),
  2: require('../src/assets/cupones/cupones/OPERA/2.png'),
  3: require('../src/assets/cupones/cupones/OPERA/3.png'),
  4: require('../src/assets/cupones/cupones/OPERA/4.png'),
  5: require('../src/assets/cupones/cupones/OPERA/5.png'),
  83266: require('../src/assets/cupones/cupones/OPERA/83266.png'),
  83267: require('../src/assets/cupones/cupones/OPERA/83267.png'),
  83268: require('../src/assets/cupones/cupones/OPERA/83268.png'),
  83269: require('../src/assets/cupones/cupones/OPERA/83269.png'),
  83270: require('../src/assets/cupones/cupones/OPERA/83270.png')
};

export const CuponesPremium = {
  1: require(`../src/assets/cupones/cupones/PREMIUM/1.png`),
  2: require('../src/assets/cupones/cupones/PREMIUM/2.png'),
  3: require('../src/assets/cupones/cupones/PREMIUM/3.png'),
  4: require('../src/assets/cupones/cupones/PREMIUM/4.png'),
  5: require('../src/assets/cupones/cupones/PREMIUM/5.png'),
  83266: require('../src/assets/cupones/cupones/PREMIUM/83266.png'),
  83267: require('../src/assets/cupones/cupones/PREMIUM/83267.png'),
  83268: require('../src/assets/cupones/cupones/PREMIUM/83268.png'),
  83269: require('../src/assets/cupones/cupones/PREMIUM/83269.png'),
  83270: require('../src/assets/cupones/cupones/PREMIUM/83270.png')
};

export const Membresias = {
  BLUE: require(`../src/assets/membresias/BLUE.png`),
  OPERA: require('../src/assets/membresias/OPERA.png'),
  GOLD: require('../src/assets/membresias/GOLD.png'),
  PREMIUM: require('../src/assets/membresias/PREMIUM.png')
};
