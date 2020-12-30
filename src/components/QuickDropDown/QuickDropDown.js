import React from 'react';
const QuickDropDown = ({
    handleSubmit, query, setQuery
})=>(
    <form className="dropdown-container" onSubmit={(e)=>handleSubmit(e)}>
            <label className ="label-container">
              Quick pick a city:
              <select className="selection-list" value={query}  onChange={(e) => setQuery(e.target.value)}>
                <option value="">-</option>
                <option value="new york">New York</option>
                <option value="los angeles">Los Angeles</option>
                <option value="miami">Miami</option>
                <option value="houston">Houston</option>
                <option value="sydney">Sydney</option>
                <option value="london">London</option> 
                <option value="Mumbai">Mumbai</option>
                <option value="shanghai">Shanghai</option>
              </select>
            </label>
            <input type="submit" value="Check" className="check-btn"/>
          </form>
)

export default QuickDropDown
