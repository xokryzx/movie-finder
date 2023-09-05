import Component from "./core/component";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    const header = new Header().element;
    const footer = new Footer().element;
    const routerView = document.createElement("router-view");

    this.element.append(header, routerView, footer);
  }
}
