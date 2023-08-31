import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testapi from './Components/Testapi'; // Update the path to Testapi
import AddUserForm from './Components/AddUserForm'; // Update the path to AddUserForm

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Testapi />} />
          <Route path="/addUserForm" element={<AddUserForm />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
