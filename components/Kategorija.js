import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Boje from '../constants/Boje';
import StilTekst from '../constants/StilTekst'

const Kategorija = ({ title, imageSrc }) => {
  return (
    <TouchableOpacity style={stil.kategorija}>
      <View >
        <Image 
        style={{ width: 80, height: 80 }}
        source={imageSrc} />
      </View>
      <Text style={StilTekst.detalji}>{title}</Text>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  kategorija: {
    flex: 1,
    minWidth: 100,
    maxWidth: '100%',
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Boje.pozadina,
    opacity: 0.8
  }
});


export default Kategorija;
