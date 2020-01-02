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

        <input type="file" @change="onFileChange">
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

      </form>
    </div>
    `,
  data() {
    return {
      title: '',
      rating: 3,
      genre: 'Drama',
      desc: '',
      image: null
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      console.log(image)
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
    },
    addMovie(evt) {
      evt.preventDefault()

      let movie = new Movie(
        this.title, 
        this.rating,
        this.genre,
        this.desc, 
        this.image
        );

        console.log(this.image)

      this.$emit('newMovie', movie)

      this.clearForm()
    },
    clearForm() {
      this.title = ''
      this.rating = 3
      this.genre = 'Drama'
      this.desc = ''
    }
  }
}