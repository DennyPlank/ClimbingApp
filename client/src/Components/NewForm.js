import axios from 'axios';
import react, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';


const NewForm = (props) => {
  const params = useParams();
  const [state, setState] = useState([])
  const [name, setName] = useState([]);
  const [heatIndex, setheatIndex] = useState([]);
  let navigate = useNavigate();
  const [states, setStates] = useState([])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit hit")
    let newState = {name: name, heatIndex: heatIndex}
     let res = await axios.post(`/api/states`, newState);
     setStates([newState, ...states])
    };
  
    return (
    <div>
      <h4>Toggle / Here</h4>
      <h3>Add a new State</h3>
      <form>
      <p>Name:</p>
        <input required value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>heatIndex:</p>
        <input required value={heatIndex} onChange={(e)=>setheatIndex(e.target.value)}/>
       <button onClick={handleSubmit}>Add</button>

     </form>

    </div>
  )
}
export default NewForm;