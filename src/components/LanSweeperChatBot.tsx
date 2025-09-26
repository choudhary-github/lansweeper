import axios from "axios";
import {
  Bot,
  Loader2,
  MessageCircle,
  Minimize2,
  Send,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function LanSweeperChatBot() {
  const [messages, setMessages] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef: any = useRef(null);
  const inputRef: any = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  const chatId = localStorage.getItem("chatId");

  const getDataByid = async () => {
    const id = (chatId && JSON.parse(chatId)) || "";
    const response: any = await axios.get("http://localhost:3005/chatbot", {
      params: { chatId: id },
    });
    setMessages(response.data?.data?.messages);

    if (response?.data?.data?.chatId) {
      localStorage.setItem(
        "chatId",
        JSON.stringify(response?.data?.data?.chatId)
      );
    }
    return response.data?.data;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isWaitingForResponse) return;

    const userMessage = inputValue.trim();

    setMessages((prev: any) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: "", status: "pending" },
    ]);

    setInputValue("");
    setIsWaitingForResponse(true);
    const id = (chatId && JSON.parse(chatId)) || "";
    try {
      const response = await axios.post(
        "http://localhost:3005/chatbot/send",
        { message: userMessage },
        { params: { chatId: id } }
      );

      setMessages((prev: any) => {
        const newMsgs = [...prev];
        const pendingIndex = newMsgs.findIndex(
          (msg) => msg.sender === "bot" && msg.status === "pending"
        );
        if (pendingIndex !== -1) {
          newMsgs[pendingIndex] = {
            sender: "bot",
            text: response.data.data,
            status: "done",
          };
        }
        return newMsgs;
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev: any) => {
        const newMsgs = [...prev];
        const pendingIndex = newMsgs.findIndex(
          (msg) => msg.sender === "bot" && msg.status === "pending"
        );
        if (pendingIndex !== -1) {
          newMsgs[pendingIndex] = {
            sender: "bot",
            text: "⚠️ Failed to get response. Please try again.",
            status: "error",
          };
        }
        return newMsgs;
      });
    } finally {
      setIsWaitingForResponse(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getDataByid()
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey && !isWaitingForResponse) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div
        className={`md:w-[400px] md:h-[550px] w-[350px] sm:h-[400px] absolute bottom-10 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ease-out transform origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-0 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#393e46] text-white p-4 rounded-t-2xl shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs opacity-80">Always ready to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-gray-50 to-white">
          {messages.map((message: any, idx: number) => (
            <div
              key={idx}
              className={`flex items-start space-x-2 ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              {message.sender === "bot" && (
                <div className="w-6 h-6 bg-[#393e46] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <Bot className="w-3 h-3 text-white" />
                </div>
              )}

              <div className="max-w-xs">
                <div
                  className={`px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                    message.sender === "bot"
                      ? "bg-white text-gray-800 rounded-tl-sm shadow"
                      : "bg-[#393e46] text-white rounded-tr-sm shadow"
                  }`}
                >
                  {message.status === "pending" ? (
                    <div className="flex items-center space-x-2">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span className="text-xs text-gray-500">Thinking...</span>
                    </div>
                  ) : (
                    <p className="leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                  )}
                </div>
              </div>

              {message.sender === "user" && (
                <div className="w-6 h-6 bg-[#393e46] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
                  <User className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex items-end space-x-2">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={
                  isWaitingForResponse
                    ? "Waiting for response..."
                    : "Type your message..."
                }
                disabled={isWaitingForResponse}
                className={`w-full px-3 py-2 rounded-xl border text-sm transition-all duration-200 resize-none max-h-20 min-h-9 overflow-hidden ${
                  isWaitingForResponse
                    ? "bg-gray-50 border-gray-200 text-gray-700 cursor-not-allowed"
                    : "bg-gray-50 border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#393e46] focus:border-transparent"
                }`}
                rows={1}
                onInput={(e: any) => {
                  e.target.style.height = "auto";
                  e.target.style.height =
                    Math.min(e.target.scrollHeight, 80) + "px";
                }}
              />
            </div>

            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isWaitingForResponse}
              className={`p-2 rounded-xl transition-all duration-200 flex items-center justify-center ${
                inputValue.trim() && !isWaitingForResponse
                  ? "bg-[#393e46] hover:bg-[#2c2f35] text-white shadow-md hover:shadow-lg"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {isWaitingForResponse ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-[#393e46] hover:bg-[#2c2f35] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default LanSweeperChatBot;
