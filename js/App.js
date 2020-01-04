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
      <AddMovie @newMovie="onNewMovie"></AddMovie>
      <br>
      <MovieList :movies="movies" />
    </div>
  `,
  data() {
    return {
      movies: [],
    }
  },
  methods: {
    onNewMovie(movie) {
      this.movies.push(movie)
    },
  },
  created() {
    this.movies = JSON.parse( localStorage.getItem( 'movie-list' ) )
  },
  watch: {
    movies(){
    localStorage.setItem('movie-list', JSON.stringify(this.movies))
    }
  }
}
