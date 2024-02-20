import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const SpotGuideAreaChart = ({ data }) => {
  const formatTooltip = (value, name) => {
    if (name === 'maxWindSpeed') {
      return [`Maximum Wind Speed: ${value}`]; // Corrected label for maximum wind speed
    }
    if (name === 'averageWindSpeed') {
      return [`Average Wind Speed: ${value}`]; // Corrected label for average wind speed
    }
  }

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
              <defs>
                <linearGradient id="maxWindSpeedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06637B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06637B" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="averageWindSpeedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#97C9CE" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#97C9CE" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="maxWindSpeed" fill="url(#maxWindSpeedGradient)" stroke="#06637B" />
              <Area type="monotone" dataKey="averageWindSpeed" fill="url(#averageWindSpeedGradient)" stroke="#97C9CE" />
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
