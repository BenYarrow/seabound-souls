import React from "react";
import { Helmet } from "react-helmet";
import { metaData } from "../Data/site-data";

interface SiteHelmetProps {
  customKeyWords?: string | string[];
  customContent?: string | string[];
  preloadMastheadSrc?: string;
}

const SiteHelmet = ({
  customKeyWords,
  customContent,
  preloadMastheadSrc,
}: SiteHelmetProps) => {
  return (
    <Helmet>
      <title>{metaData.siteName}</title>
      <meta name="keywords" content={metaData.siteMetaKeyWords} />
      <meta name="description" content={metaData.siteMetaContent} />
      <meta name="author" content="Seabound Souls" />

      {preloadMastheadSrc && (
        <link rel="preload" href={preloadMastheadSrc} as="image" />
      )}

      {Array.isArray(customKeyWords) ? (
        customKeyWords.map((keyWord, index) => (
          <meta key={index} name="keywords" content={keyWord} />
        ))
      ) : (
        <meta name="keywords" content={customKeyWords} />
      )}

      {Array.isArray(customContent) ? (
        customContent.map((content, index) => (
          <meta key={index} name="description" content={content} />
        ))
      ) : (
        <meta name="description" content={customContent} />
      )}
    </Helmet>
  );
};

export default SiteHelmet;
