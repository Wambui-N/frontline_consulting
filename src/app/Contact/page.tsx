import React from "react";

function page() {
  return (
    <div>
      <h3 className="text-orange font-regular text-center text-2xl">
        Contact Us
      </h3>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <p>Something</p>
        </div>
        <div className="basis-1/2 flex items-center justify-center">
          <form className="flex flex-col w-full gap-3">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="border-[1px] outline-none border-black/25 rounded-md p-1 bg-transparent focus:border-orange/70"
              ></textarea>
            </div>
            <button className="my-2 px-4 py-1 rounded-full border-[1px] border-orange bg-orange hover:bg-transparent text-white hover:text-orange transition-all ease-in-out duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
