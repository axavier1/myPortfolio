"use client";

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import tonyPic from "/src/assets/images/tonyPic.jpeg";

export default function Home() {
  return (
    <body>
      <div className="bg-white px-10 min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">myPortfolio</h1>
          <ul className='flex items-center justify-be flex-row lg:gap-4 md:gap-4'>
            <li className='hover:text-teal-700 px-2'> <a href='#projects'>Projects</a> </li>
            <li className='hover:text-teal-700 px-2'> <a href='#contact'>Contact</a> </li>
          </ul>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-2xl" /></li>
            <li>
              <a className="bg-gradient-to-r from-teal-700 to-teal-00 text-white px-4 py-2 rounded-lg ml-8 focus:ring ring-black ring-opacity-10 gradient element-to-rotate" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <section className="text-center p-10 pb-4">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">
              Hello, my name is ANTHONY XAVIER
            </h2>
            <h3 className=" pr-8 text-2xl py-2">
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
            <p className="text-md py-5 leading-8 text-gray-800">
              Coder looking to provide services in all things regarding Full-Stack Development, primarily focused on front end.
            </p>
            <p className="text-lg text-gray-800">
              Find me on:
            </p>
          </section>
          <i className="text-5xl flex justify-center gap-16 pb-3 text-gray-800 ">
            <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-teal-500 duration-300" href="https://github.com/axavier1">
              <AiFillGithub/>
            </a>
            <a className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-teal-500 duration-300" href="https://www.linkedin.com/in/anthonyxavier1/">
              <AiFillLinkedin/>
            </a>
          </i>
          <section className="relative mx-auto mb-8 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={tonyPic} layout="fill" objectFit="cover"/>
          </section>
        </main>
        {/* <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Made with blood, sweat and tears by Anthony Xavier  - All right reserved by me</p>
          </aside>
        </footer> */}
      </div>
    </body>
  );
}
