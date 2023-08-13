import React from "react";
import AboutInfoLeft from "./HomepageComponents/AboutInfoLeft";
import AboutInfoRight from "./HomepageComponents/AboutInfoRight";
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
        <div className="bg-standard text-blue ">
          <AboutInfoRight
            source="/Personal-Images/Cosmos-apartments.jpg"
            heading="About Us"
            textOne="We are Rachel and Ben Yarrow, a married couple based in the South East of England."
            textTwo="We met in the summer 2019 in Vassiliki, Greece where our shared love of the ocean and watersports brought us together."
            textThree="As two adventure seekers, we have made it our mission to experience every windsurf destination the world has to offer."
            textFour="We strongly believe in living conscientiously. Looking after our wellbeing and improving mental health through participating in watersports is the way we live our lives."
            textFive="Away from the water, we love exploring the UK in our van as well as snowboarding and city breaks in Europe."
          />
        </div>
        <div className=" bg-blue  text-standard">
          <AboutInfoLeft
            source="/Personal-Images/Cosmos-apartments.jpg"
            heading="What do we do?"
            textOne="This sport will take you places most people will never go. Whether that's being out at sea looking back at the shore as the world carries on, or in a deprived town in egypt where there are only locals and wildlife."
            textTwo="What is perfection? For most it's a nice resort, all inclusive, laying on a sun bed all day. For us it's waking up, packing a van, and driving to chase the wind."
            textThree="We have visited a lot of places in search for flat waters, warm wind and an empty playground. If you're interested in finding great places to get on the water, then you're in the right place. "
          />
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
