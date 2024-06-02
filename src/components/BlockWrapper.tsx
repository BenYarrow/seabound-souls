import React, { ReactNode } from 'react';

interface BlockWrapperProps {
    children: ReactNode;
    invert?: boolean;
    customClasses?: string;
    padded?: boolean;
    container?: boolean;
    relative?: boolean;
}

const BlockWrapper = ({
    children, 
    invert = false,
    customClasses,
    padded = true,
    container = true,
    relative = true,
}: BlockWrapperProps) => {

    const containerClasses = container ? 'container mx-auto' : '';

    const classes = [
        padded && 'pt-8  pb-8 lg:pb-12',
        invert ? 'bg-blue' : 'bg-white',
        customClasses && customClasses,
        relative && 'relative',
    ].filter(Boolean).join(' ');

    return (
        <section className={classes}>
            <div className={containerClasses}>
                {children}
            </div>
        </section>
    );
}

export default BlockWrapper;
