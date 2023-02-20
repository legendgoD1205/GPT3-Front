import { useState, useEffect } from "react";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="w-full flex flex-wrap gap-20 pt-8" id="contact">
      <div className="w-full pt-10 " />
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="lg:px-48 text-[#3c3c3c] text-[35px] font-bold text-center text-[#00225e] gap-8">
          Contact us
        </div>
        <div className="flex justify-center">
          <div className="w-4/5 rounded overflow-visible shadow-lg p-8">
            <label
              htmlFor="message"
              placeholder="message"
              className="w-full mt-4"
            >
              Your enquiry<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>
            <label htmlFor="fullname" className="w-full mt-4">
              Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />
            <label htmlFor="email" className="w-full mt-4">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />
            <label htmlFor="subject" className="w-full mt-4">
              Phonenumber<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="w-full bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <div className="flex flex-row items-center justify-center">
              <button
                type="submit"
                className="px-10 mt-8 py-2 bg-blue-500 text-white text-[35px] font-medium hover:bg-blue-700 rounded-[25px] text-lg flex flex-row items-center"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
