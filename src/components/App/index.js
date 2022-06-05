import React, {useState, useEffect} from "react";
import MovieList from '../MovieList';
import SearchBar from '../SearchBar';
import axios from 'axios';
import MovieAdder from '../MovieAdder';
import MovieEditor from '../MovieEditor';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    async function addMovie(movie){
        await axios.post("http://localhost:3002/movies",movie);
        setMovies(movies.concat(movie)); 
    }
    async function deleteMovie(movie){
        const newMovieList = movies.filter(m => (m.id !== movie.id));
        setMovies(newMovieList);
      }
    async function editMovie(id,index,updatedMovie){
      await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
      const newMovieList = movies.slice();
      newMovieList[index] = updatedMovie;
      setMovies(newMovieList);
    }
    async function onMount(){
        const url = "http://localhost:3002/movies";
        const response = await axios.get(url);
        setMovies(response.data);
    }
    useEffect(()=>{
      onMount();
    },[]);
    useEffect(() => {
      setFilteredMovies(movies.filter(
        (movie)=>{return movie?.title.toLowerCase().includes(searchQuery.toLowerCase());}
      ));
    }, [movies,searchQuery]);
    function updateSearchQuery(event){
        setSearchQuery(event.target.value);
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            (<React.Fragment>
              <SearchBar updateSearchQuery = {updateSearchQuery}/>
              <MovieList movies = {filteredMovies} deleteMovie= {deleteMovie}/>
            </React.Fragment>)}>
          </Route>
          <Route path="/add-movie" element={<MovieAdder addMovie = {addMovie}/>}></Route>
          <Route path="/edit/:id" element={<MovieEditor movies={movies} editMovie = {editMovie}/>}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
