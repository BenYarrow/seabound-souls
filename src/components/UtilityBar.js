import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const UtilityBar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false)

    const wrapperClasses = [
        'w-full fixed bottom-0 bg-white-darker z-50 transition',
        isOpen ? 'h-[80vh]' : 'h-12'
    ].filter(Boolean).join(' ')
    console.log(isOpen)
  return (
    <>
        {children && (

        <div className={wrapperClasses}>
            <div className="w-full h-full flex justify-between container mx-auto">
                <h3>
                    Live weather data
                </h3>
                <button onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 bg-blue aspect-square">
                    <FontAwesomeIcon icon={faChevronUp} className="text-white"/>
                </button>
            </div>
            {isOpen && (      
                <div>
                    {children}
                </div>
                )}
        </div>
        )}
    </>
  )
}

export default UtilityBar