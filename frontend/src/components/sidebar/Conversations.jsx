

import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
    const { conversation, loading } = useGetConversations();
    // console.log('conversation:', conversation);
    
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversation && conversation.map((conv, idx) => {
                return (
                    <Conversation
                        key={conv._id}
                        conversation={conv}
                        lastIdx={idx === conversation.length - 1}
                    />
                );
            })}
            {loading && <span className="loading loading-spinner mx-auto"></span>}
        </div>
    );
};
export default Conversations;
