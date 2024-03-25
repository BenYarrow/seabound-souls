import React from 'react'
import BlockWrapper from '../components/BlockWrapper'
import Text from '../components/Text'
import Title from '../components/Title'

const NotFound = () => {
  return (
    <BlockWrapper>
        <Title title="Page Not Fund" h1/>
        <Text subTitle="Unfortunately the page cannot be found right now" content={["Please check the url and try again"]}/>
    </BlockWrapper>
  )
}

export default NotFound