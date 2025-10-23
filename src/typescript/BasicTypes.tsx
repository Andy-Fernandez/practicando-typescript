import React from 'react'

interface Cafe {
    name: string;
    roast: string;
    date: Date;
    location: Location;
  }

interface Location {
    country: string;
    msnm: number;
}


export const BasicTypes = () => {

  const name: string = 'Pablo';
  const age: number = 25;
  const isDeveloper:  boolean = true;
  const powers: string[] = ['HTML', 'CSS', 'JS', 'React'];

  //
  const cafe: Cafe = {
    name: 'Typica',
    roast: 'Medium',
    date: new Date(2022, 5, 10),
    location: {
      country: 'Colombia',
      msnm: 1200
    }
  }


  return (
    <>  
      <div>BasicTypes</div>

      { name } { age } { isDeveloper ? 'Developer' : 'Not Developer' }

      <br />

      <div> My Cafe </div>

      { cafe.name } - { cafe.roast } - { cafe.date.toDateString() } - { cafe.location.country } - { cafe.location.msnm } msnm
      
      <br />

      { powers.join(', ') }
    </>
  )
}
