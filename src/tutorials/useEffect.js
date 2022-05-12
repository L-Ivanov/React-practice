// import {useState, useEffect} from "react";
// // by default runs after every re-render
// //cleanup function
// //second parameter
// const UseEffect = () => {
//     const[value, setValue] = useState(0);
//     //we pass callback function in the useEffect
//     //use effect is used when we want to setup a side effect
//     //useEffect doesnt work inside condition (if)
//     //useEffect is hook
//      //in useEffect we pass a list which is list of dependencies (deps),
//     // if [] it will run on the initial render and doesnt run each and every time you click increase +1
//     //if we pass value to the [] it runs ok
//     //if [] is missing - useEffect will run each and every time the component is rendered
//     //if [] is there - the useEffect only runs once with the initial render
//     useEffect(() => {
//         if(value>=1){
//             document.title = `New Messages (${value})`
//         }
//
//
//     }, [value])
//     return <>
//         <h1>{value}</h1>
//         <button className='btn' onClick={()=>(setValue(value+1))}>Increase value</button>
//
//     </>
// }

// export default UseEffect;

import {useState, useEffect} from "react";
const UseEffect = ()=>{
    const [value, setValue] = useState(0);
    useEffect(()=>{
        if(value>=1){
            document.title = `New messages: (${value})`
        }
    }, [value])
    return<>
        <h1>{value}</h1>
        <button type = 'button' onClick={()=>setValue(value+1)}>Increase</button>
    </>

}
export default UseEffect;