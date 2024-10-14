import React from "react";

export const Contact = () => {
  return (
    <div className="my-5 flex justify-center">
      <div className="container mx-auto flex flex-col rounded-2xl bg-gray-200 px-5 py-4 text-gray-500">
        <div className="mb-6 w-full sm:text-center xl:mb-0">
          <div className="mb-4 text-3xl font-extrabold text-gray-900">Contact me</div>
          <div className="text-lg">With expertise in React, Next.js, and React Native.<br />  I'm passionate about delivering accessible, scalable web and mobile solutions.
            <br />Let's collaborate on your next project!
          </div>

          <div className="flex w-full justify-center mt-4">
            <a href="mailto:truongdinhkie321@gmail.com" className="flex h-12 w-1/4 items-center justify-center rounded-lg bg-purple-600 text-white shadow transition-all duration-300 ease-in-out hover:bg-purple-700">Send me an email</a>
          </div>

        </div>
      </div>
    </div>
  );
};

