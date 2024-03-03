import React from "react";
import StaticMasthead from "../components/StaticMasthead";
import GridImageDisplay from "../components/GridImageDisplay";
import Text from "../components/Text";
import Title from "../components/Title";
import BlockWrapper from "../components/BlockWrapper";


const AboutUs = () => {

  const masthead = {
    sm: 'images/mastheads/about-us/fuerteventura-beach-mobile.jpg',
    md: 'images/mastheads/about-us/fuerteventura-beach-tablet.jpg',
    lg: 'images/mastheads/about-us/fuerteventura-beach-desktop.jpg',
    alt: 'Ben and rachel on a beach in Fuerteventura',
    customClasses: 'object-cover object-centre lg:object-bottom'
  } 

  return (
    <div>

      <StaticMasthead image={masthead} />

      <BlockWrapper id='content' >
          <Title title='About us'
            h1
            centreTitle
          />
            
          <Text
            content={[
              "Hi! We're Rachel and Ben!", 
              "As a travel couple with a shared love of windsurfing and watersports, we're always on the lookout for epic destinations.",
              "Our journey goes beyond the water as we also advocate the importance of protecting our oceans, minimising single-use plastics and prioritising mental health.",
              () => (
                <p>
                  <a href="https://www.instagram.com/seabound.souls" target="_blank" rel="noreferrer noopener" className="whitespace-nowrap pr-1.5">
                    Follow our journey
                  </a>
                  as we discover the most incredible windsurfing destinations around the world.
                </p>
              )
            ]}
          />

          <GridImageDisplay 
            imageOne='images/Mauritius-Images/ben-windsurfing-01.jpg'
            imageTwo='images/mastheads/homepage/windsurfing-together-01.jpg'
            imageThree='images/mastheads/homepage/windsurfing-together-02.jpg'
            imageFour='images/Vassiliki-Images/surf-hotel.jpg'
          />
          
        </BlockWrapper>

        <BlockWrapper invert >
          <Text
            title="Our Story"
            largeHeading
            centreHeading
            content={[
              "Our paths first crossed in the summer of 2019. Rachel was working as a watersports instructor in Vasiliki, Greece, while Ben travelled on a windsurfing trip to the same resort.",
              "We remained in touch after the summer, but as we lived 200 miles apart neither of us thought a relationship was on the cards. As the pandemic hit in 2020, we decided to spend our time in lockdown together. Despite the challenges, the shared experience brought us closer together and within just a few weeks we knew this was the start of an awesome adventure together.",
              "As the world gradually reopened, we made some significant life changes. Ben sold his house and moved across the country, where we established a home together. As the travel restriction eased, we were eager to return to the place where we first met. It was during this trip that we got engaged!",
              "When it came to planning our wedding, we knew we wanted an low key beach ceremony in a warm and windy place. After researching various destinations, we settled on Le Morne in Mauritius — a place known for its warm winds and beautiful beaches. Fast forward to September 2022, and our dream wedding became a reality.",
              "Now, with our shared passion for travel, we are eager to explore more of the incredible world we call home."
            ]}
            invert
          />
        </BlockWrapper>

        <BlockWrapper >
            <Title
            />

          <div className="space-y-8">
            <Text
              title="Our Values"
              centreHeading
              largeHeading
              subTitle="Raising mental health awareness"
              content={[
                "We strive to raise awareness about mental health, and believe in promoting watersports as a powerful way to enhance mental well-being.",
                "For us, spending time on the water has a positive impact on both the mind and soul. Taking part in watersports provides not just physical exercise but also an escape from the stresses of every day life.",
                "We hope to inspire individuals to prioritise their mental well-being by embracing the elements, leading to improved mental resilience and a more balanced lifestyle."
              ]}
            />
            
            <Text
              subTitle="Protecting our oceans"
              content={[
                "Protecting our oceans is an important responsibility for every person on this planet. As vital sources of biodiversity and climate regulation, our oceans sustain life on Earth.",
                "To ensure the well-being of our oceans, we believe in adopting sustainable practices and reducing plastic pollution. By advocating for marine conservation and raising awareness about the impact of single-use plastics, we hope to contribute to safeguarding the balance of our oceans.",
                "Through conscientious choices and global cooperation, we strive to leave a positive and lasting impact on our oceans, beaches and coastlines."
              ]}
            />

            <Text
              subTitle="Living conciously"
              content={[
                "For us, living consciously in the world of windsurf travel means having a mindful connection with both nature and community around us.",
                "By immersing ourselves in beautiful and diverse landscapes, we strives to preserve the very environments that provide endless joy, freedom and adrenaline.",
                "This mindful approach extends to fostering respectful relationships with the communities we meet along the way, promoting cultural understanding and responsible tourism.",
                "In the world of windsurfing, living consciously is not just a personal philosophy but a commitment to safeguarding the vibrant destinations that make each journey unforgettable."
              ]}
            />
          </div>


              <GridImageDisplay 
                  imageOne='images/Mauritius-Images/wedding-1.jpg'
                  imageTwo='images/Mauritius-Images/wedding-2.jpg'
                  imageThree='images/Mauritius-Images/mauritius.jpg'
                  imageFour='images/Mauritius-Images/wedding-3.jpg'
                />
        </BlockWrapper>
        

    </div>    
  );
};

export default AboutUs;
