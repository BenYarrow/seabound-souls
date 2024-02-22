const mpsToKnotsFormatter = (mps) => {
    const conversionFactor = 1.94384;
    const calculatedResult = Math.round(mps * conversionFactor)
    return `${calculatedResult} knts`;
}

const tempFormatter = (temp) => {
    const roundedTemp = Math.round(temp)
    return `${roundedTemp} °C`
}

export {
    mpsToKnotsFormatter,
    tempFormatter
}