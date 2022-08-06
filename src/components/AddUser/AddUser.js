import React,{useRef} from 'react';

const AddUser = () => {
    const nameRef=useRef();
    const emailRef=useRef();

    const handleAddUser=e=>{
            const name=nameRef.current.value;
            const email=emailRef.current.value;
            const newUser={name:name,email:email}

            fetch('http://localhost:5000/users',{
                method:'post',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(newUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    alert('successfully added user')
                    // e eikhane from k bujaise
                    e.target.reset();
                }
            })

        e.preventDefault();

    }

    return (
        <div>
            <h2>please add an Add User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='name' />
                <input type="email" name="" ref={emailRef} id=""  placeholder='email'/>
                <input type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddUser;