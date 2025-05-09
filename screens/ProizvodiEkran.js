import  React,{useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';

import {useSelector,useDispatch} from 'react-redux'
import {filterNakiti, favoritNakiti} from '../store/reducers/nakitSlice'

const ProizvodiEkran = ({ route,navigation }) => {
  const prikaz = route.params.prikaz
  console.log(prikaz)
  
  const nakitiPrikaz =  useSelector(state => {
    if (prikaz === 'all'){
      return state.nakit.nakit
    } else if (prikaz === 'fav')
    {
      return state.nakit.favoritNakiti
    }
    return null
  }) 

/*
  const kat = route.params.vrstaKategorije;
  console.log(kat)

  const dispatch = useDispatch();
  const sviNakiti=useSelector((state)=>state.nakit.filterNakiti)
  console.log(sviNakiti)

  const filterNakit=()=>{
    dispatch(filterNakiti("bracelet"));
  }

useEffect(()=>{
  filterNakit();
},[])
console.log(sviNakiti)*/

  const onDetails = (pod) => {
    console.log(pod,'bla bal')
    navigation.navigate('Jewerly details', { id: pod });
  };

  const prikazElelementa = (podaci) => {
    console.log(podaci.item.id,'hehe')
    return (
      <Proizvod
        slika={podaci.item.slika}
        vrsta={podaci.item.vrsta}
        cijena={podaci.item.cijena}
        handleDetails={onDetails}
        id={podaci.item.id}
      />
    );
  };

  return (
    <ScrollView vertical={true} style={stil.ekran}>

      <View style={stil.proizvodi}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ margin: 5 }}
          data={nakitiPrikaz}
          renderItem={prikazElelementa}
          numColumns={2}
          keyExtractor={(item) => item.id}
        />
      </View>

    </ScrollView>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
  },
  proizvodi:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  } 
});
export default ProizvodiEkran;
