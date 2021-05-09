import React from 'react'
import {motion} from 'framer-motion'
import SearchResult from './SearchResult'
import {connect} from 'react-redux';
import Loader from './Loader'

class Nominations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Nominations: [],
            loading: true
        }
        this.apiKey = process.env.REACT_APP_IMDB_API_KEY;
    }
    async componentDidMount() {
        let movies = [];
        for (let movie of this.props.user[this.props.ListType]) {
            let response = await fetch(`https://www.omdbapi.com/?apikey=${this.apiKey}&i=${movie}`)
            let data = await response.json()
            movies.push(data)
        }
        let Nominations = movies.map((movie) => {
            return (
                <SearchResult
                    Title={movie.Title}
                    Poster={movie.Poster}
                    Year={movie.Year}
                    MovieId={movie.imdbID}
                    isNominated={this.props.isNominated}
                    style={this.props.style}
                />
            );
        });
        this.setState({Nominations: Nominations, loading: false})
    }

    render() {
        return (
            this.state.loading ?
                <Loader /> :
                this.state.Nominations.length >= 1 &&
                <motion.div
                    initial={{x: 250}}
                    animate={{x: 0}}
                >
                    {this.state.Nominations}
                </motion.div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Nominations)