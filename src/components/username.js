import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayUsers from './displayUsers';

const Username = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //console.log(response.data);
                var newUsers = response.data;
                setUsers(newUsers);
                
                
            });
    }, []);
    return ( <div>
        {
            <ul>{
                users.map((user, index)=>{
                    return (<li key={index}>{user.name}</li>);
                })
            }
            </ul>
            // (users.length > 0)?<span><DisplayUsers users={users}/></span>:<span>No Data</span>
            
        }
    </div> );
}
 
export default Username;