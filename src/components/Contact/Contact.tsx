import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (firstName === "" || lastName === "" || email === "" || message === "") {
      setError("One of the Input is Empty!");
    } else if (!emailRegex.test(email)) {
      setError("Incorrect Email");
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setError("Message sent!");
    }
  };

  setTimeout(() => {
    setError("");
  }, 5000);

  return (
    <div className="flex flex-col items-center w-[80%] sm:w-[80%] md:w-[80%] lg:w-[60%] mx-auto">
      <h1 className="text-[40px] text'-center mb-[20px]">Contact Us</h1>
      <div className="flex flex-col sm:flex-row sm:justify-between mb-[20px]">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          className="w-[300px] sm:w-[210px] sm:mr-[20px] h-[50px] pl-[20px] mb-[20px] sm:mb-[0] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          className="w-[300px] sm:w-[210px] h-[50px] pl-[20px] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
          required
        />
      </div>
      <div className="mb-[20px]">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-[300px] sm:w-[440px] h-[50px] pl-[20px] border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
          required
        />
      </div>
      <div className="mb-[20px]">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          className="w-[300px] sm:w-[440px] h-[300px] pl-[20px] pt-[10px] placeholder-start border-[1px] border-color-gray focus:border-[1px] focus:outline-none"
          required
        />
      </div>
      <div className="flex flex-row justify-even mb-[30px]">
        <div className="w-[170px] sm:w-[290px]"></div>
        <div>
          <button
            className="text-white text-[20px] float-right bg-[#4E9CA8] w-[130px] sm:w-[150px] h-[70px] text-center rounded-[50px] hover:bg-[#366d75]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {error.length > 0 ? (
        <div
          className={`text-[24px] pb-[20px] ${
            error === "Message sent!" ? "text-[green]" : "text-[red]"
          }`}
        >
          {error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Contact;
