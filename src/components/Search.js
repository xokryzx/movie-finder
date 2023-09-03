import Component from "../core/component";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.element.classList.add("search");
    this.element.innerHTML = `
      <input placeholder="Enter the movie title to search!" class="search-input" />
      <button class="button button-primary search-button">Search!</button>
    `;

    const searchInput = this.element.querySelector(".search-input");
    searchInput.addEventListener("input", () => {
      movieStore.state.searchText = searchInput.value;
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const searchButton = this.element.querySelector(".search-button");
    searchButton.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
