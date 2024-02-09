import React from "react";
import StaticMasthead from "../components/StaticMasthead";
import Title from "../components/Title";
import ContactForm from "../forms/ContactForm";
import BlockWrapper from "../components/BlockWrapper";

const ContactUs = () => {
  
  const mastheadImage = 'images/mastheads/homepage/wedding-01.jpg'

  return (
  
    <div>
      <StaticMasthead imageSrc={mastheadImage}/>
      <BlockWrapper className="container mx-auto">
        <Title title='Contact us' h1 centreTitle />

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div className="w-full  flex flex-col items-center gap-y-8">
            <p className="max-w-3xl text-center ">
              If you represent a brand that aligns with our values and shares our commitment to environmental conservation and mental health advocacy, we would love to explore collaboration opportunities. 
            </p>
            <p className="max-w-3xl text-center ">
              Let's work together to make a positive impact while embarking on exciting adventures! Feel free to <a href="mailto:seabound.souls@outlook.com" className="font-bold border-b-[1px] border-blue">reach out</a>, and let's create waves of change together. 
            </p>
          </div>

          <ContactForm/>
        </section>
      </BlockWrapper>

    </div>
      
  );
};

export default ContactUs;
