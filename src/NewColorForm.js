import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import "./NewColorForm.css";

function NewColorForm({addColor}) {
    // initialize piece of state 'formData' with the object {name: "", hex: "#ffffff" }
    const [formInputData, setFormInputData] = useState({name: "", hex:"#ffffff"});
    
    // The 'useHistory' hook gives access to the 'history' object, giving access to several functions to navigate the page (go forward, go backward, push, etc). 'history.push' pushes a path to the history stack so can keep track of the browser's history and redirects to the url being pushed
    const history = useHistory();

    // when a user makes a change to the form inputs, change the piece of state 'formInputData' by creating a new object ('formInputData') that includes all the contents of that object as well as the name:value pair entered in the form inputs
    function handleChange(event) {
        const {name, value} = event.target;
        setFormInputData(formInputData => ({ ...formInputData, [name]: value }));
    }

    // when form is submitted, this function executes the addColor function (defined in the Routes component) and redirects to the homepage
    function handleSubmit(event) {
        event.preventDefault();
        // addColor function is passed in to NewColorForm component when rendered in the Routes component. This function updates the piece of state 'colors' with the key:value pair (name:hex) of the color added in inputs when form is submitted .
        addColor({ [name]: hex })
        // redirect to the homepage
        history.push("/colors")
    }

    // destructure name and hex from piece of state 'formInputData' (i.e. {name: 'pink', hex: '#fb04b9'} => name= 'pink, hex="#fb04b9")
    const {name, hex} = formInputData;
   
    // 'value' in the 'name' input box is set to the initialized piece of state 'name' (name:"") and since it's an empty string, it's the placeholder that will show in the input box 
     // 'value' in the 'hex' input box is set to the initialized piece of state 'hex' (hex:"#ffffff") and this becomes the color of the input box (white)
    return (
        <div className='NewColorForm'>
            <h1>Add a New Color</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label' htmlFor="name">Color Name</label>
                    <input 
                        id= 'name'
                        type='text' 
                        name='name'
                        placeholder='Add a name for the color' 
                        value= {name} 
                        onChange={handleChange}/>
                </div>
                <div>   
                    <label className='hex' htmlFor="hex">Color Hex Value</label>
                    <input
                        id="hex"
                        type="color"
                        name="hex"
                        value= {hex}
                        onChange={handleChange}/>
                </div>     
                <button>Add this color</button>
            </form>
        </div>
    )
}

export default NewColorForm;