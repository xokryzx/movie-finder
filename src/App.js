import Component from "./core/component";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    const header = new Header().element;
    const routerView = document.createElement("router-view");

    this.element.append(header, routerView);
  }
}
