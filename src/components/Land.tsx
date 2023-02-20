import whatsapp from "src/assets/img/whatsapp.png";
import { useNavigate, useLocation } from "react-router-dom";

const Land = () => {
  const navigate = useNavigate();

  const handleGoPage = (path: string) => {
    navigate("/" + path);
  };
  return (
    <div
      className="w-full flex flex-wrap md:flex-nowrap justify-between gap-8 pt-40"
      id="home"
    >
      <div className="flex flex-wrap gap-8">
        <div className="text-[44px] text-[#3c3c3c]">
          Elevate Your Chatting Experience with AI CHAT GPT-3.5 and DALL-E
          Integration on your WhatsApp and Telegram
        </div>
        <div className="text-[28px] text-[#3c3c3c]">
          AI-generated images and powerful chatbot assistance on WhatsApp and
          Telegram.
        </div>
        <div className="text-[28px] text-[#3c3c3c]">
          Connect with DALL-E for stunning image creation and chat with ChatGPT
          for expert advice on your favourite topics - all in real-time!
        </div>
        <button
          className={`bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl w-[240px] text-[35px] font-bold rounded-[16px]`}
          onClick={() => handleGoPage("Sign")}
        >
          SIGN UP
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={whatsapp}
          alt="whatsapp"
          className="h-fit min-w-[280px] rounded-[8px] md:w-[200px] lg:w-[340px] object-stretch"
        />
      </div>
    </div>
  );
};

export default Land;
