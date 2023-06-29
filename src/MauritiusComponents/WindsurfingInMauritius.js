import React from 'react'
import {blogs} from '../Data/Blogs'
import WindsurfingIn from '../DestComponents//BlogComponents/WindsurfingIn'


let windsurfingInMauritius = blogs.find(blog => blog.blogTitle === 'windsurfing in mauritius')

const WindsurfingInMauritius = () => {
  return(
    <div>
      {windsurfingInMauritius.blogData.map(content => {
        return(
          <div>
            <WindsurfingIn 
              content={content}
            />
          </div>
        )
      })}
      
      
    </div>
  )
}

export default WindsurfingInMauritius