import React, { useState } from 'react';
import data from '../form_configuration.json';
import InputHandler from './InputHandler';

function getPage(pageNum){
    let value;
    switch(pageNum){
        case 0:
            value = "basic_info"
            break;
        case 1:
            value = "personal_info"
            break;
        case 2:
            value = "job_details"
            break;
        default:
            value = "basic_info"
            break;
    }
    return value;
}


function FormComponent() {

    let formVal = {}
    for(let i=0; i<3; i=i+1){
        let component = getPage(i);
        let nameVals = data[component].Fields.map( (item) => item.name )
        let namedObject = {}
        for (const name of nameVals) {
            namedObject[name] = ""
        }
        formVal[component] = namedObject;
    }

    console.log(formVal)
}

export default FormComponent;


//     const maxVal = 3;
//     const [currentPage, setCurrentPage] = useState(0);
//     const val = getPage(currentPage);
//     let nameVals = data[val];
//     const namesList = nameVals.Fields.map((item) => item.name);

//     const nameObject = {};
//     for (const name of namesList) {
//         nameObject[name] = "";
//     }
//     const [ userData, setUserData ] = useState({
//         basicInfo: {},
//         personalInfo: {},
//         jobDetails: {}
//     });

//     const incrementCount = () => {
//         if(currentPage<maxVal-1){
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const decrementCount = () => {
//         if(currentPage>0) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleSubmit = (e) => { 
//         e.preventDefault();
//       }
    
//     const onChange = (e) => {
//         setUserData((prevState) => ({
//             ...prevState,
//             [val]: {
//               ...prevState[val],
//               [e.target.name]: e.target.value,
//             },
//           }));
//     }
    
//   return (
//     <form onSubmit={handleSubmit}>
//         <div>
//             <InputHandler data={val} onChange={onChange}/>
//             <button onClick={decrementCount}>Prev</button>
//             <button onClick={incrementCount}>Next</button>
//         </div>
//     </form>
//   );
// }

// export default FormComponent;
