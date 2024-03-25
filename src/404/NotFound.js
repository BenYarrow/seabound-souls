import React from 'react'
import { Link } from 'react-router-dom'
import BlockWrapper from '../components/BlockWrapper'
import Text from '../components/Text'

const NotFound = () => {
  return (
    <BlockWrapper>
        <div className='flex flex-col items-center gap-y-8'>
            <div>
                <h1 className="text-3xl flex flex-col items-center gap-y-4 py-4">
                    <span className="text-6xl text-center">
                        404
                    </span>
                    <span className="block text-center uppercase">
                        Page not found
                    </span>
                </h1>
                <Text centredText 
                    content={[
                        "The page you are loking for might have been removed, had its name changed or is temporarily unavailable.", 
                        () => <p>If you're not sure how you got here, please head back to the <Link to="/">homepage</Link> to try again</p>,
                        () => <p>If this issue persists, please navigate to our <Link to="/contact-us">contact page</Link> and let us know what youre experiencing, and we will look to resolve the issue as soon as possible.</p>
                ]}/>
            </div>
        </div>
    </BlockWrapper>
  )
}

export default NotFound