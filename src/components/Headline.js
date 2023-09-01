import Component from "../core/component";

export default class Headline extends Component {
  render() {
    this.element.classList.add("headline");
    this.element.innerHTML = `
    <div class="headline-title">
      <span class="headline-primary">OMDb API</span><br />
      THE OPEN<br />
      MOVIE DATABASE
    </div>
    <p class="headline-desc">
      The OMDb API is a RESTful web service to obtain movie information, all
      content and images on the site are contributed and maintained by our
      users.<br />
      If you find this service useful, please consider making a one-time donation
      or become a patron.
    </p>
    `;
  }
}
