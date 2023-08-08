"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeroImg from "../../../assets/image 1.png";
import CoupleImg from "../../../assets/curosalImg.png";
import GroupImg from "../../../assets/Group 53.png";
import Ladies from "../../../assets/Rectangle 7.png";
import Image2 from "../../../assets/image 2.png";
import Image3 from "../../../assets/image 3.png";
import Image4 from "../../../assets/image 4 (1).png";
import Image5 from "../../../assets/image 5.png";
import Image6 from "../../../assets/image 6.png";

const index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = (prev: any) => {
    if (prev) {
      setMenuOpen(!prev);
      console.log("clicked");
    }
  };
  return (
    <>
      <div className="w-full bg-[#38363699]">
        <div className="w-full p-10 text-xl text-white z-10 relative font-cinzel">
          <div className="flex gap-x-4">
            <div className="w-6 text-white cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  onClick={handleMenu}
                />
              </svg>
            </div>
            <span>Menu</span>
          </div>
          {/* <div className="border border-red-500 w-1/4 h-[400px] mt-10"></div> */}
        </div>
        <div className="relative">
          <div className="w-full pt-8 sm:pt-16 lg:pt-20 relative">
            <div className="absolute z-20 text-white -top-4 sm:top-0 sm:pt-1 md:top-20 md:pt-2 text-center w-full font-cinzel">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
                Alisa Ferris
              </h1>
              <p className="pt-2 text-xl tracking-wide font-montserrat uppercase">
                Miami Wedding Photographer
              </p>
            </div>
            <Image
              src={HeroImg}
              alt="hero-img"
              className="h-[px] w-full relative"
            />
          </div>
          <div className="w-full absolute -top-28 inset-0 bg-[#38363699] stop-pointer"></div>
        </div>
      </div>
      <div className="lg:mt-40 mt-10 text-[#4E4C4C] w-full font-montserrat">
        <h2 className="text-3xl lg:text-6xl text-center font-cinzel">
          SIGNATURE WORK
        </h2>
        <p className="px-10 sm:px-0 sm:w-1/2 lg:w-full mx-auto lg:text-2xl text-center pt-2 uppercase leading-8 font-montserrat">
          Capturing timeless moments with intention and emotion
        </p>
        <div>
          <h2 className="text-center uppercase text-4xl md:text-6xl mt-10 md:mt-16 mb-10 py-4 font-cinzel">
            Portfolio
          </h2>
          <Image src={CoupleImg} alt="curosal-image" />
        </div>
        <div className="mt-10 lg:mt-28">
          <Image src={GroupImg} alt="group-image" className="w-full" />
        </div>
        <div className="lg:flex mt-20 lg:mt-40">
          <div className="w-full lg:w-1/2 px-20">
            <h3 className="text-center text-3xl lg:text-5xl mb-10 uppercase font-cinzel">
              Meet alisa
            </h3>
            <p className="font-montserrat">
              Alisa is a Miami Wedding Photographer, whose work has been
              featured in Martha Stewart Weddings, Style Me Pretty and The Knot,
              as well as by nationally-acclaimed brands BHLDN and Claire
              Pettibone.
            </p>
            <p className="mt-4 font-montserrat">
              A California native, her work is light, natural, romantic and
              timeless. Alisa prides herself on her drive to produce
              frame-worthy images and her down-to-earth disposition.
            </p>
            <p className="mt-4 font-montserrat">
              She is also the Co-Founder of Pialisa, a luxury tabletop rentals
              company.
            </p>
            <p className="mt-4 font-montserrat">
              When she's not photographing weddings, Alisa tends to her most
              important role: mother to 6-year old daughter, Nelly, 3-year old
              son, Georgie, and 2-year old daughter, Athena.
            </p>
            <div className="flex justify-center">
              <button className="sm:text-2xl mt-20 lg:mt-32 font-montserrat rounded-full py-4 px-4 bg-[#D9D9D9] border border-[#EFC326]">
                Read Full Blog
              </button>
            </div>
          </div>
          <div className="w-ful flex justify-center lg:w-1/2 lg:mt-0 mt-20">
            <Image
              src={Ladies}
              alt="group-image"
              className="w-auto h-[40rem]"
            />
          </div>
        </div>
        <div className="bg-[#BEBEBE] mt-28 grid grid-cols-2 gap-6 sm:gap-10 lg:grid-cols-5 md:flex-wrap px-4 md:px-20 py-20">
          <div className="col-span-6 lg:col-span-1 flex items-center justify-center">
            <Image src={Image2} alt="image2" />
          </div>
          <div className="col-span-6 lg:col-span-1 flex items-center justify-center">
            <Image src={Image3} alt="image3" />
          </div>
          <div className="col-span-12 lg:col-span-1 flex items-center justify-center">
            <Image src={Image4} alt="image4" />
          </div>
          <div className="col-span-6 lg:col-span-1 flex items-center justify-center">
            <Image src={Image5} alt="image5" />
          </div>
          <div className="col-span-6 lg:col-span-1 flex items-center justify-center">
            <Image src={Image6} alt="image6" />
          </div>
        </div>

        <div className="lg:flex max-w-7xl mt-28 mx-auto pb-20">
          <div className="w-full lg:w-1/2 text-center font-cinzel">
            <h3 className="text-4xl mb-10 uppercase">Alisa Ferris</h3>
            <ul className="uppercase">
              <li className="mt-4">Home</li>
              <li className="mt-4">Portfolio</li>
              <li className="mt-4">About</li>
              <li className="mt-4">Blog</li>
              <li className="mt-4">Contact</li>
              <li className="mt-4">Instagram</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
            <div className="px-12 lg:px-20">
              <h3 className="text-2xl sm:text-3xl font-cinzel">
                Get The Newsletter
              </h3>
              <p className="mt-4 font-montserrat">
                Sign up for our weekly delivery of inspiration, wanderlust, and
                wonder— and never miss out on exclusive, behind-the-scenes
                glimpses at what we’ve been shooting!
              </p>
              <form className="mt-10 flex flex-col items-end font-montserrat">
                <input
                  type="text"
                  placeholder="Type Your Name"
                  className="border-b border-black w-full outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="Type Your Email"
                  className="mt-4 border-b border-black w-full outline-none py-2"
                />
                <button className="mt-8">Join The List</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
