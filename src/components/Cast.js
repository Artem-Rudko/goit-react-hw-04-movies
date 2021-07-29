import { Component } from 'react';

class Cast extends Component {
    state = {
        cast: [],
    };

    componentDidMount() {
        console.log('cast', this.props.cast);
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
                        <img
                            src={`${BASE_IMG_URL}${hero.profile_path}`}
                            alt={hero.name}
                        ></img>
                        <p>{hero.name}</p>
                        <p>Character: {hero.character}</p>
                    </li>
                ))}
            </ul>
        );
    }
}

export default Cast;
