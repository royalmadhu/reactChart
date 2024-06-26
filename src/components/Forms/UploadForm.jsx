import React, { useState, useEffect } from 'react';
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import imageCover from '../../img/ImageCover.jpeg';

function UploadForm({ onDataUpload }) {
  const [machine, setMachine] = useState('');
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();


  const handleMachineChange = (event) => {
    setMachine(event.target.value);
  };

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    setFile(e.target.files[0])
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }
  useEffect(() => {
      onDataUpload(data)
  }, [data]);


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
     setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
       const response = await fetch('http://localhost:5001/upload', {
        method: 'POST',
        body: formData
      });
      const responseData = await response.json();
      console.log("test of api",responseData);
      setTimeout(() => {
        setLoading(false); 
        navigate('/dataSummary');
      }, 10000);

    } catch (error) {
      console.error('Error:', error);
    }
       navigate('/dataSummary');
  };

  return (
    <div>
      <img src={imageCover} className="w-full mb-2" alt="Description of image 1" style={{ width: '100%' }} />
      <div className="container mx-auto w-1/2">
        <form onSubmit={handleSubmit} className="mx-auto">
          {loading && <Loader />}
          <h1 className="text-2xl font-bold mb-4 text-center mt-4">Predictive Maintenance Data Upload</h1>

          <div className="mb-4">
            <label htmlFor="machine" className="block font-semibold mb-2 text-left">Select Machine:</label>
            <select id="machine" value={machine} onChange={handleMachineChange} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select...</option>
              <option value="machine1">Machine 1</option>
              <option value="machine2">Machine 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block font-semibold mb-2 text-left">Upload Data File:</label>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block font-semibold mb-2 text-left">Start Date:</label>
            <input id="startDate" type="date" value={startDate} onChange={handleStartDateChange} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block font-semibold mb-2 text-left">End Date:</label>
            <input id="endDate" type="date" value={endDate} onChange={handleEndDateChange} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <button type="submit" className="w-full bg-sky-900 text-white font-semibold py-2 px-4 rounded">Upload Data</button>
          <div className='p-16'></div>
        </form>
      </div>
    </div>
  );
}

export default UploadForm;
