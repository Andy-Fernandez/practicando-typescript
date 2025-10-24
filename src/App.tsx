import { useState } from 'react'
import { BasicTypes } from './typescript'
import { MyComponent } from './typescript'
import { BasicFunctions } from './typescript'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Hi this is title</h1>
      {/* Here come components */}
      {/* <BasicTypes /> */}
      {/* <MyComponent /> */}
      <BasicFunctions />
    </main>
  )
}

export default App
