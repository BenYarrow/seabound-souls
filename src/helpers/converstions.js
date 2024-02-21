const mpsToKnots = (mps) => {
    const conversionFactor = 1.94384;
    const calculatedResult = Math.round(mps * conversionFactor)
    return `${calculatedResult} knts`;
}

export {
    mpsToKnots
}