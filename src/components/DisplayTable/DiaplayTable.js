import React from 'react';



const DisplayTable = ({weather}) =>{
    const dateBuild = (d) => {
        let date = String(new window.Date());
        date = date.slice(3, 15);
        return date;
      };
   return <>
    {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-container">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date"> {dateBuild(new Date())}</div>
          </div>
          <div className="weather-container">
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
}

export default DisplayTable;