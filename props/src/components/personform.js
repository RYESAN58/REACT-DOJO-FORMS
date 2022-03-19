import React,{ useState } from 'react';



const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[lastname, setLastname] = useState('');
    const[passwordTwo, setPasswordTwo]= useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const[emailErorr, setEmailError] = useState('');
    const[passwordError, setPasswordError] = useState('');

    
    const createUser = (e) => {
        e.preventDefault();


        const newUser = { 
            username: firstname, 
            email: email, 
            password: password,
            passwordTwo: passwordTwo,  
            lastname: lastname
        };
        setHasBeenSubmitted(true);
        console.log("Welcome", newUser);
    };
    
    const messenger = () => {
        if (hasBeenSubmitted == true){
            return "Thank You For Submiting the form!"
        }else{
            return 'Please, Submit form!'
        }
    };

    const handleName = (e) => {
        if(e.target.value.length < 1) {
            setNameError("name is required!");
        } else if(e.target.value.length < 3) {
            setNameError("name must be 3 characters or longer!");
        } else {
            setNameError("");
        }
        setFirstname(e.target.value)
    }
    
    
    const lastNameV = (e) => {
        if (e.target.value.length < 1){
            setLastNameError('Lastname Requiered');
        }else if (e.target.value.length < 3){
            setLastNameError('Lastname must be 3 characters')
        }
        else{
            setLastNameError('');
        }
        setLastname(e.target.value)
    }

    const handleEmail = (e) => {
        if (e.target.value.length < 1){
            setEmailError('Email required');
        }
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) == false){
            setEmailError('Must be an Email')
        }
        else{
            setEmailError('');
        }
        setEmail(e.target.value)
    }

    const handlePassword=(e) => {
        if (e.target.value < 1){
            setPasswordError('Password Requiered');
        }
        else if (e.target.value.length< 3){
            setPasswordError('Password more than 3!')
        }
        else{
            setPasswordError('')
        }
        setPassword(e.target.value)

    }

    return(
        <form onSubmit={ createUser }>
            <h3>{ messenger() }</h3>
            <p>firstname: {firstname}</p>
            <p>lastname: {lastname}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>Confirm password: {passwordTwo}</p>
            <div>
                <label>firstname: </label> 
                <input type="text" onChange={ handleName } />
                {
                    nameError ?
                    <p>{ nameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>lastname: </label> 
                <input type="text" onChange={  lastNameV } />
                {
                    lastNameError ?
                    <p>{lastNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={handleEmail } />
                {
                    emailErorr ?
                    <p>{emailErorr}</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ? 
                    <p>{passwordError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handlePassword } />
                {
                    passwordError ? 
                    <p>{passwordError}</p>:
                    ''
                }
            </div>
                <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;