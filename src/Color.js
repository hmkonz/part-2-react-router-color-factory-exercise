import React from 'react';
import { useHistory, Link } from "react-router-dom";
import "./Color.css";

// ******** Why is color an object? When passed in when Color is rendered in Routes, color is a string ***************

// pass in 'color', defined in renderCurrentColor() function. When this function is rendered in Routes component, the Color component is rendered inside of it with 'color' passed in as a prop 
function Color (color) {
    // The 'useHistory' hook gives access to the 'history' object, giving access to several functions to navigate the page (go forward, go backward, push, etc). 'history.push' pushes a path to the history stack so can keep track of the browser's history and redirects to the url being pushed
    const history = useHistory();

    // if try to navigate to a color page that doesn't exist (i.e. /colors/blargh where hex is undefined), use history to redirect to home page
    if (!color.hex) {
        // redirects to homepage
        history.push("/colors");
        
    }
    return (
        <div className='Color' style={{ backgroundColor: color.hex }}>
            <h1>THIS IS {color.color} </h1>
            <h3>ISN'T IT PRETTY!!</h3>
            <p><Link to="/colors">Go Back</Link></p>
            
        </div>
      
    )
}

export default Color;


