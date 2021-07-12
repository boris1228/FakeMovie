import Hero from './Hero';
import MovieCollection from './MovieCollection';

 


function Home(){

    return (
        <>
            <Hero/>
            <MovieCollection Title={"Featured Rental"} Group={"feature"} Value={"rental"} />
            <MovieCollection Title={"Deals of the Week"} Group={"feature"} Value={"week-deal"} />
            <MovieCollection Title={"Featured New Releases"}Group={"feature"} Value={"new-release"} />
            <MovieCollection Title={"Featured TV Seasons"} Group={"feature"} Value={"tv-season"} />
        
        </>
    )
}

export default Home;