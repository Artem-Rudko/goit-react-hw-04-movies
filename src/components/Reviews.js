import { Component } from 'react';

class Reviews extends Component {
    state = {
        reviews: [],
    };

    componentDidMount() {
        this.setState({ reviews: this.props.reviews });
    }

    componentDidUpdate() {
        // this.setState({ cast: this.props.reviews})
    }

    render() {
        return (
            <ul>
                {this.state.reviews.length > 0 ? (
                    this.state.reviews.map(review => (
                        <li key={review.id}>
                            <h2>{review.author}</h2>
                            <p>{review.content}</p>
                        </li>
                    ))
                ) : (
                    <p>We don't have any revies about this movie.</p>
                )}
            </ul>
        );
    }
}

export default Reviews;
