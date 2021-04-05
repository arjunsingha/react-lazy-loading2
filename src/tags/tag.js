import React, {useEffect, useState} from 'react';

const Tag = () => {
    const [name, setName] = useState("");
    useEffect(()=>{
        const getName = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve("Arjun")
            },4000)
        });
        getName.then((result)=> setName(result));
    }, []);
    if(!name){
        return (<div>Loading Name...</div>);
    }
    return ( <div>
        <h2>Title:</h2>
        {name}
    </div> );
}
 

export default Tag;