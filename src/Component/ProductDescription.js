import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Container,Col, Row, Button, Spinner } from 'react-bootstrap';
import {useParams} from 'react-router-dom';


import './ProductDescription.css';
import SmallImgCard from './SmallImgCard';
import CardInfo from './CardInfo';
import { useStateValue } from './StateProvider';

export default function ProductDescription(){
   
    const [{basket},dispatch] = useStateValue();
    
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`https://mongodb-api-fakemovie.herokuapp.com/movies/${id}`)
          .then((res) => res.json())
          .then((movie) => {
            setMovie(movie.body[0]);
            setIsLoading(false);
          });
        
      }, []);
    
    const addRent = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: movie.id,
                title: movie.title,
                type: "Rent",
                price: movie.rentalPrice
            }
        })
    }

    const addPurchase = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: movie.id,
                title: movie.title,
                type: "Purchase",
                price: movie.purchasePrice
            }
        })
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
            
            <div className="product-hero-background" style={{backgroundImage:`url(${movie.bigPoster})`}}>
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
                        <Button className="movie-button" onClick={addRent}> Rent ${movie.rentalPrice}</Button>
                        <Button className="movie-button" onClick={addPurchase}>Buy ${movie.purchasePrice} </Button>
                    </Container>
                    </div>
                    
                </Col> 
            </Row>
            </div>
            </div>
        </Container>
    )



    
}