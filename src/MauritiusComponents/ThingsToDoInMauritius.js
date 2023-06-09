import React from 'react'
import {blogs} from '../Data/Blogs'
import ThingsToDo from '../DestComponents/BlogComponents/ThingsToDo'

let thingsToDoInMauritius = blogs.find(blog => blog.blogTitle === 'things to do in mauritius')

// const ThingsToDoInMauritius = () => {
//   return (
//     <div>
//           <div>
//             {thingsToDoInMauririuts.blogData.map(content => {
//               return (
//                 <div>
//                   <div className='w-full h-auto text-turquoise font-standard text-base '>
//                     <div id='mauritius-to-do-hero-section'>
//                       <div className='flex justify-center '>
//                           <h2 className='text-center text-turquoise text-xxxl'>
//                             {content.title}
//                           </h2>
//                         </div>
//                       </div>
//                       <div className='bg-turquoise flex justify-center py-4 px-20 '>
//                         <p className='text-center max-w-5xl py-4 rounded-lg text-standard text-xl'>
//                           {content.blogIntro}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationOneTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationOneInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationTwoTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationOneInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationThreeTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationThreeInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationFourTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationFourInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationFiveTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationFiveInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationSixTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationSixInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationSevenTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationSevenInfo}
//                         </p>
//                       </div>
//                       <div className='w-full py-8 px-20 md:px-40 flex flex-col items-center'>
//                         <p className='pb-4 text-xxl'>
//                           {content.recomendationEightTitle}
//                         </p>
//                         <p className='max-w-5xl text-xl text-center'>
//                           {content.recomendationEightInfo}
//                         </p>
//                       </div>




                      
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//     </div>
//   )
// }

const ThingsToDoInMauritius = () => {
  return (
    <div>
      {thingsToDoInMauritius.blogData.map(content => {
        return(
          <div>
            <ThingsToDo content={content} />
          </div>
        )
      })}
    </div>
  )
}


export default ThingsToDoInMauritius