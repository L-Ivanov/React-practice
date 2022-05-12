// import React, {useState} from 'react';
// //short-circuit evaluation
// //ternary operator
//
//
//
// const ConditionRenderingShortCircuit = ()=>{
//     const [text, setText] = useState('');
//     const [isError, setIsError] = useState(false);
//     const firstValue = text || "hello world";//if text is peter it will display peter otherwise hello world
//     const secondValue = text && "hello world"; // if text is peter it will display hello world
//     return<>
//         {/*<h1>{firstValue}</h1>*/}
//         {/*<h1>value:{secondValue}</h1>*/}
//         {/*<h2>Short circuit</h2>*/}
//         {/*{text || <h1>hello world</h1>}*/}
//         <button className = 'btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
//         {isError && <h1>Error...</h1>}
//         {/*{!text && <h1>hello world</h1>}*/}
//         {/*if it is not true then return hello world*/}
//         {isError?<h1>Error</h1>:<h1>No Error</h1>}
//     </>
//
// }
// export default ConditionRenderingShortCircuit;
//


import React,{useState} from "react";
const ConditionRenderingShortCircuit = ()=>{
    const[text, setText] = useState('');
    const [isError, setIsError] = useState(false);
    const firstValue = text || "hello world";
    const secondValue = text && "hello world";
    let a = '';
    return <>
        <button className= 'btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
        {isError?<h1>Error</h1>:<h1>No Error</h1>}
    </>
}
export default ConditionRenderingShortCircuit;

