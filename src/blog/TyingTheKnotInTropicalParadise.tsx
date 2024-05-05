import React from 'react'
import EmbedYoutubeVideo from '../components/EmbedYoutubeVideo'
import Title from '../components/Title'
import Text from '../components/Text'
import BlockWrapper from '../components/BlockWrapper'
import Bulletpoints from '../components/Bulletpoints'

const TyingTheKnotInTropicalParadise = () => {
  return (
    <div>
        {/* <EmbedYoutubeVideo src="https:www.youtube.com/embed/vUo9_iPpqWE?si=tLTGXc9DakoRUB1B&mute=1&showinfo=0&controls=0&loop=1"/> */}
        
        <Title 
            title="Tying the knot in tropical paradise" 
            subtitle="Everything you need to know about getting married in Mauritius." 
            h1 
            centreHeading
        />
        <BlockWrapper invert>
            <Text 
                invert
                content={[
                    "Getting married abroad can be an exciting and memorable experience, especially in a location as beautiful as Mauritius.",
                    "When we began planning our wedding, we imagined our wedding ceremony taking place on the beach, somewhere sunny, warm and windy. After researching a number of destinations, Le Morne, located on the southern tip of Mauritius ticked every box and it was an easy choice for us.",
                    "Whilst the experience was stress-free and exceeded most of our expectations, there are a few things we would do differently if we could. So, if you’re thinking about saying “I do” in Mauritius, here are some useful tips and insights to help ensure your destination wedding is absolutely perfect."
                ]}
            />
        </BlockWrapper>
                
        <Bulletpoints
            title="Legal Requirements"
            intro="Getting legally married in Mauritius is actually very straight forwards. Weddings that are performed by a licensed marriage officer are recognised by UK law.
            The minimum age is 18 years old. There is no residency requirement but it’s recommended to arrive a few days before your wedding day.
            For a civil ceremony, typically, you’ll need to provide the following documents eight weeks ahead of your wedding day:"
            bullets={[
                {
                    title: "Valid passports for both parties",
                },
                {
                    title: "Reissued birth certificates for both partied, that are dated within three months of your intended wedding date",
                },
                {
                    title: "Decree absolute (if either party has been previously married and divorced)",
                },
                {
                    title: "Death Certificate and previous marriage certificate if widowed",
                },
                {
                    title: "Deed Poll (if name has changed) issued by UK Deed Poll Office",
                },
                {
                    title: "Any non-English documentation must to translated into English"
                }
            ]}
        />
        <BlockWrapper invert>
            <Text 
                invert
                content={[
                    "If you're planning a religious ceremony, additional documentation and time constraints may apply, depending on your religion.",
                    "You need to give notice of your intention to marry at the Civil Status Office in Port Louis This should be done at least ten days before the wedding. Most resorts will have a wedding co-ordinator to file the paperwork on your behalf.",
                    "After arriving in Mauritius, both partied need to attend the Civil Status Office and the local registrar’s office to sign the relevant paperwork.",
                    "On your wedding day, you'll need two witnesses present at your ceremony, who must be at least 18 years old and have valid ID. If you choose to elope, your wedding co-ordinator should be able to help organise witnesses for your ceremony."
                ]}
            />
        </BlockWrapper>

        <BlockWrapper>
            <Text 
                title="Planning your perfect day"
                content={[
                    "Many resorts and hotels in Mauritius offer wedding packages that include everything from the ceremony venue to catering and photography. These packages simplify the planning process and ensure that all aspects of your wedding are taken care of.",
                    "We chose to get married at LUX* Le Morne, and found our package could be customised to suit our wishes. Once we arrived in resort, we met with our wedding co-ordinator to pick our flowers and wedding breakfast menu.",
                    "This approach made the process completely stress free, but we found some of the services a little on the basic side. So, if you’re looking for perfection, you may want to research your own vendors such a photographers, videographers, musicians, florists etc. online or on social media, to find the best fit for you.",
                    "We chose to hire the team from Backlight Studio for our wedding photos and video, and we’re so pleased we did! Especially as it was just the two of us and we wanted to capture the special moments to share with our families once we returned home. ",
                    "There are a couple of things we would do differently and organise ourselves given the chance for a do over. These include flowers, which were not to our taste and hiring a hair and make up artist to make for a more relaxing experience."
                ]}
            />
        </BlockWrapper>
       
        <BlockWrapper invert>
            <Text 
                invert 
                title="Location and weather conditions "
                content={[
                    "You’ll be spoilt for choice when it comes to picking a location for your wedding. Mauritius is known for combining breathtaking natural beauty with luxurious amenities and incredible service.",
                    "Le Morne was our first choice, due to the dramatic scenery and amazing windsurfing conditions just a short walk away. However, if you’re not so keen on the breezy conditions, you may want to explore resorts that offer sheltered beaches such as Flic en Flac, Tamarin and Grand Baie.",
                    "The best months to get married for sunny, calm conditions are typically during the drier and cooler months of the year, which coincide with the Mauritian winter. The months of May to October are considered the best time to visit Mauritius for pleasant weather, with lower humidity and minimal rainfall.",
                    "However, if like us you’re looking to take advantage of the windy conditions, July to September would be the best months to get married. "
                ]}
            />
        </BlockWrapper>

        <BlockWrapper>
            <Text 
                title="Budget"
                content={[
                    "In 2023, the average cost of a wedding in the UK was £20,700! Our wedding and two-week luxury all-inclusive honeymoon cost less than half that figure. Even if we had wanted a big white wedding, we simply could not justify spending that amount of money on one day.",
                    "So yes, getting married in Mauritius can be very cost-effective compared to many Western countries. It offers incredible value for money given the destination's beauty, service quality, and overall experience.",
                    "Comprehensive wedding packages offered by most resorts provide excellent value and opting for local suppliers is another good option for a budget friendly wedding.",
                    "However, don’t forget to factor in the cost of accommodation, flights and transfers, for you, your partner, and any guests travelling with you. You can look for deals on flights and consider booking in advance to secure lower fares.",
                    "Ultimately, the cost-effectiveness of your wedding in Mauritius depends on your individual circumstances, priorities, and budgetary constraints. But by carefully planning and making informed choices, you can create a memorable and beautiful wedding experience that aligns with your financial goals."
                ]}
            />
        </BlockWrapper>

        <BlockWrapper invert>
            <Text 
                invert
                title="Other cnosiderations"
                content={[
                    "Whilst having a destination wedding does remove some of the stresses and strains associated with a traditional wedding, tying the knot abroad does present its own set of challenges. Such as language barriers, cultural differences, logistics and the feeling of having limited control over the details.",
                    "For the bride, one of the most exciting moments is choosing your wedding dress. If you’re thinking about getting married in a warmer climate, think about your choice of dress and it’s suitability for your wedding location. When it comes to travelling with your wedding dress, most airlines will allow additional baggage for wedding dresses but it’s reassuring if your dress travels well and can be placed in your hand luggage for safe keeping.",
                    "Finally, as with any wedding, it’s impossible to please everyone. This is especially true for destination weddings when family and friends may not be able to attend due to financial or time constraints. Alternately, you may be thinking about eloping instead. Unfortunately, not everyone will understand the reasons behind your choices. Ultimately, it's crucial to prioritise your own happiness on your special day. After all, it's your moment to cherish, and your choices should reflect what feels most authentic and meaningful to you."
                ]}
            />
        </BlockWrapper>







 





 
    </div>
  )
}

export default TyingTheKnotInTropicalParadise