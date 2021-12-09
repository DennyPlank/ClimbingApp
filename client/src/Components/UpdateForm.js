// import axios from 'axios';
// import react, { useState } from 'react'
// import { Navigate, useNavigate, useParams } from 'react-router';


// const UpdateForm = (props) => {
//   const params = useParams();
//   const [name, setName] = useState([]);
//   const [heatIndex, setheatIndex] = useState([]);
//   let navigate = useNavigate();
//   const [state, setState] = useState([])
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let newState = {name: name, heatIndex: heatIndex}
//      let res = await axios.patch(`/api/states/${params.id}`);
//      setState([newState, ...state])
//      // BAD UX HERE
//      navigate(0)
//     };
  
//     return (
//     <div>
//       <h3>Edit State</h3>
//       <form>
//         <p>Name:</p>
//            <input required value={name} onChange={(e)=>setName(e.target.value)}/>
//             <p>heatIndex:</p>
//            <input required value={heatIndex} onChange={(e)=>setheatIndex(e.target.value)}/>
//           <button onClick={handleSubmit}>Edit</button>
//        </form>

//     </div>
//   )
// }
// export default UpdateForm;