import React from 'react';
import { checkContentFormat, defaultProseClasses } from '../helpers/functions';

const Text = ({ 
    title, 
    subtitle,
    content = [], 
    invert,
    centredText = false,
    centreHeading = false,
    lineClamp,
}) => {
  
  const blockContent = checkContentFormat(content) 

  return (
      <div className={defaultProseClasses({ invert, centredText, centreHeading })}>

        {title && <h2>{title}</h2>}

        {subtitle && <h3>{subtitle}</h3>}

        {blockContent && blockContent.map((item, index) => (
            <div key={index}>
              {typeof item === 'string' || Array.isArray(item) ? (
                <p className={lineClamp ? lineClamp : ''}>{item}</p>
              ) : typeof item === 'function' ? (
                item()
              ) : (
                null
              )}
            </div>
          ))}
      </div>
  );
};

export default Text;
