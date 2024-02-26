import React from "react";

export default function Sport() {
  return (
    <>
      <div className="flex h-[27rem] w-[41rem] justify-around	bg-gray-100">
        <div className="flex flex-col mx-3">
          <a href="">Cardio Training</a>
          <hr className="h-0.5 bg-black" />
          <a href="">Treadmills</a>
          <a href="">Exercise Bike</a>
          <a href="">Elliptical Trainers</a>

          <a href="" className="mt-5">
            {" "}
            Strength Training Equipment
          </a>
          <hr className="h-0.5 bg-black" />
          <a href="">Dumbbells</a>
          <a href="">Bars</a>
          <a href="">Core & Abdominal Trainers</a>

          <a href="" className="mt-5">
            {" "}
            Outdoor & Adventure
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Cycling</a>
          <a href="">Running</a>
        </div>

        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Sports Wear
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Men Sports Wear</a>
          <a href="">Women Sports Wear</a>

          <a href="" className="	mt-5">
            Sports & Fitness
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Accessories</a>
          <a href="">Swimming</a>
          <a href="">Team Sports</a>
          <a href="">Hunting & Fishing</a>
          <a href="">Leisure Sports & Game Room</a>
        </div>
        <div className="flex flex-col mx-3">
          <a href="" className="	">
            {" "}
            Accessories
          </a>
          <hr className="h-0.5 bg-black" />

          <a href="">Exercise Bands</a>
          <a href="">Jump Ropes</a>
          <a href="">Exercise Mats</a>
          <a href="">Gym Bags</a>
        </div>
      </div>
    </>
  );
}
