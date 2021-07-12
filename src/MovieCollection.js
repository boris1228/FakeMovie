import {Container, Row, Col, Spinner} from 'react-bootstrap'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import SmallImgCard from './SmallImgCard';
import './MovieCollection.css';

export default function FeaturedSection(props){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://fake-moviedb.herokuapp.com/movies")
          .then((res) => res.json())
          .then((movies) => {
            setMovies(movies);
          });
      }, []);


    if(!movies) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    return (
        <div className='feature-section-container'>            
            <Container className="pg-max-width">
            <h5>{Title}</h5>
                <Row>
                    {movies.map(result =>(
                        <Col xs={4} md={3} lg={2} key={result.id}>
                            <SmallImgCard movie={result}/>
                        </Col>
                    ))};
                </Row>                
            </Container>
        </div>
    )
}