import { createElement, useState } from 'https://esm.sh/react?export=createElement,useState';
import { createRoot } from 'https://esm.sh/react-dom/client?export=createRoot';
import htm from 'https://esm.sh/htm';
import { Button } from "https://esm.sh/@mantine/core?export=Button";

const html = htm.bind(createElement);
console.log(html)

function App(props) {
    const [counter, setCounter] = useState(0);
    return html`<h1>Hello ${props.name} from react-app! ${counter} <${Button} onClick=${() => setCounter(c => c + 1)}>Increase<//></h1>`;
}

export function render_app(el) {
    const root = createRoot(el)
    root.render(html`<${App} name="World" />`);
    return () => root.unmount();
}
