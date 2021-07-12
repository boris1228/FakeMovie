import { useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import GeneralRoute from './Router/GeneralRoute';
import AdminRouter from './Router/AdminRouter';
import UserRouter from './Router/UserRouter';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import api from './api/movie';




function App() {
  const [allMovies, setMovies]= useState([]);
 

  //Retrieve movie
  useEffect(() => {
    fetch("https://fake-moviedb.herokuapp.com/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />   
      <Switch>        
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/user">
          <UserRouter />
        </Route>
        <Route path="/product">
          <GeneralRoute/>
        </Route>
        <Route path="/">    
          <Home />                  
        </Route>        
      </Switch>
      <Footer/>    
    </BrowserRouter>
  );
}

export default App;
