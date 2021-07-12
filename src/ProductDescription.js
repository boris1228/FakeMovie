import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Container,Col, Row, Button, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

import './ProductDescription.css';
import SmallImgCard from './SmallImgCard';
import CardInfo from './CardInfo';


export default function ProductDescription(props){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch(`https://fake-moviedb.herokuapp.com/movies/${id}`)
          .then((res) => res.json())
          .then((movie) => {
            setMovie(movie);
            setIsLoading(false);
          });
      }, []);

    const addRent = () =>{
        alert(`Rent ${movie.name}\nRent Fee: $${movie.vote_average}`);

    }

    const addPurchase = () =>{
 
        alert(`Buy ${movie.name}\nprice: $${movie.vote_count}`);
    }
    


    if(!movie) {
        return (
            <Container>
                <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }
    

    return(
        <Container className="mt-57 pg-max-width">
            
            <div className="product-hero-background" style={{backgroundImage:`${movie.backdrop_path}`}}>
                <div>
            <Row className="product-main-section">
                <Col lg={2}>
                    <div className="pt-3">
                     <SmallImgCard movie={movie}/>
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div className="pt-3">
                     <CardInfo movie={movie}/>
                     <Container>
                        <Button className="movie-button" onClick={addRent}> Rent ${movie.vote_average}</Button>
                        <Button className="movie-button" onClick={addPurchase}>Buy ${movie.vote_count} </Button>
                    </Container>
                    </div>
                    
                </Col> 
            </Row>
            </div>
            </div>
        </Container>
    )



    
}