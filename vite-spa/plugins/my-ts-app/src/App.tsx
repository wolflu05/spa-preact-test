import { Button } from "@mantine/core"
import { useState } from 'react'


function App({ name }: { name: string }) {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <h1>{name}</h1>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
    </div>
  )
}

export default App
