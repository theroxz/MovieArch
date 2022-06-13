import React from 'react';
import styles from './index.module.css';
import serialize from 'form-serialize';
import {useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies} from '../../features/movieSlice';
import  axios from 'axios';


const MovieAdder = () =>{
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((state)=>state.movieList.movies);
    async function addMovie(movie){
        await axios.post("http://localhost:3002/movies",movie);
        dispatch(setMovies(movies.concat(movie))); 
    }
    function handleSubmit(event){
        event.preventDefault();
        const newMovie = serialize(event.target,{hash:true});
        addMovie(newMovie);
        navigate('/');
    }
    return(
        <form id="my-form" className={styles.form} onSubmit={handleSubmit}>
            <span className={styles.form__header}>Fill the form to add a new movie.</span>
            <div className= {styles.title_rating__wrapper}>
                <div className="flex-grow">
                    <span className="text-gray-700">Title</span>
                    <input type="text" name="title" className={styles.title} placeholder="Hobbits"/>
                </div>
                <div>
                    <span className="text-gray-700">Rating</span>
                    <input type="text" name="vote_average" className={styles.rating} placeholder="7.9"/>
                </div>
            </div>
            <div>
                <span className="text-gray-700">Image URL</span>
                <input type="text" name= "poster_path" className={styles.img__url} placeholder="Example.com/example.jpg"/>
            </div>
            <div>
                <span className="text-gray-700">Overview</span>
                <textarea name="overview" className={styles.text__area} rows="4" ></textarea>
            </div>
            <button type="submit" className={styles.button__add}> Add movie</button>
        </form>
    )
}

export default MovieAdder;