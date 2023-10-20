import React from 'react'

const BulletsAndImage = (props) => {

    const listData = [
        {
            title: props.titleOne ?? null, 
            link: props.linkOne ?? null,
        },
        {
            title: props.titleTwo ?? null, 
            link: props.linkTwo ?? null,
        },
        {
            title: props.titleThree ?? null, 
            link: props.linkThree ?? null,
        },
        {
            title: props.titleFour ?? null, 
            link: props.linkFour ?? null,
        },
        {
            title: props.titleFive ?? null, 
            link: props.linkFive ?? null,
        },
        {
            title: props.titleSix ?? null, 
            link: props.linkSix ?? null,
        },
        {
            title: props.titleSeven ?? null, 
            link: props.linkSeven ?? null,
        },
        {
            title: props.titleEight ?? null, 
            link: props.linkEight ?? null,
        }
    ]
    
    const reverse = props.reverse ?? 'false'

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 '>
        {props.image && (
            <div className={`${reverse === 'true' ? 'order-last' : ''} w-full h-96 md:h-full bg-center bg-cover overflow-hidden`}>
                <div className='w-full h-full bg-center bg-cover hover:scale-105 transition duration-300' 
                    style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundRepeat: "no-repeat",
                        }}
                    > 
                </div>
            </div>
        )}

        <div className='flex flex-col'>
            <h4 className='text-left text-2xl lg:text-3xl font-bold pb-8'>
                {props.title}
            </h4>
            <div >
                <div className='flex flex-col space-y-2'>
                    <p>
                        {props.intro}
                    </p>
                    <ul className="pl-12 flex flex-col space-y-2">
                        {listData.map((list, index) => {
                            return (
                                <>
                                    {list.title != null &&  (
                                        <li key={index} className='list-disc'>
                                            {list.link != null ? (
                                                <a href={list.link} target="_blank" rel="noreferrer" className='font-bold hover:underline text-blue-lighter'>
                                                    {list.title}
                                                </a>
                                            ) : (
                                                <p key={index}>
                                                    {list.title}
                                                </p>
                                            )}
                                        </li>
                                    )}
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BulletsAndImage