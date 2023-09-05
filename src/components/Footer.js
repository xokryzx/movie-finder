import Component from "../core/component";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    this.element.classList.add("footer");
    this.element.innerHTML = `
      <div>
        <a href="https://github.com/xokryzx/movie-finder" class="footer-link">Github Repository</a>
      </div>
      <div>
        <a href="https://github.com/xokryzx" class="footer-link">
          ${new Date().getFullYear()}
          EunJi Han
        </a>
      </div>
    `;
  }
}
