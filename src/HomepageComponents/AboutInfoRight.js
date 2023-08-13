import React from "react";

// Image on Right

function AboutUsRight(props) {

  const textClasses = "text-base md:text-xl";

  return (
    <div className="container pb-20 pt-8 ">
      {props.heading && (
        <h2 className="text-5xl pb-8 lg:pb-16 text-center ">
          {props.heading}
        </h2>
      )}
      {props.title && (
        <h2 className="text-xl md:text-xl mb-8 ">{props.title}</h2>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-h-screen">
        <div className="space-y-4 md:flex md:flex-col md:justify-evenly">
          {props.textOne && <p className={textClasses}>{props.textOne}</p>}
          {props.textTwo && <p className={textClasses}>{props.textTwo}</p>}
          {props.textThree && <p className={textClasses}>{props.textThree}</p>}
          {props.textFour && <p className={textClasses}>{props.textFour}</p>}
          {props.textFive && <p className={textClasses}>{props.textFive}</p>}
        </div>

        {props.source && (
          <div className="w-full object-cover object-center">
            <img src={props.source} alt="" className="rounded-lg  " />
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUsRight;
