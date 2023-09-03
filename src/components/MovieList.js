import Component from "../core/component";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
  }

  render() {
    this.element.classList.add("movie-list");
    this.element.innerHTML = `
      <div class="movies"></div>
      <div class="the-loader hide"></div>
    `;

    const movies = this.element.querySelector(".movies");
    movies.append(
      ...movieStore.state.movies.map(
        (movie) => new MovieItem({ movie }).element
      )
    );

    const loader = this.element.querySelector(".the-loader");
    movieStore.state.loading
      ? loader.classList.remove("hide")
      : loader.classList.add("hide");
  }
}
