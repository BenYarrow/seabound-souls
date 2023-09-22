import React from 'react';
import PageHeading from '../Common-Components/PageHeading';
import SplitText from "../Common-Components/SplitText";
import GridImageDisplay from '../Common-Components/GridImageDisplay';



const WindsurfingInMauritius = () => {

  const imageOne = '..//Mauritius-Images/Windsurfing-In-Mauritius/Ben-1.jpg'
  const imageTwo = '..//Mauritius-Images/Windsurfing-In-Mauritius/Ben-2.jpg'
  const imageThree = '..//Mauritius-Images/Windsurfing-In-Mauritius/Rachel-1.jpg'
  const imageFour = '..//Mauritius-Images/Windsurfing-In-Mauritius/Boat-1.jpg'


  return(
    <div className="">
      <section>
        <PageHeading heading="windsurfing in mauritius"/>
      </section>

      <section>
        <SplitText 
          leftText="Mauritius is a fantastic destination for windsurfing, thanks to its stunning beaches, warm tropical waters, and consistent trade winds. Whether you're a beginner or an experienced windsurfer, there are plenty of spots around the island to enjoy this exhilarating water sport." 
          rightText="Mauritius is a fantastic destination for windsurfing, thanks to its stunning beaches, warm tropical waters, and consistent trade winds. Whether you're a beginner or an experienced windsurfer, there are plenty of spots around the island to enjoy this exhilarating water sport."  
        />
      </section>

      <section>
        <GridImageDisplay imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThree} imageFour={imageFour}/>
      </section>

    </div>

  )
}

export default WindsurfingInMauritius