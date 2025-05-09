import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boje from '../constants/Boje'
import StilTekst from '../constants/StilTekst';

const Tipka = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...stil.tipka, ...props.style}}>
        <Text style={StilTekst.zaTipku}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  tipka: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.tipka,
    borderColor: Boje.istaknuto,
    borderWidth: 3,
    width: 170,
    height: 40,
    borderRadius: 5
  }
});

export default Tipka;
