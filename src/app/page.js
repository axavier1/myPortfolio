"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import tonyPic from "/src/assets/images/Web Images/tonyPic.jpeg";
import mobileTestL from "/src/assets/images/Web Images/mobile-testing-and-group-discussion(light).png";
import analyzePicL from "/src/assets/images/Web Images/light-analyze-on-screen.png";
import laptopPicL from "/src/assets/images/Web Images/working-with-laptop(light).png";
import meme from "/src/assets/images/Web Images/notFunnyMeme.png"

// const scroll = {
//   scrollBehavior: 'smooth !important',
// }

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [text, setText] = useState(false);
  const checkName = (e) => {
    e.preventDefault();
    if (e.target.value.length < 4) {
      setName(true);
    } else {
      setName(false);
    }
  };
  const checkEmail = (e) => {
    e.preventDefault();
    const emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value);
    console.log(emailCheck);
    if (!emailCheck) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  };
  const checkText = (e) => {
    e.preventDefault();
    !e.target.value ? setText(true) : setText(false);
  };

  return (
    <body className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 min-h-screen md:px-20 lg:px-40 dark:bg-gray-800">
        <nav className="py-10 mb-12 flex justify-between text-gray-800 dark:text-white">
          <h1 className="text-xl">
            myPortfolio
          </h1>
          <ul className='flex items-center justify-be flex-row lg:gap-4 md:gap-4'>
            <li className='hover:text-teal-700 px-2 dark:hover:text-[#67E0FE]'>
              <a href='#projects'>
                Projects
              </a>
            </li>
            <li className='hover:text-teal-700 px-2 dark:hover:text-[#67E0FE]'>
              <a href='#contact'>
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
            <li className="transition ease-in-out delay-150 hover:scale-110">
              <a className="bg-gradient-to-r from-teal-700 to-teal-500 text-white px-4 py-2 rounded-lg ml-8 focus:ring ring-black ring-opacity-10" href="https://drive.google.com/file/d/1ogd6E07HCcULmW_ZFxaezrDOAouuJjJa/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <section className="text-center p-10 pb-4">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl dark:text-[#67E0FE]">
              Hello, my name is ANTHONY XAVIER
            </h2>
            <h3 className="text-gray-800 pr-8 text-2xl py-2 md:text-3xl dark:text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Aspiring Full-Stack Developer')
                .pauseFor(300)
                .deleteChars(20)
                .typeString('Software-Engineer')
                .pauseFor(300)
                .deleteChars(17)
                .typeString('Front-End Developer')
                .pauseFor(1000)
                .start()
              }}
            />
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Coder looking to provide services in all things regarding Full-Stack Development, primarily focused on front end.
            </p>
            <p className="text-lg text-gray-800 dark:text-white">
              Find me on:
            </p>
          </section>
          <i className="text-5xl flex justify-center gap-16 pb-3 text-gray-800 dark:text-white">
            <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-teal-500 duration-300 dark:hover:text-[#67E0FE]" href="https://github.com/axavier1">
              <AiFillGithub/>
            </a>
            <a className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:text-teal-500 duration-300 dark:hover:text-[#67E0FE]" href="https://www.linkedin.com/in/anthonyxavier1/">
              <AiFillLinkedin/>
            </a>
          </i>
          <section className="relative mx-auto mb-8 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={tonyPic} layout="fill" objectFit="cover"/>
          </section>
          <section>
            <div className="text-gray-800 dark:text-white">
              <h3 className='text-2xl py-3 mb-3'>
                Services I Offer
              </h3>
              <p className='text-lg py-2 leading-8 text-grey-800'>
                As a Full Stack Developer I offer the following services:
              </p>
              <ul className='text-lg py-2 leading-8 text-grey-800 text-justify list-disc ml-9 '>
                <li className='my-4'><span className='text-teal-500 dark:text-[#67E0FE]'>Full Stack Web Development</span>: I can design and develop responsive web applications using modern frameworks like Angular and React, backed by efficient server-side implementations using Spring Boot, Express, and Node.js.</li>
                <li className='my-4'><span className='text-teal-500 dark:text-[#67E0FE]'>Database Design and Implementation  </span>: I can design and implement efficient database solutions using MongoDB, ensuring data integrity and scalability for web applications and data-driven systems</li>
                <li className='my-4'><span className='text-teal-500 dark:text-[#67E0FE]'>API Development  </span>: I have experience in building RESTful APIs using frameworks like Express and Spring Boot, enabling seamless communication between front-end and back-end systems.</li>
                <li className='my-4'><span className='text-teal-500 dark:text-[#67E0FE]'>Technical Consulting  </span> : I can provide technical guidance and consulting services, helping businesses make informed decisions regarding technology stack selection, architecture design, and best practices for software development projects.</li>
                <li className='my-4'><span className='text-teal-500 dark:text-[#67E0FE]'>Continuous Improvement and Optimization  </span> : I am dedicated to continuously improving the performance and scalability of applications, optimizing code, and staying updated with the latest industry trends and best practices.</li>
              </ul>
            </div> 
          </section>
          <section className="text-gray-800 lg:flex gap-10 dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center flex-col items-center">
                <Image src={mobileTestL} width={200} height={200} className=""/>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  24/7 Support & Communication
                </h3>
                <p className="py-2">
                  Experience seamless communication, available for your questions, and stay informed about your project's status. 
                </p>
                <h4 className="pt-4 pb-2 text-teal-500 dark:text-[#67E0FE]">
                  Reach me at:
                </h4>
                <p className="py-1">
                  My email: a.xavier10001@gmail.com
                </p>
                <p className="py-1">
                  My phone: (201)-895-9369
                </p>
              </div>
            </div>
            <div className="text-center shadow-lg  p-10 rounded-xl my-10">
              <div className="flex justify-center flex-col items-center">
                <Image src={analyzePicL} width={200} height={200} className=""/>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Cutting-edge Tech, Impressive Results.
                </h3>
                <p className="py-2">
                  Mastering a spectrum of technologies, I deliver clean and impressive products, ensuring your project stands out with technical excellence.
                </p>
                <h4 className="pt-4 pb-2 text-teal-500 dark:text-[#67E0FE]">
                  Technologies I use:
                </h4>
                <p className="py-1">
                  JavaScript
                </p>
                <p className="py-1">
                  React.js
                </p>
                <p className="py-1">
                  Tailwind.CSS
                </p>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <div className="flex justify-center flex-col items-center">
                <Image src={laptopPicL} width={150} height={150} className=""/>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Dedicated to your success.
                </h3>
                <p className="py-2">
                  With unwavering diligence and a commitment to excellence, I dedicate myself to ensuring your project's success, meeting both your standards and mine.
                </p>
                <h4 className="pt-4 pb-2 text-teal-500 dark:text-[#67E0FE]">
                  Find my work:
                </h4>
                <p className="py-1">
                  Github
                </p>
                <p className="py-1">
                  LinkedIn
                </p>
                <p className="py-1">
                  StackOverflow
                </p>
              </div>
            </div>
          </section>
          <section className="text-gray-800 dark:text-white" id="projects">
            <div>
              <h3 className="text-2xl py-3">
                Projects
              </h3>
              <p>
                Lorem ipsum
              </p>
              <div>
                <Image src={meme}/>
              </div>
            </div>
          </section>
          <section className="text-gray-800 p-8 mt-8 max-w-lg mx-auto dark:text-white" id="contact">
            <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold mb-4 dark:text-white">
              Contact Form
            </h1>
            <form>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="name" className="leading-7 py-4 text-lg text-gray-800">
                    Name
                  </label>
                  <input type="text" id="name" name="name" required="" placeholder="Your Name" className=" w-full bg-white rounded border border-gray-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" onBlur={checkName}/>
                  {name ? (
                    <p className="errMsg text-red-600">
                      Your name should have more then 3 letters.
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="relative my-5">
                  <label for="email" class="leading-7 py-4 text-lg text-gray-800">
                    Email
                  </label>
                  <input type="email" id="email" name="email" required="" placeholder="youremail@example.com" className=" w-full bg-white rounded border border-gray-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 text-base outline-none text-gray-800 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" onBlur={checkEmail}/>
                  {email ? <p className="errMsg text-red-600">Please enter a valid email.</p> : <></>}
                </div>
                <div className="relative">
                  <label for="message" class="leading-7 py-4 text-lg text-gray-800">
                    Message
                  </label>
                  <textarea id="message" name="message" required=""
                    placeholder="Your message"
                    className=" w-full bg-white rounded border border-gray-400 focus:border-teal-500 focus:bg-white focus:ring-2 focus:ring-teal-200 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onBlur={checkText}>
                  </textarea>
                  {text ? <p className="errMsg text-red-600">
                    Message cannont be blank.
                  </p> : <></>}
                </div>
                <div>
                  <button type="submit"
                    className="flex text-white bg-gradient-to-r from-teal-700 to-teal-500 border-0 py-3 px-6 mt-2 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
        <footer className="text-gray-800 text-xs footer footer-center p-4 bg-base-300 text-base-content dark:text-white">
          <aside>
            <p>Made with blood, sweat and tears by Anthony Xavier  - All right reserved by me</p>
          </aside>
        </footer>
      </div>
    </body>
  );
}