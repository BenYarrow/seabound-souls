import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SpotGuideAreaChart = ({ data }) => {
  const formatTooltip = (value, name, props) => {
    if (name === 'averageWindSpeed') {
      return [`Average Wind Speed: ${value}`];
    }
  };

  return (
    <>
      {data && (
        <div className="w-full h-80 py-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
              data={data}
              margin={{
                top: 5,
                bottom: 20
              }}
            >
              <Area type="monotone" dataKey="averageWindSpeed" fill="#06637B" stroke="#06637B" />
              <Area type="monotone" dataKey="maxWindSpeed" fill="#97C9CE" stroke="#97C9CE" />
              <CartesianGrid stroke="#97C9CE" strokeDasharray="3 3" />
              <XAxis 
                dataKey="month" 
                label={{ 
                  value: 'Month', 
                  dy: 25,
                  fill: '#06637B'
                }} 
                stroke="#06637B"
              />
              <YAxis
                label={{ 
                  value: 'Avg wind speed (kts)', 
                  angle: -90, 
                  dx: -20,
                  fill: '#06637B' 
                }}
                stroke="#06637B"
              />
              <Tooltip formatter={formatTooltip}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </>
  )
}

export default SpotGuideAreaChart;
