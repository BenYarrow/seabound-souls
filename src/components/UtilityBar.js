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
                    <div className='container mx-auto'>
                        <div className="w-full h-full flex justify-between ">
                            {title && (
                                <h3 className="h-12 lg:h-16 flex items-center text-lg lg:text-xl font-bold">
                                    {title}
                                </h3>
                            )}
                            <button onClick={() => setIsOpen(!isOpen)} className="absolute right-0 bg-blue-darker -translate-y-full top-0 px-3 py-1.5 lg:px-4 lg:py-2 aspect-square">
                                <FontAwesomeIcon icon={faChevronUp} className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`} />
                            </button>
                        </div>
                    </div>
                        <AnimateHeight 
                            duration={300}
                            height={isOpen  ? 'auto' : 0}
                        >
                            {children}
                        </AnimateHeight>
                </div>
            )}
        </>
    );
}

export default UtilityBar;
