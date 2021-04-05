import React from 'react';

const DisplayUsers = (props) => {
    return ( 
        <ul>{
        props.users.map((user, index)=>{
                return (<li key={index}>{user.name}</li>);
            })
        }
        </ul>
    );
}
 
export default DisplayUsers;