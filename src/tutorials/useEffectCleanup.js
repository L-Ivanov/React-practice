// import React, {useState, useEffect} from "react";
// //<></> is fragment
//
// const useEffectCleanup = () => {
//     const [size, setSize] = useState(window.innerWidth);
//     const checkSize = ()=>{
//         setSize(window.innerWidth);
//         return ()=>{
//             console.log('cleanup');
//             window.removeEventListener('resize', checkSize);
//         }
//     }
//
//     useEffect(()=>{
//         console.log('useEffect')
//         window.addEventListener('resize', checkSize);
//     }, [])
//     console.log('render');
//     return <>
//         <h1>window</h1>
//         <h1>{size} Pixels</h1>
//     </>
//     //cleanup function
//     //second argument
//
// }
// export default useEffectCleanup;

import React, {useEffect, useState} from "react";

const useEffectCleanup = ()=>{
    const [size, setSize] = useState(window.innerWidth);
    const checkSize = ()=>{
        setSize(window.innerWidth);
        return ()=>{
            console.log('cleanup');
            window.removeEventListener('resize', checkSize);

        }

    }
    useEffect(()=>{
        console.log('useEffect');
        window.addEventListener('resize', checkSize);

    }, []);
    console.log('render');
    return <>
        <h1>window</h1>
        <h1>{size} Pixels</h1>

    </>


}
export  default useEffectCleanup;