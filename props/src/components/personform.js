import React,{ useState } from 'react';



const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[lastname, setLastname] = useState('');
    const[passwordTwo, setPasswordTwo]= useState('');
    
    const createUser = (e) => {
        e.preventDefault();

        const newUser = { 
            username: firstname, 
            email: email, 
            password: password,
            passwordTwo: passwordTwo,  
            lastname: lastname
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <p>firstname: {firstname}</p>
            <p>lastname: {lastname}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>Confirm password: {passwordTwo}</p>
            <div>
                <label>firstname: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>lastname: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPasswordTwo(e.target.value) } />
            </div>
            <input type="submit" value="CreateUser" />
        </form>
    );
};
    
export default UserForm;