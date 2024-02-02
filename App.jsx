
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'

import {useState} from 'react'



export default function App()
{
const [token, setToken] = useState(null);

    return(
               <>
               
                  <SignUpForm token={token} setToken={setToken}/>
                  <Authenticate token={token} setToken={token}/>

    
               </>
           );
}


