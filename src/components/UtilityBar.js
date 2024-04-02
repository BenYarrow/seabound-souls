import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import AnimateHeight from 'react-animate-height'

const UtilityBar = ({ children, title, isOpen, setIsOpen }) => {

    const wrapperClasses = [
        'w-full fixed bottom-0 bg-gradient-to-r from-blue to-blue-darker z-50 transition text-white',
    ].join(' ');

    return (
        <>
            {children && (
                <div className={wrapperClasses}>
                    <div className=''>
                        <div className="w-full h-full flex justify-between container mx-auto">
                            {title && (
                                <h3 className="h-16 flex items-center">
                                    {title}
                                </h3>
                            )}
                            <button onClick={() => setIsOpen(!isOpen)} className="absolute right-0 bg-blue-darker -translate-y-full top-0 h-8 w-8 aspect-square">
                                <FontAwesomeIcon icon={faChevronUp} className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`} />
                            </button>
                        </div>
                        
                        <AnimateHeight 
                            duration={300}
                            height={isOpen  ? 'auto' : 0}
                        >
                            {children}
                        </AnimateHeight>
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default UtilityBar;
