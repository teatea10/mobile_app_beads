import  React,{useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';

import { MaterialIcons } from '@expo/vector-icons';



const KrajEkran = ({ route,navigation }) => {
   navigation.setOptions({
    headerTitle: null,
    headerLeft: null,
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Naslovna')}>
          <View>
            <MaterialIcons name="home" size={26} />
          </View>
        </TouchableOpacity>
      );
    },
  });
  return (
    <View style={stil.ekran}>
      <Text style={stil.tekst}>
        Your order has been received.
      </Text>

      <Text style={stil.tekst2}>
        Click on home icon on right for new shopping.
      </Text>
    </View>
  );  
};

const stil = StyleSheet.create({
  ekran: {
    alignItems:'center',
    textAlign:'center'
  },
  tekst:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 30,
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  tekst2:{
    fontFamily: 'sans-serif',
    justifyContent:'center',
    fontSize: 15,
    paddingTop: 50,
    flexWrap: 'wrap',
  } 
});
export default KrajEkran;
