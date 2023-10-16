import React, {useState} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import components
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

// renders components ColorList, NewColorForm or Color depending on which of their paths match the url 
function Routes() {
    const initialColors =  {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
   
    // set piece of state 'colors' initally to initalColors {red: '#FF0000', green: '#00FF00', blue: '#0000FF'}
    const [colors, updateColors] = useState(initialColors);
   
    // function that updates the piece of state 'colors' when form is submitted. Resets state ('colors') by creating a new array 'prevColors' with all the existing colors in 'colors' (here called prevColors) as well as the new object with the key/value pairs 'name' and 'hex' (created when user enters new color in form) of the new color added 
    function addColor(newColorObj) {
        updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
    }
    
    // function that renders the Color component with props, hex and color passed in
    function renderCurrentColor(props) {
        // 'color' is the color in the url parameter
        const { color } = props.match.params;
       
        // 'hex' is the hex value in piece of state 'colors' object
        const hex = colors[color];
      
        // render the Color component with props and hex and color (from url) passed in
        return <Color {...props} hex={hex} color={color} />;
      };
    
    return (
        <Switch>
            {/* Route renders ColorList component (with colors={colors} passed in as a prop) when path exactly matches "/colors" */}
            <Route exact path="/colors">
                <ColorList colors={colors} />
            </Route>
            {/* Route renders NewColorForm component (with function addColor={addColor} passed in as a prop) when path exactly matches "/colors/new" */}
            <Route exact path="/colors/new">
                <NewColorForm addColor={addColor} />
            </Route>
            {/* Route renders renderCurrentColor() (which includes rendering Color component) when path matches "/colors/:color" */}
            <Route path="/colors/:color" render={renderCurrentColor}/>
            {/* redirect to the home page ("/colors") if user tries to go to a url other than the ones above */}
            <Redirect to="/colors" />
        </Switch>
  );
}

export default Routes;