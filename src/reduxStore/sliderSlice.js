import { createSlice } from '@reduxjs/toolkit'
import sliderData from '../assets/dataStore/sliderStore'



const slice = createSlice({
    name:'slider',
    initialState: {
        value:0,
        length:sliderData.length,
    },
    reducers: {
        nextSlide: (state, action)=>{
            state.value = action.payload.id > state.length - 1 ? 0 : action.payload.id
        },
        prevSlide: (state, action)=>{
            state.value = action.payload.id < 0 ? state.length - 1 : action.payload.id
        },
        dotSlide: (state, action)=>{
          const slide = action.payload.id
          state.value = slide
        }
    }
})


export const sliderReducer = slice.reducer
export const { nextSlide, prevSlide, dotSlide } = slice.actions;
