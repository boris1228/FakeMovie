import Hero from './Hero';
import MovieCollection from './MovieCollection';
import { useState, useEffect} from 'react'
import Content from "./Content";
 


function Home(){
    const [allMovies, setMovies]= useState([]);
    useEffect(() => {
        fetch("https://fake-moviedb.herokuapp.com/movies")
          .then((res) => res.json())
          .then((movies) => {
            setMovies(movies);
          });
      }, []);
    return (
        <>
            <Hero/>
            <MovieCollection title={"Netflix-Original"} content={allMovies.filter((movie) => movie.genre_ids === 2)} />
            <MovieCollection title={"Featured Movie"} content={allMovies.filter((movie) => movie.genre_ids === 1)} />
            <Content />
           
        
        </>
    )
}

export default Home;