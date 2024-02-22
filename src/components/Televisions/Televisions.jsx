import React from 'react'

export default function Televisions() {
  return (
    <>
    <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
    <div className="flex flex-col mx-3">
        <a href="" >
          {" "}
          Televisions & Receivers
        </a>
        <hr className="h-0.5 bg-black"/>
        <a href="">Televisions</a>
        <a href="">Receivers</a>
        <a href=""> Remote Controls</a>

      </div>
    <div className="flex flex-col mx-3">
        <a href="" className="	">
          {" "}
          Audio {" "}
        </a>
        <hr className="h-0.5 bg-black"/>

        <a href=""> Radios</a>
        <a href="">Audio Speakers</a>
        <a href="">Home Theater Systems</a>
        <a href="">Headphones</a>
  
   
               
      </div>
    
    </div>
  </> 
    )
}
