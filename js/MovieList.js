import MovieCard from './MovieCard.js'
import AddMovie from './AddMovie.js'

export default {
  components: {
    MovieCard,
    AddMovie
  },
  props: ['movies'],
  template: `
    <div>
    <MovieCard 
        v-for="(movie, i) of movies"
        :key="movie.title + i" 
        :movie="movie" 
        @removeMovie="onRemoveMovie"
        @sortMovieByName="onSortMovieList"
        />
    </div>
  `,
  methods: {
    onRemoveMovie(movie) {
      let movieIndex = this.movies.indexOf(movie)
      this.movies.splice(movieIndex, 1)
    },
    onSortMovieList() {
      console.log('tja')
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