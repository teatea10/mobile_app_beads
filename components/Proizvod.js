import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Boje from '../constants/Boje'

const Proizvod = (props) => {
  console.log(props.handleDetails, 'props podaci');

  return(
    <TouchableOpacity 
         onPress={() => props.handleDetails(props.id)}>
        <View style={stil.okvir}>

          <View>
            <Image source={props.slika} style={{height:110, width:110, resizeMode:'center'}}/>
          </View>
          <View>
            <Text style={stil.tekst}>{props.vrsta}</Text>
          </View>
          <View>
            <Text style={stil.tekst}>{props.cijena}€</Text>
          </View>
          
        </View>
      </TouchableOpacity>

  )
}

const stil = StyleSheet.create({
  okvir: {
    backgroundColor: Boje.istaknuto,
    width: 130,
    height: 170,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tekst:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 14,
    paddingTop: 2,
    flexWrap: 'wrap',
  }
})
export default Proizvod;