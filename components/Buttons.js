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
                 {/* <SignedIn> */}
                 {/* <div className="flex flex-col h-full w-full"> */}

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
                 {/* </div> */}
                 {/* </SignedIn> */}
                 {/* <SignedOut> */}
                   {/* <div
                     className={`flex flex-col text-white md:w-1/2 w-full h-[800px] items-center  bg-gray-900 bg-opacity-80 backdrop-blur-md fixed z-50`}
                   >
                     <div className="p-3 border text-md rounded-2xl">
                       <SignInButton>
                         <button>Sign in to access</button>
                       </SignInButton>
                     </div>
                   </div>
                   <img
                     src="/resume.jpg"
                     width="100%"
                     height="100%"
                     className="h-[800px] -z-1 flex items-center justify-center"
                     allow="autoplay"
                   ></img> */}
                 {/* </SignedOut> */}
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
                 {/* </SignedIn> */}
                 {/* <SignedOut>
                   <div
                     className={`flex flex-col text-white md:w-1/2 w-full h-[800px] items-center  bg-gray-900 bg-opacity-80 backdrop-blur-md fixed z-50`}
                   >
                     <div className="p-3 border text-md rounded-2xl">
                       <SignInButton>
                         <button>Sign in to access</button>
                       </SignInButton>
                     </div>
                   </div>
                   <img
                     src="/resume.jpg"
                     width="100%"
                     height="100%"
                     className="h-[800px] -z-1 flex items-center justify-center"
                     allow="autoplay"
                   ></img>
                 </SignedOut> */}
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
