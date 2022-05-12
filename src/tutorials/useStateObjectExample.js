// import React, {useState} from "react";
//
// const UseStateObjectExample = () => {
//     const [person, setPerson] = useState({name: 'peter', age: 24, message: 'random message'})
//     const [name, setName] = useState("peter");
//     const [age, setAge] = useState(24);
//     const [message, setMessage] = useState("random message");
//     const changeMessage = ()=>{
//         //spread operator
//        // setPerson({...person, message: 'hello world'});
//         setMessage('hello there');
//     };
//
//     return <>
//         <h3>{name}</h3>
//         <h3>{age}</h3>
//         <h3>{message}</h3>
//         <button onClick={changeMessage}>Change message</button>
//     </>
// }
// export default UseStateObjectExample;

import React, {useState} from "react";
const UseStateObjectExample = ()=>{
    const[person, setPerson] = useState({name:"peter", age:35, message: "Hi"});
    const [name, setName] = useState('peter');
    const [age, setAge] = useState(24);
    const [message, setMessage] = useState("hello there");
    const changeMessage = ()=>{
        setPerson({...person, message: "hi"});
        setMessage('hello here');
    }

    return <>
        <h3>{name}</h3>
        <h3>{message}</h3>
        <h3>{age}</h3>
        <h3>{person.message}</h3>
        <button onClick={changeMessage}>Change message</button>
    </>

}
export default UseStateObjectExample;