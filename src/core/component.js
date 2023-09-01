export default class Component {
  constructor(payload = {}) {
    const { tagName = "div", props = {}, state = {} } = payload;
    this.element = document.createElement(tagName);
    this.props = props;
    this.state = state;
    this.render();
  }

  render() {}
}
