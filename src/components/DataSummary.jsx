import React, { useState, useEffect } from 'react';
import image1 from '../img/image0.png'; 
import image2 from '../img/Image2.jpeg';
import image3 from '../img/Image3.jpeg'; 
import image4 from '../img/Image4.jpeg';  
import axios from 'axios';
import { Line } from 'react-chartjs-2';

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
        console.log(response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const pcagraphData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getPcaGraph', {
          
        });
      setPcagraphData(response.data);
        console.log(response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const plotfailureData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getPlotFailure', {
          
        });
      setPlotFailure(response.data);
        console.log(response.data);
      } catch (error) {
       
        console.error('Error fetching data:', error);
      }
    };
    const fstimeData = async () => {
      try {
        const response = await axios.post('http://localhost:5001/getFSTimeline', {
          
        });
      setFstimelineData(response.data);
        console.log(response.data);
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

  const dates = fstimelineData?.map(item => new Date(item?.date));
  const stems = fstimelineData?.map(item => item?.stems);
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Stems',
        data: stems,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };
  const chartOptions = {
  scales: {
    x: {
      type: 'time', // Use 'time' for time scale
      time: {
        unit: 'month' // Customize as needed
      }
    },
    y: {
      // Customize y-axis options if needed
    }
  }
};
  
  return (
    <div className="container mx-auto px-40">
      <div className='mt-32 w-4/5'>
        <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
        <div className="ml-8">
           {/* <Line data={chartData} options={chartOptions} /> */}
        </div>
      </div>
     </div> 
  )
}

export default DataSummary