import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/moviePage';
import MovieReviewPage from './pages/movieReviewPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";

const App = () => {
    return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader /> {/* New Header    */}
          <div className="container-fluid">
            <MoviesContextProvider>
              <GenresContextProvider>
                <Switch> 
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
            </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
  
};

ReactDOM.render(<App />, document.getElementById("root"));