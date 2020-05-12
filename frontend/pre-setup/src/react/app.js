import "https://unpkg.com/htm@latest";
import "https://unpkg.com/react@latest/umd/react.development.js";
import "https://unpkg.com/react-dom@latest/umd/react-dom.development.js";

const { createElement, useState } = React;
const render = ReactDOM.render;
const html = htm.bind(createElement);

function ClickCounter() {
  const [count, setCount] = useState(0);

  return html`
    <div>
      <button onClick=${() => setCount(count + 1)}>
        Clicked ${count} times
      </button>
    </div>
  `;
}

render(html`<${ClickCounter} />`, document.getElementById("root"));
