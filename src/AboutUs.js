import React from "react";
import AboutInfoLeft from "./HomepageComponents/AboutInfoLeft";
import AboutInfoRight from "./HomepageComponents/AboutInfoRight";

const AboutUs = () => {
  return (
    <div className=" text-blue ">
      <div className="text-center border-b-2 border-blue py-8">
        <h1 className="text-4xl lg:text-6xl">About Us</h1>
      </div>
      <div className="bg-blue text-standard ">
          <AboutInfoRight
            source="/Personal-Images/Cosmos-apartments.jpg"
            textOne="We are Rachel and Ben Yarrow, a married couple based in the South East of England."
            textTwo="We met in the summer 2019 in Vassiliki, Greece where our shared love of the ocean and watersports brought us together."
            textThree="As two adventure seekers, we have made it our mission to experience every windsurf destination the world has to offer."
            textFour="We strongly believe in living conscientiously. Looking after our wellbeing and improving mental health through participating in watersports is the way we live our lives."
            textFive="Away from the water, we love exploring the UK in our van as well as snowboarding and city breaks in Europe."
          />
        </div>
        <div className=" bg-standard  text-blue">
          <AboutInfoLeft
            source="/Personal-Images/Cosmos-apartments.jpg"
            heading="What do we do?"
            textOne="This sport will take you places most people will never go. Whether that's being out at sea looking back at the shore as the world carries on, or in a deprived town in egypt where there are only locals and wildlife."
            textTwo="What is perfection? For most it's a nice resort, all inclusive, laying on a sun bed all day. For us it's waking up, packing a van, and driving to chase the wind."
            textThree="We have visited a lot of places in search for flat waters, warm wind and an empty playground. If you're interested in finding great places to get on the water, then you're in the right place. "
          />
        </div>
    </div>
  );
};

export default AboutUs;
