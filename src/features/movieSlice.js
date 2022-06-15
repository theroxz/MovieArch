import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies:[],
  filteredMovies:[],
  searchQuery:""
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFilteredMovies: (state, action) => {
      state.filteredMovies = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
})
export const { setMovies, setFilteredMovies, setSearchQuery } = movieSlice.actions

export default movieSlice.reducer
