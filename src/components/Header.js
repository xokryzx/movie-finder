import Component from "../core/component";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4520988",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    this.element.classList.add("header");
    this.element.innerHTML = `
      <a href="#/" class="logo">
        <span class="logo-primary">OMDbAPI</span>.com
      </a>
      <nav class="header-nav">
        <ul class="menu-list">
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return `
                <li>
                  <a
                    href="${menu.href}"
                    class="menu-link ${isActive ? "active" : ""}"
                  >${menu.name}</a>
                </li>
              `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user"></a>
    `;
  }
}
