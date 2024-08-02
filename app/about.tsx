import React from 'react';
import { MdCheckCircleOutline } from "react-icons/md";
import { checklistItems } from './data';
import Image from 'next/image';
import Link from 'next/link';

const about = () => {
  return (
    <div className="mt-20 px-4">
      <div className="text-3xl bg-gradient-to-b from-green-500 to-sky-200 bg-opacity-50 bg-clip-text text-transparent sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
         What You Get from <br /> the ​Course
      </div>
      <div className="flex flex-wrap pt-8 justify-center">
        <div className="p-2 w-full lg:w-1/2 flex justify-center">
          <img
            alt="phone"
            src="/images/phone.png"
            className="max-w-full h-auto md:w-3/4 lg:w-full"
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6  h-10 w-10 flex justify-center items-center rounded-full">
                <MdCheckCircleOutline className="text-2xl" />
              </div>
              <div>
                <h5 className="mt-1 text-white mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
          <Link
            href={"/book"}
            className="cursor-pointer flex items-start ml-16 justify-center border w-48 p-2 ml-0 my-6 text-white"
            >
            Get Course
        </Link>

        </div>
      </div>
    </div>
  );
};

export default about;
