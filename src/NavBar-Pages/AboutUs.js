import React from "react";
import StaticMasthead from "../Common-Components/StaticMasthead";
import PageHeading from "../Common-Components/PageHeading";
import SplitAccordianImage from "../Common-Components/SplitAccordianImage";
import GridImageDisplay from "../Common-Components/GridImageDisplay";

const AboutUs = () => {

  const masthead = 'images/mastheads/homepage/fuerteventura-beach-01.jpg'
  const leMorneOne = "Masthead-Images/le-morne-01.jpg";
  const weddingOne = "Masthead-Images/wedding-01.jpg"
  const dahabSwissFour = "/Egypt-Images/Dahab-Swiss-Inn-4.jpg"
  const fuerteventuraWindsurfing = "Masthead-Images/ben-vulcan-fuerteventura.jpg"

  const whyWeLoveWindsurfingAccordianData = [
    {
        question: 'happiness',
        answer: 'answer one'
    },
    {
        question: 'sense of freedom',
        answer: 'answer two'
    },
    {
        question: 'mindfullness',
        answer: 'answer three'
    },
    {
        question: 'connection with nature',
        answer: 'answer four'
    },
    {
      question: 'challenge and achievement',
      answer: ' blah a;jant;boiante avknaetijvnagkv ifpuvnav ;fuivna;efjvbanf vsd;ifvbspfv s;fiuvbrnv aipjfvbnaerv ;iejvbne;krv sdpifvbae;kfv aepifvna;efkv apdifv a;fkv apifb '
  },
]

  const ourMissionData = [
    {
      question: 'question one',
      answer: 'answer one'
    },
    {
        question: 'question two',
        answer: 'answer two'
    },
    {
        question: 'question three',
        answer: 'answer three'
    },
    {
      question: 'question four',
      answer: 'answer fout'
    },
    {
        question: 'question five',
        answer: 'answer five'
    },
  ]

  return (
    <div>

      <StaticMasthead imageSrc={masthead} />

      <div id='content'>

        <PageHeading heading='About us' />
      
        <section className="py- container mx-auto" id="content">

          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col space-y-8 items-center">
              <p className="text-center">
                We are rachel and ben            
              </p>
              <p className="text-center">
                Two adventure seekers from the UK, pursuing our passion for windsurfing and travelling wherever the wind takes us.
              </p>
              <p className="text-center">
                <a href="https://www.instagram.com/seabound.souls/" className="font-bold underline" target="_blank" rel="noreferrer">Follow our journey</a> as we discover the most incredible windsurfing destinations around the world. 
              </p>
            </div>
          </div>
        </section>

        <section class="container mx-auto py-4 lg:py-8">
          <GridImageDisplay 
            imageOne='images/Mauritius-Images/ben-windsurfing-01.jpg'
            imageTwo='images/mastheads/homepage/windsurfing-together-01.jpg'
            imageThree='images/mastheads/homepage/windsurfing-together-02.jpg'
            imageFour='images/Vassiliki-Images/surf-hotel.jpg'
          />
        </section>

        <section className="bg-blue text-white py-20">
          <div className="container mx-auto flex flex-col justify-center space-y-8">
            <h3 className="font-title text-4xl uppercase text-center">
              Our story
            </h3>
            <p className="text-center">
              Our paths first crossed in the summer of 2019. Rachel was working as a watersports instructor in Vasiliki, Greece, while Ben was indulging his passion for windsurfing at the same resort. 
            </p>
            <p className="text-center">
              We remained in touch after the summer, but as we lived 200 miles apart neither of us envisaged a future relationship. As the pandemic hit in 2020, we decided to spend our time in lockdown together. Despite the challenges, the shared experience brought us closer together and within a matter of weeks, it became evident that our connection was something special.
            </p>
            <p className="text-center">
              As the world gradually reopened, we made some significant life changes. Ben sold his house and moved across the country, where we established a home together. As the travel restriction eased, we were eager to return to the place where we first met. It was during this trip that Ben proposed and Rachel happily accepted.
            </p>
            <p className="text-center">
              When it came to planning our wedding, we knew we wanted an intimate, beach ceremony just the two of us. After researching various destinations, we settled on Le Morne in Mauritius — a place known for its warm winds and beautiful beaches. Fast forward to September 2022, and our dream wedding became a reality.
            </p>
            <p className="text-center">
              Now, with our shared passion for travel, we are eager to explore more of the incredible world we call home.
            </p>
          </div>
        </section>

        <section>
          <SplitAccordianImage 
            title='Why we love windsurfing' 
            accordianData={whyWeLoveWindsurfingAccordianData} 
            image={fuerteventuraWindsurfing}
            reverse='false'
            invert='false'
          />
        </section>

        <section>
          <SplitAccordianImage 
            title='Our mission' 
            subtitle='Sharing our passion'
            accordianData={ourMissionData} 
            image={fuerteventuraWindsurfing}
            reverse='true'
            invert='true'
          />
        </section>

        <section className="py-20">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-8 items-center pb-12">
              <h3 className="font-title text-4xl uppercase">
                Our values
              </h3>
              <p>
                Windsurfing isn't just a sport, it's a way of life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
              <div className='flex flex-col space-y-8 items-center'>
                <div>
                  <h4 className="text-2xl uppercase text-center pb-2">
                    Raising mental health awareness
                  </h4>
                  <p className="text-center">
                    Promoting watersports to help improve mental health
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl uppercase text-center pb-2">
                    Protecting our oceans
                  </h4>
                  <p className="text-center">
                    Plastic free
                  </p>
                  <p className="text-center">
                    Recycle and reuse
                  </p>
                  <p className="text-center">
                    Ethical and sustainable choices
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl uppercase text-center pb-2">
                    Living conciously
                  </h4>
                  <p className="text-center">
                    balenced lifestyle
                  </p>
                  <p className="text-center">
                    Being deliverate in your thoughts, actions and choices
                  </p>
                </div>

              </div>

              <div className='w-full h-96 md:h-full bg-center bg-cover' style={{
                backgroundImage: `url(${fuerteventuraWindsurfing})`,
                backgroundRepeat: "no-repeat",
                }}> 
              </div>
            </div>
          </div>
          
        </section>
      
      </div>

    </div>    
  );
};

export default AboutUs;
