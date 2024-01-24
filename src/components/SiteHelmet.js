import React from 'react'
import { Helmet } from 'react-helmet'
import { metaData } from '../Data/site-data'

const SiteHelmet = ({
    customKeyWords,
    customContent
}) => {
  return (
        <Helmet>
            <title>{metaData.siteName}</title>
            <meta name="keywords" content={metaData.siteMetaKeyWords} />
            <meta name="description" content={metaData.siteMetaContent} />
            
            {customKeyWords && customKeyWords.map((keyWord, index) => (
                <meta key={index} name="keywords" content={keyWord} />
            ))}
            
            <meta name="author" content="Seabound Souls" />
                {customContent && customContent.map((content, index) => (
                    <meta key={index} name="descripton" content={content} />
                ))}
        </Helmet>
    )
}

export default SiteHelmet