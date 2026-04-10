import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <h2>Task data</h2>
      <input type="text" placeholder="Enter task data" />
      <button>Add task</button>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
      <input type = "file" placeholder="Upload file" />
      <button>Upload</button>
      <p>file uploaded successfully</p>
      "file" value = {"fileee.txt"} onChange = {handleFileChange}
      
      

    </div>
  );
}

export default App;
