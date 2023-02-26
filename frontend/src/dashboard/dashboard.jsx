import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ChatState } from "../context/chatprovider"
import { Text} from '@chakra-ui/react';
import Buy from '../Screens/Buy';

const DashBoard =()=>{
    const { user} = ChatState();
   const navigate =  useNavigate()
 //console.log(user)
 if(user === undefined || user ===null){
    navigate("/")
 }
 
    return(<>
       <Text fontSize={'3xl'} color="tomato" mt={5} mb={5}>Hello {user?.name}</Text>
        <br />
       
        <Buy/>
       
    </>)
}
export default DashBoard;