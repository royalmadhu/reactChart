import React, { useState } from "react";
import "./App.css";
import "./style.css";
import UploadForm from "./components/Forms/UploadForm";
import DataSummary from "./components/DataSummary";
import Results from "./components/Results";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Copyright from "./components/Copyright";
import Home from "./components/Home";

function App() {
  const [resultData, setResultData] = useState(null);

  const handleDataUpload = (data) => {
    setResultData(data);
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dataSummary"
              element={<Results data={resultData} />}
            />
            <Route
              path="/uploadForm"
              element={<UploadForm onDataUpload={handleDataUpload} />}
            />
            <Route path="/results" element={<DataSummary />} />
          </Routes>
        </div>
      </div>
      <Copyright />
    </Router>
  );
}

export default App;
