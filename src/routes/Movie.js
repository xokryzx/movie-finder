import Component from "../core/component";
import movieStore, { getMovieDetails } from "../store/movie";

export default class Movie extends Component {
  async render() {
    this.element.classList.add("movie-container");
    this.element.innerHTML = `
      <div class="poster skeleton"></div>
      <div class="desc">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `;

    await getMovieDetails(history.state.id);
    const { movie } = movieStore.state;
    const bigPoster = movie.Poster.replace("SX300", "SX700");

    this.element.innerHTML = `
      <div
        style = "background-image: url(${bigPoster})"
        class="poster"
      ></div>
      <div class="desc">
        <div class="title">${movie.Title}</div>
        <div class="labels">
          <span>${movie.Released}</span>
          &nbsp;/&nbsp;
          <span>${movie.Runtime}</span>
          &nbsp;/&nbsp;
          <span>${movie.Country}</span>
        </div>
        <div class="plot">${movie.Plot}</div>
        <div class="detail">
          <div class="detail-title">Ratings</div>
          ${movie.Ratings.map((rating) => {
            return `
              <p class="detail-content">${rating.Source} - ${rating.Value}</p>
            `;
          }).join("")}
        </div>
        <div class="detail">
          <div class="detail-title">Actors</div>
          <p class="detail-content">${movie.Actors}</p>
        </div>
        <div class="detail">
          <div class="detail-title">Directors</div>
          <p class="detail-content">${movie.Directors}</p>
        </div>
        <div class="detail">
          <div class="detail-title">Production</div>
          <p class="detail-content">${movie.Production}</p>
        </div>
        <div class="detail">
          <div class="detail-title">Genre</div>
          <p class="detail-content">${movie.Genre}</p>
        </div>
      </div>
    `;
  }
}
