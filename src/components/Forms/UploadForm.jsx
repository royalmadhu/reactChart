import React, { useState,useEffect } from 'react';
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader';

function UploadForm({ onDataUpload }) {
  const [machine, setMachine] = useState('');
  const [file, setFile] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  let navigate = useNavigate();
 

  const handleMachineChange = (event) => {
    setMachine(event.target.value);
  };

  const handleFileUpload = (e) => {
    setLoading(true);
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
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
    if (data.length > 0) {
      setLoading(false);
      onDataUpload(data)
    }
  }, [data]);
 

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/results');
    try {
      const formData = new FormData();
      formData.append('machine', machine);
      formData.append('file', file);
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16">
    { (loading) && <Loader />}
    <h1 className="text-2xl font-bold mb-4">Predictive Maintenance Data Upload</h1>

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

    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded">Upload Data</button>
    <div className='p-16'></div>
  </form>
  );
}

export default UploadForm;
