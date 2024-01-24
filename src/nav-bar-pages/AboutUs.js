import React from "react";
import StaticMasthead from "../components/StaticMasthead";
import PageHeading from "../components/PageHeading";
import SplitAccordianImage from "../components/SplitAccordianImage";
import GridImageDisplay from "../components/GridImageDisplay";
import SplitImageText from "../components/SplitImageText";

const AboutUs = () => {

  const masthead = 'images/mastheads/about-us/fuerteventura-beach-01.jpg'
  

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
      answer: ''
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
                We are Rachel and Ben
              </p>
              <p className="text-center">
              As a travel couple with a passion for windsurfing and watersports, we're always on the lookout for the next incredible destination. But our journey goes beyond the waves as we also advocate the importance of protecting our oceans, minimising single-use plastics and prioritising mental health. 
              </p>
              <p className="text-center">
                <a href="https://www.instagram.com/seabound.souls/" className="font-bold underline" target="_blank" rel="noreferrer">Follow our journey</a> as we discover the most incredible windsurfing destinations around the world. 
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-4 lg:py-8">
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
                  <div className="text-center space-y-1">
                    <p>
                      Raising awareness about mental health is a crucial endeavor, and promoting watersports can serve as a powerful avenue for enhancing mental well-being.
                    </p>
                    <p>
                      Engaging in activities like windsurfing not only offers physical exercise but also provides a unique therapeutic escape. The rhythmic flow of the water, the adrenaline rush from mastering the wind, and the immersive connection with nature can significantly contribute to reducing stress and anxiety.
                    </p> 
                    <p>
                      By encouraging participation in watersports, we can foster a community that embraces the positive impact of these activities on mental health. It's an opportunity to break down stigmas surrounding mental well-being and highlight the transformative potential of immersing oneself in the serenity of the water, promoting a holistic approach to mental health awareness and self-care.
                    </p> 
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl uppercase text-center pb-2">
                    Protecting our oceans
                  </h4>
                  <div className="text-center space-y-1">
                    <p>
                      Protecting our oceans is a paramount responsibility for every inhabitant of this planet. As vital sources of biodiversity and climate regulation, oceans sustain life on Earth. 
                    </p>
                    <p>
                      To ensure their well-being, we must adopt sustainable practices, reduce plastic pollution, and combat overfishing. By advocating for marine conservation, supporting initiatives that promote responsible fishing, and raising awareness about the perils of single-use plastics, we contribute to safeguarding the delicate balance of our oceans. 
                    </p>
                    <p>
                      Preserving these vast and mysterious ecosystems is not only an environmental imperative but a collective duty to secure a healthy future for generations to come. Through conscientious choices and global cooperation, we can strive to leave a positive and lasting impact on the oceans that connect us all.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl uppercase text-center pb-2">
                    Living conciously
                  </h4>
                  <div className="text-center space-y-1">
                    <p>
                      Living consciously in the world of windsurf travel involves a mindful connection with both nature and community. Embracing sustainable practices, such as minimizing carbon footprints and respecting local ecosystems, becomes integral to the windsurfer's lifestyle. 
                    </p>
                    <p>
                      By immersing oneself in the beauty of diverse landscapes and understanding the impact of our actions, a conscious windsurfer strives to preserve the very environments that provide endless adventures. 
                    </p>
                    <p>
                    This mindful approach extends to fostering respectful relationships with the communities encountered along the way, promoting cultural understanding and responsible tourism. In the realm of windsurfing, living consciously is not just a personal philosophy but a commitment to safeguarding the vibrant destinations that make each journey unforgettable.
                    </p>
                  </div>
                </div>

              </div>

              <div className='w-full h-96 md:h-full bg-center bg-cover' style={{
                backgroundImage: `url(${"images/mastheads/homepage/wedding-01.jpg"})`,
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
