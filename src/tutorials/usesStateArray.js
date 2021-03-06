// import React from "react";
// import {data} from "./data,js";
//
// const UsesStateArray = () => {
//
//     const [people, setPeople] = React.useState(data);
//     const removeItem = (id)=>{
//         let newPeople = people.filter((person)=>person.id !==id);
//         setPeople(newPeople);
//     }
//
//
//     return <>{people.map((person) => {
//         const {id, name} = person;
//         return <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={()=>removeItem(id)}>Remove</button>
//         </div>
//
//     })}
//         <button className='btn' onClick={() => setPeople([])}>Clear items</button>
//
//     </>
//
// }
// export default UsesStateArray;

import React from "react";
import {data} from './data,js'

const UsesStateArray = () => {
    const [people, setPeople] = React.useState(data);
    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }
    return <>
        {people.map((person) => {
            const {id, name} = person;
            return <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={() => removeItem(id)}>Remove item</button>

            </div>
        })}
        <button onClick={() => setPeople([])}>Clear items</button>

    </>

}
export default UsesStateArray;