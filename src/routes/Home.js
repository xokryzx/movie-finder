import Component from "../core/component";
import Headline from "../components/Headline";

export default class Home extends Component {
  render() {
    this.element.classList.add("home-container");

    const headline = new Headline().element;
    this.element.append(headline);
  }
}
