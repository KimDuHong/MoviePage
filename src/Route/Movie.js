import { useEffect, useState } from "react"
import Movie_list from "../components/Movie_list"
import styles from "./Movie.module.css"
import Loading from "../components/Loading"

function Movie(){
    const [loading, setLoading ] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
          await fetch(
            "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
          )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
      };
    useEffect(()=>{
        getMovies();
    }, [])

    return (
     <div className={styles.container}>
        {loading ? <Loading/>
     : 
        movies.map((current) =>
         <Movie_list 
         back_img = {current.background_image}
         img = {current.medium_cover_image}
         key = {current.id}
         id = {current.id}
         year = {current.year}
         rating = {current.rating}
         genres = {current.genres}
         title = {current.title}
         content = {current.summary}/>) 
       }
    </div>
    );
}

export default Movie;