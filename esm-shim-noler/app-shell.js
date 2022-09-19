customElements.define('app-shell', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `<h1 style="color: red;">app shell</h1><slot></slot>`;
    importShim('foo');
  }
});