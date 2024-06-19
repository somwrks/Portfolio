import SuspenseImage from "@/components/SuspenseImage";
import Template from "@/components/Template";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About({ toggleAudio, isPlaying,setEmailSent,emailSent}) {
  return (
    <>
      <Head>
        <title>Som Srivastava | About Me</title>
        <meta
          name="description"
          content="Discover the multifaceted world of Som Srivastava, a passionate individual exploring the realms of technology, creativity, and social impact. Dive into his unique blend of entrepreneurial spirit, software development expertise, and a curiosity that transcends boundaries"
        />
        <meta
          name="og:description"
          content="Discover the multifaceted world of Som Srivastava, a passionate individual exploring the realms of technology, creativity, and social impact. Dive into his unique blend of entrepreneurial spirit, software development expertise, and a curiosity that transcends boundaries"
        />
        <meta property="og:title" content="Som Srivastava | About Me" />
        <meta property="og:url" content="https://somwrks.com/about" />
        <meta property="og:image" content="me2.webp" />

        <meta
          name="keywords"
          content="Som Srivastava, Som Developer, Srivastava Developer, Aishwarya Developer, Srivastava Aishwarya, Aishwarya Srivastava, Arizona State University, ASU, Go Devils, Devils, Sun Devils, Lucknow, India, Indian, Uttar Pradesh, Mesa, Phoenix, Metro Phoenix,  About, High School Graduate, Software Developer, Entrepreneur, Tech Enthusiast, Creative Thinker, Mental Health Advocate, Innovation, Self-Development, Passion, Curiosity"
        />
      </Head>
      <Template
        isPlaying={isPlaying}
        title={"Som Srivastava"}
        toggleAudio={toggleAudio}
        image={"som"}
        detail1={
          "Hey there, I'm Som Srivastava, a dynamic individual navigating the intersection of technology, creativity, and impact. As a high school graduate stepping into the exciting world of possibilities, I bring a unique blend of passion, curiosity, and determination to everything I do."
        }
        detail2={
          "I am driven by the desire to contribute positively to humanity. My mission is to leverage my expertise as a software developer and designer to craft solutions that benefit society, with a particular interest in space exploration and innovation. I'm constantly learning on a self development journey, whether it's about psychology, the mysteries of the universe, or anything that fuels my motivation and curiosity. Let's connect and learn together!"
        }
        detail3={
          "In addition to my technical skills, I am an avid learner, always seeking new knowledge and challenges. When I'm not coding, you can find me immersed in books about media theories, journaling, or just meditating in a soccer field (lol)"
        }
      />
      <div className="flex select-none flex-col my-6 justify-center md:px-0 px-4 w-full md:items-center  gap-y-8 ">
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              Legacy Seeker: Stories of Greatness
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              I'm an avid reader with a profound fascination for the lives of
              renowned personalities. Their journeys, from humble beginnings to
              extraordinary heights, never cease to inspire me. Books like Steve
              Jobs and Julius Caesar's biographies offer invaluable insights
              into their remarkable achievements and the fortitude that
              propelled them forward. While reading is my preferred medium, I
              also relish thought-provoking films that shed light on intriguing
              stories, such as The Big Short or Billions.
            </h2>
          </div>
          <div className="flex flex-col ">
            <Link href={"https://youtu.be/Z1NimVSJ8XI?si=Upwvi9LE3hS6heiU"}>
              <SuspenseImage
                loading="lazy"
                src={
                  "https://i.ibb.co/zrhCfVm/image.png"
                }
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full md:order-2 space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              Who, Where and Why?
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              The enigmatic questions surrounding our existence captivate my
              curiosity. Learning about cosmic theories and untold historical
              facts keeps me hooked, as I ponder the profound 'who, where, and
              why' of our existence.
            </h2>
          </div>
          <div className="flex flex-col">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://youtu.be/4Tm6Z1y3h94?si=yNaGK79xcMes3bRX"}
            >
              <SuspenseImage
                loading="lazy"
                src={"https://i.ibb.co/jD2gYsX/IMG20240514131416.jpg"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              Some Casual Games
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              Since childhood, I've harbored a passion for football (soccer),
              proudly supporting the legendary Messi. In my leisure moments, I
              also indulge in the strategic challenges of Go and Chess, games
              that demand focus and intellectual engagement.
            </h2>
          </div>
          <div className="flex flex-col ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.youtube.com/watch?v=GL-uWmw4YMA"}
            >
              <SuspenseImage
                loading="lazy"
                src={"https://i.ibb.co/BsmzD3v/image.png"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full md:order-1 space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              Building Meaningful Things | Not just a tech guy
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              Within me lies an incessant desire to craft meaningful solutions
              that make a positive impact. I'm driven by a profound passion for
              engineering, as it provides a powerful avenue to address
              real-world challenges and create lasting change.
            </h2>
          </div>
          <div className="flex flex-col ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.youtube.com/watch?v=EiKK04Ht8QI"}
            >
              <SuspenseImage
                loading="lazy"
                src={"https://i.ibb.co/yY54XW9/IMG20240514131416.jpg"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full  space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              The GPT Effect
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              Ever since the GPT Boom, i've been completely immersed in tech and
              especially, Artificial Intelligence. I believe in full automation
              of our lives and the risks but at the same time, it's pretty cool.
              Who knows, maybe in far future a robot would be reading this and
              thinking, This guy knew it!
            </h2>
          </div>
          <div className="flex flex-col ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.youtube.com/watch?v=pQgxiQAMTTo"}
            >
              <SuspenseImage
                loading="lazy"
                src={"https://i.ibb.co/x8BVhQb/image.png"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap flex-row  gap-y-4 md:gap-x-4 items-center w-full md:w-7/12 justify-between">
          <div className="flex flex-col w-full md:order-2 space-y-2">
            <h1 className="text-[4vw] md:text-[1.5vw] text-gray-200">
              Beep Boop
            </h1>
            <h2 className="text-[3.7vw] md:text-[1.1vw] text-gray-300">
              Music is an integral part of my daily routine, as I immerse myself
              in a diverse array of genres. From the mellow vibes of lo-fi
              hip-hop to the high-energy rhythms of trap and EDM, my playlists
              are a vibrant tapestry of sounds. Occasionally, I even try my hand
              at crafting beats, experimenting with various melodies and rhythms
              to create my own unique sonic escapes.
            </h2>
          </div>
          <div className="flex flex-col ">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.youtube.com/watch?v=J-5x1yL9hSc"}
            >
              <SuspenseImage
                loading="lazy"
                src={"https://i.ibb.co/NV3zs2M/image.png"}
                width={500}
                height={500}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row  mt-16 justify-center overflow-hidden md:items-center z-0  p-2 mb-3">
      <div className="flex flex-row w-full md:flex-nowrap overflow-hidden flex-wrap md:w-7/12 z-0 gap-y-4 md:gap-x-4 ">

      <Link href="https://open.spotify.com/playlist/0KUkoMq38ZcY1azjyXMqAy?si=9c64de3dda7e4d20">
        <Image className="hover:scale-105 z-0" src={"/ptivevibes.webp"} width={500} height={500}/>
      </Link>
      <Link href="https://open.spotify.com/playlist/4lrPOGvdNlrnkRJ3xy1VOf?si=66d5d5667f554beb">
        <Image className="hover:scale-110 z-0 scale-105 overflow-hidden" src={"/metal.webp"} width={500} height={500}/>
      </Link>
      <Link href="https://open.spotify.com/playlist/1uPKiRxpLE4qZuXOXWoSI6?si=d947e0418e7e417d">
        <Image className="hover:scale-105 z-0" src={"/studychill.webp"} width={500} height={500}/>
      </Link>
      </div>
      </div>
    </>
  );
}
