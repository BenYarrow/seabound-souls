const mpsToKnotsFormatter = (mps) => {
    const conversionFactor = 1.94384;
    const calculatedResult = Math.round(mps * conversionFactor)
    return `${calculatedResult} knts`;
}

const mpsToMphFormatter = (mps) => {
    const mph = mps * 2.23694;
    const result = Math.round(mph);
    return `${result} mph`;
}

const tempFormatterFromCelciusToRoundedCelcius = (temp) => {
    const roundedTemp = Math.round(temp);
    return `${roundedTemp} °C`;
}

const tempFormatterFromCelciusToFahrenheit = (temp) => {
    const tempInFahrenheit = (temp * 9/5) + 32;
    const roundedTemp = Math.round(tempInFahrenheit);
    return `${roundedTemp} °F`;
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
  
const fetchWeatherData = async ({weatherUrl, setWeatherData, setIsLoading}) => {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok', response.status, response.statusText);
        }
        const data = await response.json()
        setWeatherData(data);
        setIsLoading(false)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const defaultProseClasses = ({
    invert = false, 
    centredText = false, 
    centreHeading = false, 
    lineClamp = false
}) => [
    'prose lg:prose-lg prose-headings:uppercase prose-a:text-orange prose-a:font-bold prose-headings:mt-0 max-w-none prose-h3:text-xl prose-pt-0 prose-p:pt-0',
    invert ? 'prose-headings:text-white prose-p:text-white prose-a:text-white' : 'prose-headings:text-blue prose-p:text-black prose-a:text-orange',
    centredText && 'prose-p:text-center',
    centreHeading && 'prose-h2:text-center',
    lineClamp ? 'prose-p:line-clamp-4' : ''
  ].filter(Boolean).join(' ');



export {
    mpsToKnotsFormatter,
    mpsToMphFormatter,
    tempFormatterFromCelciusToRoundedCelcius,
    tempFormatterFromCelciusToFahrenheit,
    checkContentFormat,
    formatUnixTimeInTimeZone,
    capitalizeFirstLetter,
    fetchWeatherData,
    defaultProseClasses
}
