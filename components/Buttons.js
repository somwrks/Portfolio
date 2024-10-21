import React, { useState, useEffect, useRef } from "react";
import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Buttons({ emailSent, setEmailSent }) {
  const [show, setShow] = useState("");
  const [iframeVisible, setIframeVisible] = useState(false);
  const iframeRef = useRef(null);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user && !emailSent) {
      const lastEmailSentTime = localStorage.getItem("lastEmailSentTime");
      const currentTime = new Date().getTime();

      if (!lastEmailSentTime || currentTime - lastEmailSentTime > 3600000) {
        const updatedFormData = {
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          subject: `${show.toUpperCase()} Access`,
          message: `${user.fullName} accessed your resume`,
        };
        handleSubmit(updatedFormData);
      }
    }
  }, [isSignedIn, user, emailSent]);

  const handleSubmit = async (updatedFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFormData),
    });
    if (res.ok) {
      localStorage.setItem("lastEmailSentTime", new Date().getTime());
      setEmailSent(true);
    } else {
      alert("Failed to send the message. Please try again.");
    }
  };

  useEffect(() => {
    if (show === "resume" || show === "freelance") {
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
      className="flex fade flex-col top-0 w-full min-h-screen fixed outer-box items-center backdrop-blur-lg z-40 "
    >
      <div className="flex fade bg-gray-900 space-y-3 flex-col w-full md:w-1/2 mt-16 min-h-[100vw] md:min-h-[50vw] items-start">
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
          <div className="flex flex-col p-2 w-full " ref={iframeRef}>
            {iframeVisible ? (
              <>

                  <iframe
                    src={process.env.NEXT_PUBLIC_RESUME_LINK}
                    // width="100%"
                    // height="100%"
                    
                    className="w-full md:h-[50vw] h-[100vw] -z-1"
                    allow="autoplay"
                  ></iframe>
                  <a
                    href="/api/download?type=resume"
                    className="mt-4 px-4 py-2 bg-gray-600 text-center text-white rounded"
                    download
                  >
                    Download Resume
                  </a>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-white text-center">Loading...</p>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col p-2 w-full h-full" ref={iframeRef}>
            {iframeVisible ? (
              <>
                 {/* <SignedIn> */}
                  <iframe
                    src={process.env.NEXT_PUBLIC_FREELANCE_LINK}
                    width="100%"
                    height="100%"
                    className="w-full md:h-[50vw] h-[100vw] -z-1"
                    allow="autoplay"
                  ></iframe>
                  <Link
                    href="/api/download?type=freelance"
                    className="mt-4 px-4 py-2 bg-gray-600 text-center text-white rounded"
                    download
                  >
                    Download Freelance
                  </Link>
              </>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-white text-center">Loading...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <>
    <div className="flex w-full items-center justify-center flex-row fade md:-top-12 backdrop-blur-xl rounded-xl p-2 -top-11 gap-4 md:gap-12  z-40  fixed">
      <button
        onClick={() => setShow("freelance")}
        className="px-4  rounded-sm fade mt-12 md:mt-12 text-white  text-xl z-40"
      >
        Freelance
      </button>
      <button
        onClick={() => setShow("resume")}
        className="px-4 bg-white rounded-sm fade mt-12 md:mt-12 text-black  text-xl z-40"
      >
        Resume
      </button>
    <Link href={"https://www.instagram.com/somwrks"} target="noref">
    
      <button
        // onClick={() => setShow("freelance")}
        className="px-4  rounded-sm fade mt-12 md:mt-12 text-white  text-xl z-40"
      >
        Instagram
      </button>
      </Link>
    
    <Link href={"https://www.github.com/somwrks"} target="noref">

      <button
        // onClick={() => setShow("freelance")}
        className="px-4 bg-white  rounded-sm fade mt-12 text-black border-t-0 border text-xl z-40"
      >
        Github
      </button>
      </Link>
      <Link href={"https://www.linkedin.com/in/somwrks"} target="noref">

      <button
        // onClick={() => setShow("resume")}
        className="px-4 text-white rounded-sm fade mt-12   text-xl z-40"
      >
        LinkedIn
      </button>
    </Link>
    </div>
    </>

  );
}
