import { Route, Switch, Redirect } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsPage from './views/MovieDetailsView';
import routes from './routes';
import AppBar from './components/AppBar/AppBar';
import './styles.css';

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
