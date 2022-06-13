import React, {useEffect} from 'react';
import styles from './index.module.css';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {setSearchQuery, setFilteredMovies} from '../../features/movieSlice';

const SearchBar = (props) =>{
    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movieList.movies);
    const searchQuery = useSelector((state)=>state.movieList.searchQuery);

    const updateSearchQuery = (event)=>{
        dispatch(setSearchQuery(event.target.value));
    }
    useEffect(() => {
        console.log("arıza");
        dispatch(setFilteredMovies(movies.filter(
          (movie)=>{return movie?.title.toLowerCase().includes(searchQuery.toLowerCase());}
        )));
      }, [movies,searchQuery, dispatch]);
    
    return (
        <form onSubmit={(event)=>(event.preventDefault())} className="mb-3">   
            <div className={styles.container}>
                <div className={styles.search__sign}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange = {updateSearchQuery}  type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a movie" required/>
                <Link to="add-movie">
                    <button type="submit" className= {styles.button__add}>Add new movie</button>
                </Link>
            </div>
        </form>
    );
}

export default SearchBar;