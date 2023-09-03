import Component from "../core/component";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      tagName: "a",
      props,
    });
  }

  render() {
    const { movie } = this.props;

    this.element.classList.add("movie");
    this.element.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.element.style.backgroundImage = `url(${movie.Poster})`;
    this.element.innerHTML = `
      <div class="movie-info">
        <div class="info-year">${movie.Year}</div>
        <div class="info-title">${movie.Title}</div>
      </div>
    `;
  }
}
