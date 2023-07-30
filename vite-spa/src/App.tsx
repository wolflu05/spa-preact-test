import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ExternalComponent } from "./ExternalComponent"

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ExternalComponent src="/plugins/react-app/main.js" />
      <ExternalComponent src="/plugins/preact-app/main.js" />
      <ExternalComponent src="/plugins/my-ts-app/dist/test1.panel.js" />
      <ExternalComponent src="/plugins/my-ts-app/dist/test2.panel.js" />
    </>
  )
}

export default App
