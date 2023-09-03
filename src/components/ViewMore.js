import Component from "../core/component";
import movieStore, { searchMovies } from "../store/movie";

export default class ViewMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("maxPage", () => {
      const { page, maxPage } = movieStore.state;
      maxPage > page
        ? this.element.classList.remove("hide")
        : this.element.classList.add("hide");
    });
  }

  render() {
    this.element.classList.add("button", "view-more", "hide");
    this.element.textContent = "View more...";
    this.element.addEventListener("click", async () => {
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
