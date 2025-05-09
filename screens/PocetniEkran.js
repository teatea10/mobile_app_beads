import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';

import StilTekst from '../constants/StilTekst';
import Boje from '../constants/Boje';
import Proizvod from '../components/Proizvod';
import Tipka from '../components/Tipka'

import SveKategorije from '../components/SveKategorije'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const PocetniEkran = ({ route, navigation }) => {
  
  
  return (
    <View  style={stil.ekran}>
      
      <ImageBackground source={require('../assets/neacklaces.png')} style={stil.pozadinaSlika}>
      <View style={stil.glavniTekst}>
        <Text style={StilTekst.naslov}>BEADS</Text>
      </View>

      <View style={stil.tipka}>
        <Tipka
          title="Start shopping"
          onPress={() => navigation.navigate('Beaded jewelry')}
        />
      </View>
      </ImageBackground>


      {/*OVO ISPOD OBRISI, NE TRIBA, JEDINO MAYBE KOJA SLIKA JOS... idk

      <View>
        <Text style={StilTekst.tekst}>Category</Text>
      </View>

      <ScrollView style={stil.kategorije_sve}>
        <SveKategorije/>
      </ScrollView>

      <View>
        <Text style={StilTekst.tekst}>Trending now!</Text>
      </View>

      <View style={stil.proizvodi}>
        <TouchableOpacity
        onPress={() =>
            navigation.navigate('Jewerly details')}>
          <Proizvod
            slika={require('../assets/images/necklace/necklace1.jpg')}
            naziv="Green-white necklace"
            cijena="4$"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Proizvod
            slika={require('../assets/images/ring/ring1.jpg')}
            naziv="Beaded rings"
            cijena="4$"
          />
        </TouchableOpacity>
      </View>*/ }

    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    backgroundColor: Boje.pozadina,
    flex:1
  },
  slika1: {
    width: '100%',
    height: '100%',
    resizeMode: 'strecth',
  },
  slikaOkvir: {
    width: '100%',
    height: '100%',
  },
  kategorije_sve: {
    marginHorizontal: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
  },
  proizvodi: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  tipka:{
    alignItems: 'center',
    paddingBottom: 150
  },
  pozadinaSlika: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glavniTekst:{
    paddingBottom:150
  }
});
export default PocetniEkran;
