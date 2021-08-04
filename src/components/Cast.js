import { Component } from 'react';
import PropTypes from 'prop-types';

class Cast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        // console.log('cast', this.props.cast);
        this.setState({ cast: this.props.cast });
    }

    componentDidUpdate() {
        // this.setState({ cast: this.props.cast})
    }

    render() {
        const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';

        return (
            <ul>
                {this.state.cast.map(hero => (
                    <li key={hero.id}>
                        {hero.profile_path && (
                            <img
                                src={`${BASE_IMG_URL}${hero.profile_path}`}
                                // src={`https://image.tmdb.org/t/p/w200}${hero.profile_path}`}
                                alt={hero.name}
                            ></img>
                        )}
                        <p>{hero.name}</p>
                        <p>Character: {hero.character}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Cast;

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string,
            character: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
