import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js'

export function render_app(el) {
    render(html`
        <div>
            <h1>Hello from preact</h1>
        </div>`, el);
}
