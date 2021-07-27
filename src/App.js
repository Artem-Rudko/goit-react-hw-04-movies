// import { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsView';
// import axios from 'axios';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PropTypes from 'prop-types';
import './styles.css';

// const BASE_URL = 'https://pixabay.com/api/';
// const LOG = '21433732-4f4ab4e06b98cffafd914747a';

const App = () => (
    <>
        <ul>
            <li>
                <NavLink
                    exact
                    to="/"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/movies"
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Movies
                </NavLink>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesView} />
            <Redirect to="/" />
        </Switch>
    </>
);

// App.defaultProps = {};

// App.propTypes = {};

export default App;
