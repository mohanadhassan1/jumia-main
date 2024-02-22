import React from 'react'

export default function Game() {
  return (
    <>
    <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
      <div className="flex flex-col mx-3">
        <a href="">PlayStation 5</a>
        <hr className="h-0.5 bg-black" />
        <a href="">Consoles</a>
        <a href="">Games</a>
        <a href="">Controllers</a>
        <a href="">Cards</a>
        <a href="">Accessories</a>
  

        <a href="" className="mt-5">
          {" "}
          PlayStation 4
       </a>
        <hr className="h-0.5 bg-black" />
        <a href="">Games</a>
        <a href="">Controllers</a>
        <a href="">Cards</a>
        <a href="">Accessories</a>

      </div>

      <div className="flex flex-col mx-3">
        <a href="" className="	">
          {" "}
          Xbox
        </a>
        <hr className="h-0.5 bg-black" />

        <a href="">Controllers</a>
        <a href="">Accessories</a>

        <a href="" className="	mt-5">
        PC Gaming
        </a>
        <hr className="h-0.5 bg-black" />

        <a href="">Gaming Laptops</a>
        <a href="">Headsets</a>
        <a href="">Keyboards</a>
        <a href="">Mouse</a>
        <a href="">Gaming Chairs</a>
        <a href="">Monitors</a>
       
      </div>
      <div className="flex flex-col mx-3">
        <a href="" className="	">
          {" "}
          Card & Board Games
        </a>
        <hr className="h-0.5 bg-black" />

        <a href="">Card Games</a>
        <a href="">Board Games</a>
       
      </div>
    </div>
  </>
    )
}
