import React from 'react';
 import {Link} from "react-router-dom";
 import "./ColorList.css"

// creates a page that shows links of all available colors
 function ColorList({colors}) {
    // takes the keys (called 'colorname') from the object 'colors', maps over them and for every 'colorName' an li with key={colorName} is created with a link called {colorName} that when clicked goes to /colors/{colorName}
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
          <Link to={`/colors/${colorName}`} style= {{color: `${colorName}`}}>{colorName}</Link>
        </li>
      ));

    return (
        <div className="ColorList">
        <header className="ColorList-header">
            <h1 className="ColorList-title">Colors Factory!!</h1>
            <h1>
            <Link to="/colors/new">Add a new color</Link>
            </h1>
        </header>
        <div className="ColorList-color">
            <p>Click on a color below</p>
            <ul>{colorLinks}</ul>
        </div>
        </div>
    );
  }
        
        export default ColorList;
  