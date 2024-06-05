import React, { useState, useEffect, useRef } from "react";
import Loading from "./Loading";

export default function Buttons() {
  const [show, setShow] = useState("");
  const [iframeVisible, setIframeVisible] = useState(false);
  const iframeRef = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Resume Inquiry",
    message: "",
  });
  const [access, setAccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccess(true);
    const updatedFormData = {
      ...formData,
      name: formData.email,
      message: "Accessed your resume",
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });
    if (res.ok) {
      setFormData({
        name: "",
        email: "",
        subject: "Resume Inquiry",
        message: "",
      });
    } else {
      alert("Failed to send the message. Please try again.");
    }
  };
  useEffect(() => {
    if (show === "resume") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIframeVisible(true);
            observer.disconnect();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      if (iframeRef.current) {
        observer.observe(iframeRef.current);
      }

      return () => {
        if (iframeRef.current) {
          observer.unobserve(iframeRef.current);
        }
      };
    }
  }, [show]);

  return show ? (
    <div
      onClick={(e) => e.target.classList.contains("outer-box") && setShow("")}
      className="flex fade flex-col top-0 w-full min-h-screen  fixed outer-box items-center backdrop-blur-lg z-40 "
    >
      <div className="flex fade bg-gray-900 space-y-3 flex-col w-full md:w-1/2 mt-14 min-h-[700px] md:min-h-[50vw] items-start">
        <div className="flex flex-row w-full justify-between h-full">
          <button
            onClick={() => setShow("resume")}
            className="w-full py-4 text-black text-xl bg-gray-100"
          >
            Resume
          </button>
          <button
            onClick={() => setShow("freelance")}
            className="w-full py-4 text-white bg-black text-xl"
          >
            Freelance
          </button>
        </div>
        {show === "resume" ? (
          <div className="flex flex-col p-2 w-full h-full" ref={iframeRef}>
            {iframeVisible ? (
              <>
                {access ? (
                  <iframe
                    src="https://drive.google.com/file/d/165w5EF5gtC2w7vRot5xZiRWuhIg38A4z/preview"
                    width="100%"
                    height="100%"
                    className="h-[800px] -z-1"
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <>
                    <div
                      className={`flex flex-col text-white md:w-1/2 w-full h-[800px] items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-md fixed z-50`}
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-row p-2 w-2/3 space-x-3 "
                      >
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email to access resume"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="shadow border-b-1 border-t-0 border-l-0 border-r-0 text-xl bg-transparent appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
                        />
                      </form>
                    </div>
                    <img
                      src="/resume.jpg"
                      width="100%"
                      height="100%"
                      className="h-[800px] -z-1 flex items-center justify-center  "
                      allow="autoplay"
                    ></img>
                  </>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-white text-centeer">Loading...</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col p-2 w-full h-full" ref={iframeRef}>
            {iframeVisible ? (
              <>
                {access ? (
                  <iframe
                    src="https://drive.google.com/file/d/1v2R4Ui9GBApIwQQj5x_F6KBaEtuJGY4-/preview"
                    width="100%"
                    height="100%"
                    className="h-[800px] -z-1"
                    allow="autoplay"
                  ></iframe>
                ) : (
                  <>
                    <div
                      className={`flex flex-col text-white md:w-1/2 w-full h-[800px] items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-md fixed z-50`}
                    >
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-row p-2 w-2/3 space-x-3 "
                      >
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email to access resume"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="shadow border-b-1 border-t-0 border-l-0 border-r-0 text-xl bg-transparent appearance-none w-full py-2 px-3 text-gray-200 leading-tight "
                        />
                      </form>
                    </div>
                    <img
                      src="/resume.jpg"
                      width="100%"
                      height="100%"
                      className="h-[800px] -z-1 flex items-center justify-center  "
                      allow="autoplay"
                    ></img>
                  </>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-white text-centeer">Loading...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-col fade md:-right-10 -right-11 gap-y-16 h-full z-40 top-64 fixed">
      <button
        onClick={() => setShow("freelance")}
        className="px-4 bg-black rounded-sm fade -rotate-90 mt-12 text-white border-b-0 border text-xl z-40"
      >
        Freelance
      </button>
      <button
        onClick={() => setShow("resume")}
        className="px-4 bg-white rounded-sm fade -rotate-90 mt-12 text-black border-b-0 border text-xl z-40"
      >
        Resume
      </button>
    </div>
  );
}
