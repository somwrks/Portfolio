"use client";
import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/Utils/NavbarComponent";
import Footer from "../components/Utils/Footer";
import Popup from "../components/Utils/Popup";
import LandingPage from "../components/Utils/LandingPage";
import { Image, Link, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useData } from "../components/context/DataContext";

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [zoom, setZoom] = useState<boolean | null>(false);
  const { resumeData, projectsData } = useData();
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();
  

  const handleClose = () => {
    setIsClosing(true);
    setZoom(false);
    setTimeout(() => {
      setSelectedSection(null);
      setIsClosing(false);
    }, 400);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row w-full justify-between flex-grow  min-h-screen">
        <div
          className={`md:flex md:visible hidden justify-between 
              min-h-screen items-center py-24  flex-col w-1/2  h-full  transition-all duration-400 ease-out ${
            zoom ? "zoom-out blur-sm" : "zoom-in"
          }`}
        >
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="right"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    Bachelors of Science
                  </div>
                  <div className="text-tiny">
                    Technological Entrepreneurship & Management
                  </div>
                  <div className="text-tiny">3.87 GPA, Dean&apos;s List</div>
                  <div className="text-tiny">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny font-semibold"
                      href="https://asu.campuslabs.com/engage/organization/acm-asu"
                    >
                      ACM Society
                    </Link>{" "}
                    Automation Officer <br />{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny font-semibold"
                      href="https://www.darpa.mil/research/programs/artificial-social-intelligence-for-successful-teams"
                    >
                      DARPA ASSIST
                    </Link>{" "}
                    Research Lab Assistant <br />
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny font-semibold"
                      href="https://news.asu.edu/20220427-solutions-charting-future-space-exploration"
                    >
                      GHOST
                    </Link>{" "}
                    Research Lab Assistant
                  </div>
                </div>
              }
            >
              <Image
                src="/asu.svg"
                width={150}
                className=" brightness-75 cursor-pointer hover:brightness-100"
                height={150}
                alt="Arizona State University Logo"
                onClick={() => {
                  router.push("https://www.asu.edu/");
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3 className="font-semibold">Arizona State University</h3>
              <h3>2024-2028</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="right"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Highschool</div>
                  <div className="text-tiny">
                    Physics, Chemistry, Mathematics, <br /> Computer Science
                  </div>
                  <div className="text-tiny">87%</div>
                  <div className="text-tiny">
                    Featured{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny font-semibold"
                      href="https://drive.google.com/file/d/1hjHzYXH7EUKQimgXfo5teHS6wTucF7I5/view"
                    >
                      Startup
                    </Link>{" "}
                    &{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny font-semibold"
                      href="https://www.facebook.com/photo/?fbid=376400898075425&set=a.189456243436559"
                    >
                      Entrepreneur
                    </Link>{" "}
                    in Year Magazine
                    <br />
                    IT head of sports club <br /> info sci & tech club - Board{" "}
                    <br />
                    Research&Dev society - Career research assistant <br />
                  </div>
                </div>
              }
            >
              <Image
                src="/cms.jpg"
                width={150}
                className=" brightness-75 cursor-pointer hover:brightness-100"
                height={150}
                alt="City Montessori School Logo"
                onClick={() => {
                  router.push("https://www.cmseducation.org");
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3 className="font-semibold">City Montessori School</h3>
              <h3>2009-2024</h3>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col  w-full md:w-1/2  relative transition-all duration-400 ease-out ${
            zoom ? "zoom-out" : "zoom-in"
          }`}
        >
          <NavbarComponent zoom={zoom} setZoom={setZoom} />
          <LandingPage />
          <Footer setSelectedSection={setSelectedSection} setZoom={setZoom} />
        </div>
        <div
          className={` md:flex md:visible hidden justify-between  min-h-screen items-center py-12  flex-col w-1/2  h-full  transition-all duration-400 ease-out ${
            zoom ? "zoom-out blur-sm" : "zoom-in"
          }`}
        >
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="left"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    International Codeday &apos;24 Hackathon
                  </div>
                  <div className="text-tiny font-semibold">1st Place</div>

                  <div className="text-tiny">
                    Built a 911 Police Suite Team{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny "
                      href="https://github.com/ashworks1706/codeday-2024"
                    >
                      Webapp
                    </Link>{" "}
                    <br /> for police department to deploy track <br /> and add
                    units aswell for society to track help <br /> with real-time
                    database and geospatial indexing
                  </div>
                </div>
              }
            >
              <Image
                src="https://i.ibb.co/PwPR0tx/200335-EC-6624-4-D2-B-93-C6-14-E07-B0647-B5.png"
                width={150}
                className=" brightness-75 cursor-pointer  hover:brightness-100"
                height={150}
                alt="International Codeday '24 Hackathon"
                onClick={() => {
                  router.push(
                    "https://showcase.codeday.org/project/clykxtgpb8597559rmykzazo4cc"
                  );
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3>Codeday &apos;24</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="left"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    International TechXcelerate &apos;23 Hackathon
                  </div>
                  <div className="text-tiny font-semibold">1st Place</div>

                  <div className="text-tiny">
                    Built a{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny "
                      href="https://github.com/ashworks1706/SafeSentry"
                    >
                      React Native app
                    </Link>{" "}
                    with Expo to send instant <br />
                    proximity-based alerts using firebase&apos;s real-time{" "}
                    <br /> database and geospatial indexing during 24hr <br />{" "}
                    hackathon and won first place among 300+ <br />{" "}
                    International Participants.
                  </div>
                </div>
              }
            >
              <Image
                src="https://i.ibb.co/SBKP1Xz/5081-E027-1-D18-4-EC8-A4-F3-2-D7-BA2051901.png"
                width={150}
                className=" brightness-75 cursor-pointer hover:brightness-100"
                height={150}
                alt="International TechXcelerate '23 Hackathon"
                onClick={() => {
                  router.push("https://www.cmseducation.org");
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3>TechXCelerate &apos;23</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="left"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    International Happy Hacks 1 &apos;23 Hackathon
                  </div>
                  <div className="text-tiny font-semibold">1st Place</div>

                  <div className="text-tiny">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny "
                      href="https://github.com/ashworks1706/Autera"
                    >
                      Webapp
                    </Link>{" "}
                    for autism support. It features cognitive <br /> quizzes ,
                    secure video calls, and therapist matching.
                    <br /> using Vercel, Tailwind CSS and Clerk API
                  </div>
                </div>
              }
            >
              <Image
                src="https://i.ibb.co/Zf2Vkxq/D2256-EFA-9-D02-4254-9671-9036453-F289-D.png"
                width={150}
                className=" brightness-75 cursor-pointer hover:brightness-100"
                height={150}
                alt="International Happy Hacks 1 '23 Hackathon"
                onClick={() => {
                  router.push("https://www.cmseducation.org");
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3>Happy Hacks 1 &apos;23</h3>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <Tooltip
              className="capitalize"
              placement="left"
              color="foreground"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">
                    National Razzmatazz&lsquo;22 Coding Competition
                  </div>
                  <div className="text-tiny font-semibold">Winner</div>

                  <div className="text-tiny">
                    Against 100+ participants from all over country, <br />
                    Solved 5 problems in an hour involving advanced data <br />{" "}
                    structures & algorithms.
                  </div>
                </div>
              }
            >
              <Image
                src="https://i.ibb.co/rFzvDgY/image.png"
                width={150}
                className=" brightness-75 cursor-pointer hover:brightness-100"
                height={150}
                alt="National Razzmatazz'22"
                onClick={() => {
                  router.push(
                    "https://www.facebook.com/sethmrjaipuriaschools/"
                  );
                }}
              />
            </Tooltip>
            <div className="flex  items-center flex-col gap-y-1">
              <h3>Razzmatazz &apos;22</h3>
            </div>
          </div>
        </div>
      </div>

      {selectedSection && (
        <div
          className="fixed backdrop-blur-sm justify-center w-full items-center flex inset-0 z-10 backdrop-animate"
          onClick={handleClose}
        >
          <Popup
            experiences={resumeData}
            projects={projectsData.projects}
            stories={[]}
            section={selectedSection}
            isClosing={isClosing} 
            onClose={handleClose}
          />
        </div>
      )}
    </>
  );
}
