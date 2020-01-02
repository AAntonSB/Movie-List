import Movie from './Movie.js'

export default {
  template: `
    <div>
      <form>
        <label for="title">Title</label>
        <input id="title" v-model="title" type="text">
        <br>
        <label for="rating">Rating</label>
        1
        <input id="rating" type="range" v-model="rating" min="1" max="5">
        5
        <span class="current-rating">{{rating}}</span>
        
        <label for="genre">Genre</label>
        <select id="genre" v-model="genre">
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
        </select>
        <br>
        <label for="description">Description</label>
        <textarea id="description" v-model="desc"></textarea>
        
        <button @click.prevent="clearForm">Clear</button>
        <button @click.prevent="addMovie">Add</button>
      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      rating: 3,
      genre: 'Drama',
      desc: '',
      movieList: [],
      i: 0
    }
  },
  methods: {
    addMovie(evt) {
      evt.preventDefault()

      let movie = new Movie(
        this.title, 
        this.rating,
        this.genre,
        this.desc 
        );

      this.movieList.push(movie)
      console.log(this.movieList[this.i].title)
      this.i +=1;

      this.$emit('newMovie', movie)

      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
    },
  },

  watch: {
    
  }
}