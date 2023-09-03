import Component from "../core/component";
import movieStore from "../store/movie";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }

  render() {
    this.element.classList.add("movie-list");
    this.element.innerHTML = `
      <div class="movies"></div>
    `;

    const movies = this.element.querySelector(".movies");
    movies.append();
  }
}
