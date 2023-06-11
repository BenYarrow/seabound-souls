import React from 'react'
import {blogs} from '../Data/Blogs'
import ThingsToDo from '../DestComponents/BlogComponents/ThingsToDo'

let thingsToDoInMauritius = blogs.find(blog => blog.blogTitle === 'things to do in mauritius')

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