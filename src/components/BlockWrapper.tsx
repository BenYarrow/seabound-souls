import React, { ReactNode } from 'react';

interface BlockWrapperProps {
    children: ReactNode;
    invert?: boolean;
    customClasses?: string;
    padded?: boolean;
    container?: boolean;
    relative?: boolean;
    noBackground?: boolean;
}

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses,
    padded = true,
    container = true,
    relative = true,
    noBackground = false
}: BlockWrapperProps) => {

    const containerClasses = container ? 'container mx-auto' : '';

    const classes = [
        padded && 'pt-8 lg:pt-12 pb-8 lg:pb-12',
        invert && !noBackground ? 'bg-gradient-to-b from-blue to-blue-darker' : 'bg-white',
        customClasses && customClasses,
        relative && 'relative',
        containerClasses
    ].filter(Boolean).join(' ');

    return (
        <section className={classes}>
            <div>
                {children}
            </div>
        </section>
    );
}

export default BlockWrapper;
