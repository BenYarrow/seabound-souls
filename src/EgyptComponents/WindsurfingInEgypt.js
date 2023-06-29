import React from 'react'
import { blogs } from '../Data/Blogs'
import WindsurfingIn from '../DestComponents//BlogComponents/WindsurfingIn'

let windsufingInEgypt = blogs.find(blog => blog.blogTitle === 'windsurfing in egypt')

const WindsurfingInEgypt = () => {
  return (
    <div>
        {windsufingInEgypt.blogData.map(content => (
                <div>
                    <WindsurfingIn
                        content={content}
                    />
                </div>
        ))}
    </div>
  )
}

export default WindsurfingInEgypt