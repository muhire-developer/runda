import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Student from './Student';
import Studentcreate from './Studentcreate';
import Updatestudent from './Updatestudent';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Student />} />
  <Route path="/create" element={<Studentcreate />} />
  <Route path="/update/:id" element={<Updatestudent />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
