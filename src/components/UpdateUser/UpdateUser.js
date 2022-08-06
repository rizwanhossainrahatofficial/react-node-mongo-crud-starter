import React,{ useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


const UpdateUser = () => {
    const [user,setuser]=useState({})
    const {id}=useParams()

    useEffect(()=>{
        const url=`http://localhost:5000/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[]);

// update user
    const handleNameChange=e=>{
        const updateName=e .target.value;
        const updatedName={name:updateName, email:user.email}
        setuser(updatedName)
    };

        const handleEmailChange=e=>{
            // const updatedUser={...user}
            // const updatedUser.email=e.target.value;
            const updateEmail=e.target.value;
            const updatedEmail={name:user.name, email:updateEmail}
            setuser(updatedEmail)
        }



    const handleUpdateUser=e=>{
        // get na hole method bole dite hobe
        const url=`http://localhost:5000/users/${id}`
            fetch(url,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.matchedCount>0){
                    alert('update successfully')
                    setuser({});
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <h2> Update User:{user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="" onChange={handleNameChange} value={user.name || ""} id="" />
                <input type="email" name="" onChange={handleEmailChange} value={user.email ||""} id="" />
                <input type="submit" value=" update" />
            </form>
        </div>
    );
};

export default UpdateUser;