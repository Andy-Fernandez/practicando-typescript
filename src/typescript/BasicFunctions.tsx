import React from 'react'

export const BasicFunctions = () => {
  const myFunction = (a:number, b:number): number => {
    return (a + b);
  }
  
  return (
    <>
      <div>MyComponent</div>
      <br />
      <div> El resultado es: { myFunction(2,1) } </div>
    </>
  )
}
