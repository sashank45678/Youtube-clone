import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice'
import { generate } from '../utils/Helpers'
import { makeid } from '../utils/Helpers'
import { useDispatch, useSelector } from 'react-redux'
const LiveChat = () => {
    const dispatch=useDispatch()
    const userText=useRef(null)
    const chatMessages=useSelector((store)=>{return store.chat.messages })
    useEffect(()=>{
        const timeInterval=setInterval(() => {
            dispatch(addMessage({name:"@"+generate(),text:makeid(15)+"🚀"}))
        }, 2000);
        return ()=>{
            clearInterval(timeInterval)
        }
    },[])
    const handleSubmit=(e)=>{
        if(!userText.current.value){
            return
        }
        else{
            dispatch(addMessage({name:"@sashank",text:userText.current.value}))
            userText.current.value=""
        }
    }
  return (
    <div className='flex flex-col'>
    <div className='ml-2 p-2 border border-black w-[400px] rounded-lg h-[480px] bg-slate-100 overflow-y-scroll flex flex-col-reverse'>      
    {chatMessages.map((message,index)=>(
        <ChatMessage key={index}name={message.name} message={message.text}/>
    ))}
    </div>
    <div className='ml-2 pl-3  border border-black rounded-lg'>
        <input ref={userText} className='px-2 py-1 my-1  w-[80%] rounded-lg' type="text" placeholder='enter something'/>
        <button onClick={handleSubmit} className='bg-green-400 text-white px-2 py-2 rounded-lg ml-2 my-2'>Post</button>
    </div>
    </div>
  )
}

export default LiveChat