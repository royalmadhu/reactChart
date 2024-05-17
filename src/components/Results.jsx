import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Results({ data }) {
  // console.log("final", data);

  return (
    <div className='mt-32'>
      <h2 className='ml-8 mb-4 text-2xl font-bold'>Time Vs RPM</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="RPM" stroke="#8884d8" />
      </LineChart>
      <h2 className='ml-8 mb-4 text-2xl font-bold'>Time Vs Torque (Nm)</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Torque (Nm)" stroke="#8884d8" />
      </LineChart>
      <h2 className='ml-8 mb-4 text-2xl font-bold'>Time Vs Hookload (kg)</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Hookload (kg)" stroke="#8884d8" />
      </LineChart>
      <h2 className='ml-8 mb-4 text-2xl font-bold'>Time Vs Mudflow (L/min)</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Mudflow (L/min)" stroke="#8884d8" />
      </LineChart>
      <h2 className='ml-8 mb-4 text-2xl font-bold'>Time Vs Mud Pressure (MPa)</h2>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Mud Pressure (MPa)" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Results;
