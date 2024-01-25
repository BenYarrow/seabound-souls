import React from 'react';

const Text = ({ 
    title, 
    content = [], 
    invert,
}) => {
  const classes = [
    'prose prose-h3:uppercase prose-a:text-blue prose-a:font-bold',
    invert ? 'prose-h3:text-white prose-p:text-white' : 'prose-h3:text-blue prose-p:text-blue',
    'max-w-6xl',
  ].join(' ');

  return (
    <div className={classes}>
      {title && <h3>{title}</h3>}
      {content.length > 0 && (
        <div>
          {content.map((item, index) => (
            <p key={index}>
              {typeof item === 'string' ? (
                item
              ) : (
                item()
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Text;
