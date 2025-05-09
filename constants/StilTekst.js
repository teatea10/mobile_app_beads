import React from 'react';
import { StyleSheet} from 'react-native';

import Boje from './Boje';


export default StyleSheet.create({
  zaglavlje: {
    width: "100%",
    height: 60,
    paddingTop: 20,
    //backgroundColor: Boje.pozadina,
    justifyContent: 'center',
    alignItems: 'center'
  },
  naslov: {
    textAlign: 'center',
    color: "black",
    fontSize: 30,
    fontFamily:'sans-serif',
    //fontWeight: 'bold'
  },
  tekst:{
    color: "black",
    fontFamily: 'sans-serif',
    fontSize: 20,
    padding: 20
  },
  zaTipku: {
    color: Boje.istaknuto,
    fontFamily: 'sans-serif',
    fontSize: 20,
    //fontWeight: 'bold'
  },
  detalji: {
    color: "black",
    fontFamily: 'sans-serif',
    fontSize: 15
  },
  imecijena:
  {
    textAlign: 'center',
    color: "black",
    fontFamily: 'sans-serif',
    fontSize: 20,
    padding: 8
  }
});