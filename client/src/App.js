import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import Projects from './Projects.js';


function App() {
  const [projectData, setProjectData] = useState([])
  console.log('projectData: ', projectData)
  useEffect(() => {
    axios.get("http://localhost:5000/projects/1")
      .then(response => {
        console.log("response.data: ", response.data);
        setProjectData(response.data.results);
      })
      .catch(error =>{
        console.log("Data was not returned,", error)
      })
  },[])
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Projects/>
    </div>
  );
}

export default App;
