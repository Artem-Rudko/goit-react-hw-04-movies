import { Route, Switch, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import './styles.css';

const HomeView = lazy(() => import('./views/HomeView.js'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView.js'));
const MoviesView = lazy(() => import('./views/MoviesView.js'));

const App = () => (
    <>
        <AppBar />

        <Suspense fallback={<h1>Is loading ...</h1>}>
            <Switch>
                <Route exact path={routes.home} component={HomeView} />
                <Route
                    path={routes.movieDetails}
                    component={MovieDetailsView}
                />
                <Route path={routes.movies} component={MoviesView} />
                <Redirect to={routes.home} />
            </Switch>
        </Suspense>
    </>
);

export default App;
