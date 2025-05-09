import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import PocetniEkran from './screens/PocetniEkran';
import ProizvodiEkran from './screens/ProizvodiEkran';
import KosaraEkran from './screens/KosaraEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import KrajEkran from './screens/KrajEkran';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import StilTekst from './constants/StilTekst';
import Boje from './constants/Boje';

import {Provider} from 'react-redux'
import store from './store/reducers/nakiti'


const tabOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let imeIkone;
    if (route.name === 'All') {
      imeIkone =  'view-list';
    } else if (route.name === 'Fav') {
      imeIkone = focused ? 'favorite' : 'favorite-border';
    } 
    return <MaterialIcons name={imeIkone} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'black',
  tabBarStyle: {
    backgroundColor: Boje.istaknuto,
    height: 60
  },
});

const tabEkrani = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
    <Tab.Screen
        name="All"
        component={ProizvodiEkran}
        initialParams={{ prikaz: 'all' }}
        options={{ tabBarLabel: 'All' }}
      />
      <Tab.Screen
        name="Fav"
        component={ProizvodiEkran}
        initialParams={{ prikaz: 'fav' }}
        options={{ tabBarLabel: 'Favorites' }}
      />
    </Tab.Navigator>
  );
};



export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>

      

        <Stack.Screen options={{headerShown: false}} name="Naslovna" component={PocetniEkran}/>


        <Stack.Screen
          name="Beaded jewelry"
          component={tabEkrani}
          options={({ route, navigation }) => {
              return {
                headerRight: () => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Shopping Cart')}>
                      <View>
                        <MaterialIcons
                          name="shopping-cart"
                          size={26}
                          color='black'
                        />
                      </View>
                    </TouchableOpacity>
                  );
                },
              };
            }
          }
        />


        <Stack.Screen
          name="Jewerly details"
          component={DetaljiEkran}
        />

        
        <Stack.Screen
        name="Shopping Cart"
        component={KosaraEkran}
        options={({ route, navigation }) => {
              return {
                headerRight: () => {}}}}
        />

        <Stack.Screen
        name="Order message"
        component={KrajEkran}
        />

    
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
