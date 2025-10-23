import { useState } from 'react'
import { BasicTypes } from './typescript'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Hi this is title</h1>
      {/* Here come components */}
      <BasicTypes />
    </main>
  )
}

export default App
