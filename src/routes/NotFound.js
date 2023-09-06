import Component from "../core/component";

export default class NotFound extends Component {
  render() {
    this.element.classList.add("container");
    this.element.innerHTML = `
      <div class="not-found-message">
        Sorry...<br />
        Page Not Found.
      </div>
    `;
  }
}
