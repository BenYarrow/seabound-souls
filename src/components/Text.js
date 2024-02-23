import React from 'react';

const Text = ({ 
    title, 
    subTitle,
    content = [], 
    invert,
    centredText = false,
    largeHeading,
    centreHeading = false,
}) => {

  
  
  const classes = [
    'prose prose-headings:uppercase prose-a:text-blue prose-a:font-bold prose-headings:mt-0 max-w-6xl prose-h3:text-2xl',
    invert ? 'prose-headings:text-white prose-p:text-white prose-a:text-white' : 'prose-headings:text-blue prose-p:text-blue prose-a:text-blue',
    centredText && 'prose-p:text-center',
    centreHeading && 'prose-h2:text-center'
  ].join(' ');

  return (
    <>
      {content.length > 0 && (
        <div className={classes}>
          
            {title && <h3>{title}</h3>}

            {subTitle && <h4>{subTitle}</h4>}

            {content.map((item, index) => (
                <div key={index}>
                  {typeof item === 'string' || Array.isArray(item) ? (
                    <p>{item}</p>
                  ) : typeof item === 'function' ? (
                    item()
                  ) : (
                    null
                  )}
                </div>
              ))}
          </div>
        )}
    </>
  );
};

export default Text;
