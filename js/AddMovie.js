import Movie from './Movie.js'

export default {
  template: `
    <div>
      <form>
        <label for="title">Title</label>
        <input id="title" v-model="title" type="text">
        <p v-if="correctlyFormatedTitle" class="correctlyFormatedTitle">Need to input a title</p>
        <label for="rating">Rating</label>
        1
        <input id="rating" type="range" v-model="rating" min="1" max="5">
        5
        <br>
        <span class="current-rating">{{rating}}</span>
        <br>
        <label for="image">Image</label>
        <input id="image" v-model="image">
        <br>
        <label for="genre">Genre</label>
        <select id="genre" v-model="genre">
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </select>
        <br>
        <br>
        <label for="description">Description</label>
        <textarea id="description" v-model="desc"></textarea>
        <br>
        
        <button @click.prevent="clearForm">Clear</button>
        <button @click.prevent="addMovie">Add</button>
        <br>
        <button @click.prevent="sortMovieByName">Sort by name</button>
        <button @click.prevent="sortMovieByRating">Sort by Rating</button>
      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      rating: 3,
      genre: 'Drama',
      correctlyFormatedTitle: false
      desc: '',
      image: null
    }
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault()

      let movie = new Movie(
        this.title,
        this.rating,
        this.genre,
        this.desc,
        this.image
      );
        if (movie.title === ""){
          return this.correctlyFormatedTitle = true;
        }
        this.correctlyFormatedTitle = false;

      console.log(movie);

      this.$emit('newMovie', movie)

      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
      this.image = ''
    },
    sortMovieByName() {
      this.$emit('sortMovieByName')
    },
    sortMovieByRating() {
      this.$emit('sortMovieByRating')
    }
  }
}