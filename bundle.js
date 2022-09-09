customElements.define('my-app', class extends HTMLElement {
  connectedCallback() {
    importShim('foo');
  }
});

export default 'hello world';