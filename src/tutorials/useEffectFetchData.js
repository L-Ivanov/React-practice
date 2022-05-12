// import React, {useState, useEffect} from "react";
//
// const url = 'https://api.github.com/users'
// //infinite loop when we use setUsers cause useEffect runs every time it renders the page
// //second argument
// //async await returns a promise - useEffect cannot return promise
// const UseEffectFetchData = () => {
//     const [users, setUsers] = useState([]);
//
//     const getUsers = async () => {
//         const response = await fetch(url);
//         const users = await response.json();
//         setUsers(users);
//         console.log(users);
//     }
//
//
//     useEffect(() => {
//         getUsers();
//     }, [])
//
//     return <>
//         <h3>GitHub Users</h3>
//         <ul className='users'>
//             {users.map((user) => {
//                 const{id, login,avatar_url, html_url} = user
//                 return <li key={id}>
//                         <img src={avatar_url} alt={login}/>
//                         <div>
//                             <h4>{login}</h4>
//                             <a href = {html_url}>profile</a>
//                         </div>
//                 </li>
//             })}
//         </ul>
//
//     </>
// }
// export default UseEffectFetchData;

import React, {useState, useEffect} from "react";
import userEvent from "@testing-library/user-event";
const url = 'https://api.github.com/users';
const UseEffectFetchData = ()=>{
    const [users, setUsers] = useState([]);
    const getUsers = async()=>{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        console.log(users);

    }
    useEffect(()=>{
        getUsers();
    }, [])
    return <>
        <h3>GitHub Users</h3>
        <ul className='users'>
            {users.map((user)=>{
                const{id, login, avatar_url, html_url} = user;
                return <li key={id}>
                    <img src = {avatar_url} alt = {login}/>
                    <div>
                        <h4>{login}</h4>
                        <a href = {html_url}>profile</a>
                    </div>
                </li>
            })}
        </ul>


    </>
}

export default UseEffectFetchData;


