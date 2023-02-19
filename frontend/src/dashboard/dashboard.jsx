import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ChatState } from "../context/chatprovider"

const DashBoard =()=>{
    const { user} = ChatState();
   const navigate =  useNavigate()
 console.log(user)
 if(user === undefined || user ===null){
    navigate("/")
 }
 
    return(<>
        hello from dashboard {user?.name}
    </>)
}
export default DashBoard;