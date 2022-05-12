// import React, {useEffect, useState} from "react";
// const url = 'https://api.github.com/users/QuincyLarson';
// const ConditionalRendering = ()=>{
//     useEffect(()=>{
//         fetch(url).then((response)=>{
//             if(response.status>=200 && response.status<=299){
//                 return response.json();
//             }else{
//                 setIsLoading(false);
//                 setIsError(true);
//                 throw new Error(response.statusText)
//             }
//         }).then((user)=>{
//             const{login} = user;
//             setUser(login);
//             setIsLoading(false);
//         }).catch((error)=>console.log(error));
//     },[])
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError,setIsError] = useState(false);
//     const [user, setUser] = useState('default user')
//     if(isLoading){
//         return <h2>Loading...</h2>
//     }
//     if(isError){
//         return <h2>Error...</h2>
//     }
//     return(<h1>{user}</h1>);
//
// //we will display conpoments or content based on some condition
//
// }
//
// export default ConditionalRendering;

import React, {useEffect, useState} from "react";
const url = 'https://api.github.com/users/QuincyLarson';

const ConditionalRendering = () =>{
    useEffect(() =>{

        fetch(url).then((response)=>{
            if(response.status>=200 && response.status<=299){
                return response.json();

            }else{
                setIsLoading(false);
                setIsError(true);
                throw new Error(response.statusText);
            }
        }).then((user)=>{
            const{login} = user;
            setUser(login);
            setIsLoading(false);

        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    const[isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const[user, setUser] = useState('default user');
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>Error...</h2>
    }
    return (<h1>{user}</h1>);
}
export default ConditionalRendering;