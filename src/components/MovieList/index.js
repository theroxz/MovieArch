import React,{useState}  from 'react';
import styles from './index.module.css';
import Popup from '../Popup';
import {Link} from "react-router-dom";
const MovieList = (props) =>{
    const [triggered, setTriggered] = useState(false);
    const [activeMovie, setActiveMovie] = useState("");
    function handleDeleteTrigger(movie){
        setActiveMovie(movie);
        setTriggered(true);
    }
    return (
        <div className={styles.movielist__container}>
            {props.movies.map((movie,index)=> (
            <div className={styles.movie__container} key={index}>
                <img src= {movie.poster_path} onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="https://archive.org/download/no-photo-available/no-photo-available.png";}} alt="movie"/>
                <div className={styles.title_overview__wrapper}>
                    <div className={styles.title}><a href={"https://www.themoviedb.org/movie/453-a-beautiful-mind"}>{movie.title}</a></div>
                    <p className={styles.overview}>
                    {movie.overview}
                    </p>
                    <br/> <br/> <br/>
                </div>
                <div className={styles.buttons__flexrow}>
                    <button className={styles.delete__button} onClick={() => handleDeleteTrigger(movie)}>
                    Delete
                    </button>
                    <Link to={`/edit/${movie.id}`}>
                        <button className={styles.edit__button} >
                        Edit
                        </button>
                    </Link>
                    <span className={styles.rate__span}>
                        {parseFloat(movie.vote_average).toFixed(1)}
                    </span>
                </div>
            </div>
            )
        )}
        {triggered ? <Popup setTriggered={setTriggered} activeMovie={activeMovie} deleteMovie={props.deleteMovie}/>: ""}
        </div>
    )
}


export default MovieList