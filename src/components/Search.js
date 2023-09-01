import Component from "../core/component";

export default class Search extends Component {
  render() {
    this.element.classList.add("search");
    this.element.innerHTML = `
      <input placeholder="Enter the movie title to search!" class="search-input" />
      <button class="button button-primary search-button">Search!</button>
    `;
  }
}
