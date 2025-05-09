import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';

import {Bracelet,Necklace,Earrings,Ring} from '../assets'
import Boje from '../constants/Boje';
import Kategorija from './Kategorija'

const SveKategorije = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={stil.wrap}>
    <Kategorija imageSrc={Bracelet} title="Bracelet"/>
    <Kategorija imageSrc={Necklace} title="Necklace"/>
    <Kategorija imageSrc={Ring} title="Ring"/>
    <Kategorija imageSrc={Earrings} title="Earrings"/>
    </ScrollView>
  );
};

const stil = StyleSheet.create({
  wrap:{
    paddingHorizontal:15,
    paddingTop:10,
  }
});

export default SveKategorije;