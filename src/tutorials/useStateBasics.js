// import React, {useState} from "react";
// //useState function
// const UseStateBasic = ()=>{
//     // console.log(useState('hello world'));
//     // const value = useState(1)[0];
//     // const handler = useState(1)[1];
//     // console.log(value, handler);
//     //component name must be uppercase
//     //must be in the function, component body
//     //cannot call conditionally
//     const[text,setText] = useState('random title');
//     const handleClick = ()=>{
//         if(text === 'random title'){
//             setText('hello');
//         }else{
//             setText('random title');
//         }
//     }
//     return <React.Fragment>
//         <h1>{text}</h1>
//         <button className='btn' onClick={handleClick}>Change title</button>
//     </React.Fragment>
// }
// export default UseStateBasic;

import React, {useState} from "react";

const UseStateBasics = ()=>{
    const[text, setText] = useState('random title');
    const handleClick = ()=>{
        if(text === 'random title'){
            setText("hi");
        }
    }
    return <>
        <h4>{text}</h4>
        <button onClick={handleClick}>Click to change text</button>
    </>
}
export default UseStateBasics;
