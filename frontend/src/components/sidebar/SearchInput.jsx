import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/userConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation, setConversation } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversations = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversations) {
      setSelectedConversation(conversations)

      setSearch("");
    } else {
      toast.error("No users found");
    }

    console.log("conversation jsghdljkhklsghjklsfgdh");
    console.log(conversation);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
 
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">

        <IoSearchSharp className="w-6 h-6 outline-none" />
   
      </button>
  
    </form>
  );
};
export default SearchInput;
