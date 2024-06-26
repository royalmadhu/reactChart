import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Skeleton() {
  return (
    <div className="skeleton-container">
      <div className="skeleton mt-20 ml-8">
        <h2>No data available...</h2>
      </div>
    </div>
  );
}

function Results({ data }) {
  console.log("final", data);
  if (!data || data.length === 0) {
    return <Skeleton />;
  }
  let modifiedData = [];
  if (data && data.length > 0) {
    const minRPM = Math.min(...data?.map((item) => item?.RPM));
    const startingPoint = minRPM - minRPM * 0.05;

    const maxRPM = Math.max(...data?.map((item) => item?.RPM));
    const endingPoint = maxRPM + maxRPM * 0.05;

    modifiedData = data?.map((item) => ({
      ...item,
      RPM: item?.RPM - startingPoint,
    }));
  }
 let modifiedTorque = [];
  if (data && data.length > 0) {
    const minTorque = Math.min(...data?.map((item) => item['Torque (Nm)']));

    const startingTorque = minTorque - minTorque * 0.001;

    const maxTorque = Math.max(...data?.map((item) => item['Torque (Nm)']));
    const endingTorque = maxTorque;

    modifiedTorque = data?.map((item) => ({
      ...item,
      'Torque (Nm)': item['Torque (Nm)'] - startingTorque,
    }));
  }
let mudflowData = [];
  if (data && data.length > 0) {
    const minTorque = Math.min(...data?.map((item) => item['Mudflow (L/min)']));

    const startingTorque = minTorque - minTorque * 0.001;

    const maxTorque = Math.max(...data?.map((item) => item['Mudflow (L/min)']));
    const endingTorque = maxTorque;

    mudflowData = data?.map((item) => ({
      ...item,
      'Mudflow (L/min)': item['Mudflow (L/min)']- startingTorque,
    }));
  }
let mudPressure = [];
  if (data && data.length > 0) {
    const minTorque = Math.min(...data?.map((item) => item['Mud Pressure (MPa)']));

    const startingTorque = minTorque - minTorque * 0.001;

    const maxTorque = Math.max(...data?.map((item) => item['Mud Pressure (MPa)']));
    const endingTorque = maxTorque;

    mudPressure = data?.map((item) => ({
      ...item,
      'Mud Pressure (MPa)': item['Mud Pressure (MPa)']- startingTorque,
    }));
  }


  return (
    <div className="container mx-auto w-1/2">
      <div className="mt-32">
        <h2 className="ml-8 mb-4 text-2xl font-bold">Time Vs RPM</h2>
        <LineChart width={800} height={400} data={modifiedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="RPM" stroke="#8884d8" />
        </LineChart>
        <h2 className="ml-8 mb-4 text-2xl font-bold">Time Vs Torque (Nm)</h2>
        <LineChart width={800} height={400} data={modifiedTorque}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Torque (Nm)" stroke="#8884d8" />
        </LineChart>
        <h2 className="ml-8 mb-4 text-2xl font-bold">Time Vs Hookload (kg)</h2>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Hookload (kg)" stroke="#8884d8" />
        </LineChart>
        <h2 className="ml-8 mb-4 text-2xl font-bold">
          Time Vs Mudflow (L/min)
        </h2>
        <LineChart width={800} height={400} data={mudflowData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Mudflow (L/min)" stroke="#8884d8" />
        </LineChart>
        <h2 className="ml-8 mb-4 text-2xl font-bold">
          Time Vs Mud Pressure (MPa)
        </h2>
        <LineChart width={800} height={400} data={mudPressure}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Mud Pressure (MPa)" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="pb-16"></div>
    </div>
  );
}

export default Results;
