// import { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsView';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
// import axios from 'axios';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PropTypes from 'prop-types';
import './styles.css';

// const BASE_URL = 'https://pixabay.com/api/';
// const LOG = '21433732-4f4ab4e06b98cffafd914747a';

const App = () => (
    <>
        <AppBar />
        <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Route path={routes.movies} component={MoviesView} />
            <Redirect to={routes.home} />
        </Switch>
    </>
);

// App.defaultProps = {};

// App.propTypes = {};

export default App;
