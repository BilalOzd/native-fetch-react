import {React} from 'react'
import { useState, useEffect } from 'react'

function Users(){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            setUsers(data)
            //isLoading ekle
        })
        .catch((e) => console.log(e))
    }, []);

    return(
        <div>

            <h2>USERS</h2>

        </div>
    )
}

export default Users