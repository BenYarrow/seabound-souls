import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import BlockWrapper from '../BlockWrapper';

// In the context of the Recharts library and the provided code, uv stands for "ultraviolet." 
//  However, in this context, it seems to be used as a generic data property rather than specifically representing ultraviolet data.
const data = [
  { 
    month: 'Jan', averageWindSpeed: 15, averageTemperature: 18,
  },
  { 
    month: 'Feb', averageWindSpeed: 12, averageTemperature: 19,
  },
  { 
    month: 'Mar', averageWindSpeed: 18, averageTemperature: 22,
  },
  { 
    month: 'Apr', averageWindSpeed: 22, averageTemperature: 26,
  },
  { 
    month: 'May', averageWindSpeed: 24, averageTemperature: 28,
  },
  { 
    month: 'Jun', averageWindSpeed: 32, averageTemperature: 30,
  },
  { 
    month: 'Jul', averageWindSpeed: 36, averageTemperature: 32,
  },
  { 
    month: 'Aug', averageWindSpeed: 29, averageTemperature: 29,
  },
  { 
    month: 'Sep', averageWindSpeed: 22, averageTemperature: 26,
  },
  { 
    month: 'Oct', averageWindSpeed: 18, averageTemperature: 23,
  },
  { 
    month: 'Nov', averageWindSpeed: 12, averageTemperature: 18,
  },
  { 
    month: 'Dec', averageWindSpeed: 14, averageTemperature: 16,
  },
];

// This is displaying wind and temperature, note the key is the same, so there is nothing to differentiate
// between knots and degrees, a seperate chart will be needed for this

const SpotGuideLineChart = () => {
  return (
    <BlockWrapper>
      <LineChart 
        width={1200} 
        height={400} 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <Line type="monotone" dataKey="averageWindSpeed" stroke="#97C9CE" />
        <Line type="monotone" dataKey="averageTemperature" stroke="#ff0000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="month" label={{ 
            value: 'Month', 
            dy: 25
          }} />
        <YAxis
          label={{ 
            value: 'Average wind speed (example value)', 
            angle: -90, 
            dx: -20
          }}
        />
        <Tooltip/>
      </LineChart>
    </BlockWrapper>
  )
}

export default SpotGuideLineChart