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

    const maxVal = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const val = getPage(currentPage);
    let nameVals = data[val];

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

    const [ userData, setUserData ] = useState({});

    const handleNext = () => {
        if(currentPage<maxVal-1){
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if(currentPage>0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(JSON.stringify(userData, null, 2));
      }

    const onChange = (e) => {
        console.log(e.target)
        setUserData({ userData, [e.target.name]: e.target.value })
    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <InputHandler data={nameVals} onChange={onChange} section={val} />
                <div>
                <button onClick={handlePrev} class="btn1">Prev</button>
                <button onClick={handleNext} class="btn1">Next</button>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )


}

export default FormComponent;






    
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
