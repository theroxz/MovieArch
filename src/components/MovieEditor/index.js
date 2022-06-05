import React from 'react';
import styles from './index.module.css';
import {useNavigate,useParams} from 'react-router-dom';
import serialize from 'form-serialize';
const MovieEditor = (props) =>{
    let { id } = useParams();
    const index = props.movies.findIndex(m => parseInt(m.id) === id);
    const movie = props.movies[index];
    let navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        const newMovie = serialize(event.target, {hash:true});
        newMovie.id = id;
        newMovie.genre_ids = movie.genre_ids;
        props.editMovie(id,index,newMovie);
        navigate('/');
    }
    return(
        <form id="my-form" name="my-form" className={styles.form} onSubmit={handleSubmit}>
            <span className={styles.form__header}>Edit the form to update your movie.</span>
            <div className= {styles.title_overview__wrapper}>
                <div className="flex-grow">
                    <span className="text-gray-700">Name</span>
                    <input type="text" defaultValue={movie.title} name="title" className={styles.title}/>
                </div>
                <div>
                    <span className="text-gray-700">Rating</span>
                    <input type="text" defaultValue={movie.vote_average} name="vote_average" className={styles.rating} placeholder="7.9"/>
                </div>
            </div>
            <div>
                <span className="text-gray-700">Image URL</span>
                <input type="text" defaultValue={movie.poster_path} name= "poster_path" className={styles.img__url} placeholder="Example.com/example.jpg"/>
            </div>
            <div>
                <span className="text-gray-700">Overview</span>
                <textarea defaultValue={movie.overview} name="overview" className={styles.text__area} rows="4" ></textarea>
            </div>
            <button type="submit" className={styles.button__apply}>Apply changes</button>
        </form>
    )
}

export default MovieEditor;