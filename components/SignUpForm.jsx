
import {useState} from 'react'

export default function SignUpForm({setToken})
{
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

//const validateValues=(username)=>{
//    let errors={};
 //   if (username.length<8){
 //       errors.username="User Name must be at least 8 characters"
 //   }
 //   return errors;

//};


async function handleSubmit(event) {
    event.preventDefault();
    
    try{
        const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/signup",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                    },
            body: JSON.stringify(
                {
                username:username,
                password:password,

                }),
        });
        const result = await response.json();
        console.log(result);
        setToken(result.token)
    }

    catch(error){
    setError(error.message)    
    }
}
    return(
            <>
                 <h2>Sign Up!</h2>
                 {error && <p>{error}</p>} 
                 <form onSubmit={handleSubmit}>
                    <label>User Name : <input  required value={username} onChange={(e) => setUsername(e.target.value)}></input> </label>
                    <br></br>
                    <p className="note">(User Name must be at least 8 characters.)</p>
                    <br></br>
        

                    <label>Password : <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input> </label>

                      <br></br>   
                      <br></br> 
                    <button>Submit</button>
                 </form>

             </>

          );
        
        
}

