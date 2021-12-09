import axios from 'axios';
import react, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router';


const NewForm = (props) => {
  console.log(props)
  const { addState } = props
  const [name, setName] = useState(props.name ? props.name : "");
  const [heatIndex, setheatIndex] = useState(props.heatIndex ? props.heatIndex : "");
  let navigate = useNavigate();
  const [states, setStates] = useState([])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // if props.id 
    // return edit function
    // else 
    return addState({name: name, heatIndex: heatIndex})
    };
  
    return (
    <div>
      <h4>Toggle / Here</h4>
      <h3>{props.id ? "edit" : "add"} State</h3>
      <form>
        <p>Name:</p>
           <input required value={name} onChange={(e)=>setName(e.target.value)}/>
            <p>heatIndex:</p>
           <input required value={heatIndex} onChange={(e)=>setheatIndex(e.target.value)}/>
          <button onClick={handleSubmit}>{props.id ? "edit" : "add"}</button>
       </form>

    </div>
  )
}
export default NewForm;