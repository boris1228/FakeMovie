import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

import Home from '../Home';
import ProductDescription from '../ProductDescription';
import MovieCollection from '../MovieCollection';
import { Container } from 'react-bootstrap';

function GeneralRoute(){
    const match = useRouteMatch();


    return(        
        <Switch>
            <Route path={`${match.path}/movie-list`}>
                <Container className="pg-max-width">
                    <MovieCollection Title={""} Group={"category"} Value={"movie"} />
                </Container>
                
            </Route>
            <Route path={`${match.path}/tv-list`}>
                <Container className="pg-max-width">
                    <MovieCollection Title={""} Group={"category"} Value={"tv"} />
                </Container>
            </Route>
            <Route path={`${match.path}/:productId`}>
                <ProductDescription />        
            </Route>
            <Route path={`${match.path}`}>
                <Home />
            </Route>
        </Switch>
    )

}

export default GeneralRoute;