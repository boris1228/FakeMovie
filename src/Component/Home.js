import Hero from './Hero';
import MovieCollection from './MovieCollection';
import { useState, useEffect} from 'react'
import Content from "./Content";
 


function Home(){
  
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featuredShows, setFeaturedShows] = useState([]);

    useEffect(() => {
        fetch("https://mongodb-api-fakemovie.herokuapp.com/movies/movie-list/feature?feature=true")
          .then((res) => res.json())
          .then((movies) => {
            setFeaturedMovies(movies.body);
          });
      }, []);

      useEffect(() => {
        fetch("https://mongodb-api-fakemovie.herokuapp.com/movies/tv-list/feature?feature=true")
          .then((res) => res.json())
          .then((movies) => {
            setFeaturedShows(movies.body);
          });
      }, []);
    return (
        <>
            <Hero/>
            <MovieCollection title={"Netflix-Original"} content={featuredShows} />
            <MovieCollection title={"Featured Movie"} content={featuredMovies} />
            <Content />
           
        
        </>
    )
}

export default Home;