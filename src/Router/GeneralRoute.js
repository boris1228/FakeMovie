import { Route, Switch, useRouteMatch} from 'react-router-dom';
import { useState, useEffect} from 'react'

import Home from '../Component/Home';
import ProductDescription from '../Component/ProductDescription';
import MovieCollection from '../Component/MovieCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();
    // const [allMovies, setMovies]= useState([]);
    const [movieList, setMovieList] = useState([]);
    const [showList, setShowList] = useState([]);

    //Retrieve movie
    useEffect(() => {
      fetch("https://mongodb-api-fakemovie.herokuapp.com/movies/movie-list")
        .then((res) => res.json())
        .then((movies) => {
          setMovieList(movies.body)
        })
    }, []);

    useEffect(() => {
        fetch("https://mongodb-api-fakemovie.herokuapp.com/movies/tv-list")
          .then((res) => res.json())
          .then((movies) => {
            setShowList(movies.body)
          })
      }, []);

    return(        
        <Switch>
            <Route path={`${match.path}/movie-list`}>
                <Container className="pg-max-width">
                    <MovieCollection title={"Featured Movie"}  content={movieList}/>
                </Container>
                
            </Route>
            <Route path={`${match.path}/tv-list`}>
                <Container className="pg-max-width">
                    <MovieCollection title={"Netflix-Original"} content={showList} />
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