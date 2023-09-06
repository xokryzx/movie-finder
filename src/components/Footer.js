import Component from "../core/component";
import aboutStore from "../store/about";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }

  render() {
    const { github, repository } = aboutStore.state;

    this.element.classList.add("footer");
    this.element.innerHTML = `
      <div>
        <a href="${repository}" class="footer-link">Github Repository</a>
      </div>
      <div>
        <a href="${github}" class="footer-link">
          ${new Date().getFullYear()}
          EunJi Han
        </a>
      </div>
    `;
  }
}
