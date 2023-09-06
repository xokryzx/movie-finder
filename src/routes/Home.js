import Component from "../core/component";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import ViewMore from "../components/ViewMore";

export default class Home extends Component {
  render() {
    this.element.classList.add("container");

    const headline = new Headline().element;
    const search = new Search().element;
    const movieList = new MovieList().element;
    const viewMore = new ViewMore().element;
    this.element.append(headline, search, movieList, viewMore);
  }
}
