import React from 'react'

export const BasicTypes = () => {

  const name: string = 'Pablo';
  const age: number = 25;
  const isDeveloper:  boolean = true;
  const powers: string[] = ['HTML', 'CSS', 'JS', 'React'];


  return (
    <>  
      <div>BasicTypes</div>

      { name } { age } { isDeveloper ? 'Developer' : 'Not Developer' }

      <br />

      { powers.join(', ') }
    </>
  )
}
