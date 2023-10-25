import Template from "@/components/Template";

export default function About({ toggleAudio }) {
  return (
    <>
      <Template
        title={"Som Srivastava"}
        toggleAudio={toggleAudio}
        image={"som"}
        detail1={
          "Hello! I'm Som Srivastava, a passionate and innovative high school senior with a deep love for technology and its power to transform lives. My journey in the world of computer science started at a young age, and ever since, I've been fascinated by the endless possibilities it offers."
        }
        detail2={
          "I believe in the intersection of technology and mental well-being. My goal is to leverage my skills as a software developer and designer to create solutions that promote mental health awareness and support. I'm not limited to mental well-being; I'm always eager to explore diverse problems and find creative solutions."
        }
        detail3={
          "In addition to my technical skills, I am an avid learner, always seeking new knowledge and challenges. When I'm not coding, you can find me immersed in books, crafting articles, organizing my thoughts on Notion, or conducting research. I'm driven by a thirst for knowledge and a desire to contribute positively to our ever-changing world."
        }
      />
    </>
  );
}
