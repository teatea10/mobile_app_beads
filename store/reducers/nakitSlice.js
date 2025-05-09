import { NAKITI } from '../../data/NakitData';
import {createSlice} from '@reduxjs/toolkit'

const pocetnoStanje = {
  nakit: NAKITI,
  favoritNakiti: [],
  kosarica: [],
};

const nakitSlice = createSlice({
  name:'nakit',
  initialState:pocetnoStanje,

  reducers:{

    dodajNakit:(state,action)=>{
      state.kosarica = [...state.kosarica, action.payload]
    },

    ukloniNakit:(state,action)=>{
      const ukloniNakit = state.kosarica.filter((nakit)=>nakit.id!==action.payload.id)
      state.kosarica=ukloniNakit
    },

    resetKosara:(state,action)=>{
      state.kosarica=pocetnoStanje.kosarica
    },

    favoritNakit:(state,action)=>{
      console.log(action.payload,'jaa')
      console.log('h,',state.favoritNakiti)
      const odabran = state.favoritNakiti.findIndex(
        (n) => {
          console.log(n,action.payload)
          return n?.id == action.payload;
        }
      )
      console.log(odabran)
      if(odabran>=0){
        const noviFav =[...state.favoritNakiti]
        noviFav.splice(odabran,1)
        return {...state,favoritNakiti:noviFav}
      }else{
        const n=state.nakit.find((n)=>n.id==action.payload)
        return {...state,favoritNakiti:state.favoritNakiti.concat(n)}
      }
    }

  }
})

export const {filterNakiti,favoritNakit,dodajNakit,ukloniNakit,resetKosara} = nakitSlice.actions;

export default nakitSlice.reducer;

