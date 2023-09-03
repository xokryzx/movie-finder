import Component from "../core/component";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";

export default class Home extends Component {
  render() {
    this.element.classList.add("home-container");

    const headline = new Headline().element;
    const search = new Search().element;
    const movieList = new MovieList().element;
    this.element.append(headline, search, movieList);
  }
}
