import React from "react";
import "./Css/Homepage.css";

function Homepage() {
  const vassBay = "Background-Images/Vass-bay.jpg";

  return (
    <div className="">
      <div id="hero-section"></div>
      <div className="w-full">
        <div className="py-16 font-standard flex flex-col space-y-4 items-center justify-around text-standard bg-blue ">
          <h1 className="text-xl">
            Welcome to Yarrow Travels
          </h1>
          <p className="text-4xl md:text-3xl lg:text-4xl">
            Where the wind meets the waves <br /> is where the memories are made
          </p>
          <p className="text-xl text-center px-16 ">
            Our aim is to help you have the best time on the
            water and showcase the very best watersports desinations
            around the world.
          </p>
        </div>

        <div
          className="w-full h-[40rem] object-cover"
          style={{
            backgroundImage: `url(${vassBay})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="p-8 h-auto md:h-80 font-standard flex flex-col items-center justify-around space-y-4 text-blue bg-standard/60">
            <h1 className="text-sm md:text-xl text-center">
              Addiction
            </h1>
            <p className="text-xl md:text-3xl text-center">
              It's you, your equipment and nature <br /> what are you going to
              do with it?
            </p>
            <p className="text-sm md:text-xl  text-center">
              We can help you decide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
