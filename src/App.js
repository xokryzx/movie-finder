import Component from "./core/component";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view");
    this.element.append(routerView);
  }
}