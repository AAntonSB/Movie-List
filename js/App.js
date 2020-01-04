import AddMovie from './AddMovie.js'
import MovieList from './MovieList.js'

export default {
  components: {
    AddMovie,
    MovieList
  },
  template: `
    <div id="app">
      <h1>Add Movie</h1>
      <AddMovie @newMovie="onNewMovie" @sortMovieByName="onSortMovieByName" @sortMovieByRating="onSortMovieByRating"></AddMovie>
      <br>
      <MovieList :movies="movies" />
    </div>
  `,
  data() {
    return {
      movies: []
    }
  },
  methods: {
    onNewMovie(movie) {
      this.movies.push(movie)
    },
    onSortMovieByName() {
      this.movies.sort((a, b) => a.title.localeCompare(b.title))
    },
    onSortMovieByRating() {
      this.movies.sort((a, b) => b.rating - a.rating);
    }
  }
}
