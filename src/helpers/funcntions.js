const mpsToKnotsFormatter = (mps) => {
    const conversionFactor = 1.94384;
    const calculatedResult = Math.round(mps * conversionFactor)
    return `${calculatedResult} knts`;
}

const tempFormatter = (temp) => {
    const roundedTemp = Math.round(temp)
    return `${roundedTemp} °C`
}

const checkContentFormat = (content) => {
    if (Array.isArray(content)) {
        return content
    } else {
        return [content]
    }
}   

export {
    mpsToKnotsFormatter,
    tempFormatter,
    checkContentFormat
}
