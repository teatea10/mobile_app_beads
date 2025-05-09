import {configureStore} from '@reduxjs/toolkit'
import nakit from './nakitSlice'

const store=configureStore({
  reducer:{
    nakit
  }
})

export default store;