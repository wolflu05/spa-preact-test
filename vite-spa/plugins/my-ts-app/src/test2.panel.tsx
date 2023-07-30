import { createRoot } from "react-dom/client";
import App from './App.tsx';


export function render_app(el: Element) {
    const root = createRoot(el);
    root.render(<App name="test2.panel.tsx" />)

    return () => root.unmount();
}
