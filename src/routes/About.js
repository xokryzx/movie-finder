import Component from "../core/component";
import aboutStore from "../store/about";

export default class About extends Component {
  render() {
    const { name, email, github } = aboutStore.state;

    this.element.classList.add("about-container");
    this.element.innerHTML = `
      <div class="photo"></div>
      <p class="name user-info">${name}</p>
      <p class="user-info">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=${email}"
          target="_blank"
          class="user-link"
          >${email}
        </a>
      </p>
      <p class="user-info">
        <a href="${github}" target="_blank" class="user-link">Github</a>
      </p>
    `;
  }
}
