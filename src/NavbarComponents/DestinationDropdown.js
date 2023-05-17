import React, {useState} from 'react';

const Dropdown = ({ children }) => {
        const [isHovered, setIsHovered] = useState(false);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
        };
      
        return (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            tabIndex={0} // Make the element focusable
            style={{
              cursor: 'pointer',
              userSelect: 'none',
            }}
            className=''
          >
            {children(isHovered)}
          </div>
        );
      };
           


export default Dropdown;

