import React, { useState, useEffect,useRef } from 'react';
import image1 from '../img/image0.png'; 
import image2 from '../img/Image2.jpeg';
import image3 from '../img/Image3.jpeg'; 
import image4 from '../img/Image4.jpeg';  
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter} from 'recharts';

function DataSummary() {
  const [accuracyData, setAccuracyData] = useState([]);
  const [pcagraphData, setPcagraphData] = useState([]);
  const [plotFailure, setPlotFailure] = useState([]);
  const [fstimelineData, setFstimelineData] = useState([]);
  useEffect(() => {
    const fetchaccuracyData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getFPAccuracy', {
          
        });
      setAccuracyData(response.data);
        console.log("data for acuracy",response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const pcagraphData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getPcaGraph', {
          
        });
      
      const transformedData = response?.data?.green.map((value, index) => ({
          index,
          green: value,
          red: response?.data?.red[index] !== undefined ? response?.data?.red[index] : null,
        }));
        setPcagraphData(transformedData);
        console.log("data for pc graph",response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const plotfailureData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getPlotFailure', {
          
        });
      setPlotFailure(response.data);
        console.log("data for plot failure acuracy",response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const fstimeData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getFSTimeline', {
          
        });
      setFstimelineData(response.data);
        console.log("data for fs time line",response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };

    fetchaccuracyData();
    pcagraphData();
    plotfailureData();
    fstimeData();
    return () => {
      
    };
  }, []);  
  
  return (
    <div className="container mx-auto px-40">
      <div className='mt-32 w-4/5'>
        <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
        <div className="ml-8">
           <LineChart width={800} height={400} data={fstimelineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stems" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      <div className='mt-32 w-4/5'>
        <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
        <div className="ml-8">
            <LineChart width={800} height={400} data={plotFailure}> 
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Temperature (C)" stroke="#8884d8" />
            <Line type="monotone" dataKey="Pressure (psi)" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Vibration (mm/s)" stroke="#ff6f61" />
            <Scatter dataKey="Failure Flag" fill="red" shape="diamond" />
            </LineChart>
        </div>
      </div>
      <div className='mt-32 w-4/5'>
        <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
        <div className="ml-8">
           <LineChart width={800} height={400} data={pcagraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="green" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="red" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
      {/* <div className='mt-32 w-4/5'>
        <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
        <div className="ml-8">
           <LineChart width={800} height={400} data={accuracyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stems" stroke="#8884d8" />
          </LineChart>
        </div>
      </div> */}
     </div> 
  )
}

export default DataSummary