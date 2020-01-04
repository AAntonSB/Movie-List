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
      <AddMovie @newMovie="onNewMovie" @sortMovieByName="onSortMovieByName"></AddMovie>
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
      this.movies.sort(function (a, b) {
        var titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase()
        if (titleA < titleB)
          return -1
        if (titleA > titleB)
          return 1
        return 0
      })
    }
  }
}
