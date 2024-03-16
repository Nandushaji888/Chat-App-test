import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/userConversation'

const useSendmessage = () => {

    const [loading,setLoading] = useState(false)
    const {messages,setMessages,selectedConversation} = useConversation()
    // console.log('selectedConversation');
    // console.log(selectedConversation._id);

    const sendMessage = async(message)=> {
        setLoading(true)

        try {
            const res = await fetch(`/api/messages/send/${selectedConversation?._id}`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({message})
            })
            const data = await res.json();

            if (data.error) {
              throw new Error(data.error);
            }
      

            setMessages([...messages,data])
            console.log(messages);
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,sendMessage}

}

export default useSendmessage
