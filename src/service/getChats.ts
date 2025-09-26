import axios from "axios";

const getChats = async () => {
  const response = await axios.get("http://localhost:3005/chatbot");
  return response.data;
};

export { getChats };
