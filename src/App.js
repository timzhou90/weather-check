import React, { useState } from "react";
import QuickDropDown from "./components/QuickDropDown/QuickDropDown";
import TextBoxBar from "./components/TextBoxBar/TextBoxBar";
import DisplayTable from "./components/DisplayTable/DiaplayTable";
import keys from "./keys";


const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  
  const handleSubmit = (event) => {
    event.preventDefault()
    if(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery(query);
          setWeather(result);
        });
      }
  }

  const search = (e) => {
    if (query && e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery(query);
          setWeather(result);
        });
    }
  };


  const checkingImage = (weather)=>{
    const temp =  weather.main.temp

    if(temp > 20){
      return "App hot"
    }else if(temp<10){
      return "App cold"
    }else {


    }
    return "App"
  }


  return (
    <>
    <div
      className={
        typeof weather.main != "undefined"
          ? checkingImage(weather)
          : "App"
      }
    >
       
      <main>
        <TextBoxBar setQuery={setQuery}  query = {query}  search= {search}/>
        <div className="search-container">
        <QuickDropDown handleSubmit= {handleSubmit}  query = {query}  setQuery= {setQuery}/>
        <button>temperature</button>
        <button>air quality</button>
        <DisplayTable weather= {weather} />
        </div>
      </main>
      
    </div>

      </>
  );
}

export default App;
