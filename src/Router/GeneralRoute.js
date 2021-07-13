import { Route, Switch, useRouteMatch} from 'react-router-dom';
import { useState, useEffect} from 'react'

import Home from '../Component/Home';
import ProductDescription from '../Component/ProductDescription';
import MovieCollection from '../Component/MovieCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();
    const [allMovies, setMovies]= useState([]);
 

    //Retrieve movie
    useEffect(() => {
      fetch("https://fake-moviedb.herokuapp.com/movies")
        .then((res) => res.json())
        .then((movies) => {
          setMovies(movies);
        });
    }, []);

    return(        
        <Switch>
            <Route path={`${match.path}/movie-list`}>
                <Container className="pg-max-width">
                    <MovieCollection title={"Featured Movie"}  content={allMovies.filter((movie) => movie.genre_ids === 2)}/>
                </Container>
                
            </Route>
            <Route path={`${match.path}/tv-list`}>
                <Container className="pg-max-width">
                    <MovieCollection title={"Netflix-Original"} content={allMovies.filter((movie) => movie.genre_ids === 1)} />
                </Container>
            </Route>
            <Route path={`${match.path}/:id`}>
                <ProductDescription />        
            </Route>
            <Route path={`${match.path}`}>
                <Home />
            </Route>
        </Switch>
    )

}

export default GeneralRoute;