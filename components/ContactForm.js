import React, { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [fade, setFade] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "Project Inquiry",
        message: "",
      });
    } else {
      alert("Failed to send the message. Please try again.");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFade(
        formData.message !== ""  &&
          formData.name !== "" &&
          formData.email !== ""
      );
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [formData.message,formData.email,formData.name]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [formData]);
  return (
    <form onSubmit={handleSubmit} className="w-full   py-6 space-y-4">
      <div className="mb-4">
        <label
          className="block text-gray-200 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow bg-gray-600 appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-xl font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="shadow bg-gray-600 appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-xl font-bold mb-2"
          htmlFor="subject"
        >
          Subject
        </label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="shadow bg-gray-600 appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
        >
          <option value="Project Inquiry">Resume Inquiry</option>
          <option value="Project Inquiry">Project Inquiry</option>
          <option value="Freelance Work">Freelance Work</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-200 text-xl font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="shadow bg-gray-600 appearance-none w-full py-2 px-3 text-gray-200 leading-tight  h-32"
        ></textarea>
      </div>
      <div className={`mb-4 items-center transition-all duration-1000 `}>
        <h1
          className={`text-xl text-white ${!fade ? "opacity-0" : "opacity-100"}`}
        >
          Press Enter To Send
        </h1>
        <h1
          className={`text-xl text-white ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          Response can take up to 3-5 business days
        </h1>
      </div>
    </form>
  );
}
