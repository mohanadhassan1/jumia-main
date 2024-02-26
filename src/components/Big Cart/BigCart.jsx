import React from 'react'

export default function BigCart({Image}) {
 
  return (
    <>
          <div className="hover:scale-[1.01] h-full w-full rounded overflow-hidden shadow-lg mb-3">
            <img
              className="w-full"
              src={Image}
              alt=""
            />

      
        </div>
    </>

    )
}
