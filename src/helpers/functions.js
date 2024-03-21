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

const formatUnixTimeInTimeZone = (unixTimestamp, timeZone, timeZoneOffset) => {
    const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
        const options = {
            timeZone: timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
    return date.toLocaleString('en', options);
  }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  


export {
    mpsToKnotsFormatter,
    tempFormatter,
    checkContentFormat,
    formatUnixTimeInTimeZone,
    capitalizeFirstLetter
}
