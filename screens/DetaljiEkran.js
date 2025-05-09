import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

import Boje from '../constants/Boje';
import StilTekst from '../constants/StilTekst';
import Tipka from '../components/Tipka';

import {useSelector,useDispatch} from 'react-redux'
import {favoritNakit,dodajNakit,ukloniNakit} from '../store/reducers/nakitSlice'

const DetaljiEkran = ({ route, navigation }) => {
  console.log('udetal')
  const idNakita = route.params.id
  console.log(idNakita)
  const sviNakiti = useSelector((state) => state.nakit.nakit);
  const nakit = sviNakiti.find((n) => n.id == idNakita);
  console.log(nakit,'eee')

  const favNakiti = useSelector((state) => state.nakit.favoritNakiti);
  console.log(favNakiti,'kjdbv')

  const [favorit, postaviFavorit] = useState(false);

  useEffect(() => {
    postaviFavorit(favNakiti.some((n) => n?.id == nakit.id));
  }, [favNakiti, nakit]);

  console.log(postaviFavorit)
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={()=>dispatch(favoritNakit(nakit.id))}>
            <View>
              <MaterialIcons name={favorit ? "favorite" : "favorite-border"} size={26} color='black' />
            </View>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, nakit, dispatch, idNakita, favorit]);

  const kosara = useSelector((state)=>state.nakit.kosarica)
  console.log(kosara)

  const dodavanje =(nakit)=>{
    dispatch(dodajNakit(nakit))
  }

  const uklanjanje=(nakit)=>{
    dispatch(ukloniNakit(nakit))
  }


  return (
    <View style={stil.ekran}>

      <View style={stil.kartica}>

        <View style={stil.slikaOkvir}>
          <Image source={nakit.slika} style={stil.slika}/>
        </View>

        <View>
          <Text style={StilTekst.detalji}>{nakit.vrsta}</Text>
        </View>
        <View>
          <Text style={StilTekst.imecijena}>{nakit.naziv}</Text>
        </View>
        <View>
          <Text style={StilTekst.imecijena}>{nakit.cijena}€</Text>
        </View>

        <View style={stil.tipke}>
          <View>
          {kosara.some((value)=>value.id==nakit.id)?(
            <Tipka title="Remove from cart" onPress={()=>uklanjanje(nakit)}/>
          
          ):(
            <Tipka title="Add to cart" onPress={()=>dodavanje(nakit)}/>
          
          )}
          </View>
            

        

          
        </View>

      </View>

    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex:1,
    backgroundColor: Boje.istaknuto,
    alignItems: 'center',
  },
  slika: {
    width: 200,
    height: 200
  },
  slikaOkvir: {
    width: 210,
    height: 210,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 7,
  },
  kartica: {
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 210
  },
  tipke:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  srcebotun:{
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Boje.tipka,
    borderColor: Boje.istaknuto,
    borderWidth: 3,
    borderRadius: 5
  }
});

export default DetaljiEkran;