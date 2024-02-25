import React from 'react'

export default function SmallCart({Image, title}) {
  return (
    <>
    <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={Image}
        alt=""
      />
      <h3>
      {title}
      </h3>


  </div>
</>  )
}
