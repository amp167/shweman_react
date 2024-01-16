import './App.css';
import {useState,useEffect} from "react";
import Page from "./Page";


function App() {
  const [data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8800/pages");
        const jsonData = await response.json();
        console.log(jsonData); // logs the data to the console
        setData(jsonData);
      } catch (error) {
        console.log(error, "error"); // logs the error message to the console
      }
    };
    fetchData();
  }, []);

  const [filter,setFilter] = useState([]);
  useEffect(()=>{
    setFilter(data)
  },[data])
  function handleThree(){
     setFilter(data.filter(filterItem=> filterItem.three_star!==''));
  }
  function handleFour(){
    setFilter(data.filter(filterItem=> filterItem.four_star!==''));
  }
  function handleFive(){
    setFilter(data.filter(filterItem=> filterItem.five_star!==''));
  }
  return (
      <div className="App">
        <div className={'my-3'}>
          <a href="/">Home</a>
          <button className={'ms-3'} onClick={() => handleThree()}>Three star</button>
          <button className={'ms-3'} onClick={() => handleFour()}>four star</button>
          <button className={'ms-3'} onClick={() => handleFive()}>five star</button>
        </div>
        <Page filter={filter}/>
      </div>
  );
}

export default App;
