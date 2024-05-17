import React, { useState } from "react";
import "./App.css";
import "./style.css";
import UploadForm from "./components/Forms/UploadForm";
import DataSummary from "./components/DataSummary";
import Results from "./components/Results";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [resultData, setResultData] = useState(null);

  const handleDataUpload = (data) => {
    setResultData(data);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<UploadForm onDataUpload={handleDataUpload} />}
            />
            <Route path="/dataSummary" element={<DataSummary />} />
            <Route path="/results" element={<Results data={resultData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
