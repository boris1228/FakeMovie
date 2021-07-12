

import './CardInfo.css';

export default function CardInfo({movie}){

    return(
        <div className="product-info d-flex flex-column text-light">
            <div className="movie-title">{movie.title}</div>
            <div class="left-align d-flex flex-row">{movie.category} | {movie.genre} 
            </div>
            <div className="movie-description overflow-auto">{movie.synopsis}</div>
        </div>
    )

}