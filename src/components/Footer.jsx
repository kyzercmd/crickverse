import bgshadow from "../assets/bg-shadow.png";
import footerlogo from "../assets/logo-footer.png";

export const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-0 bottom-0 w-full md:h-150 h-200 -z-10 bg-[#06091A]" />
      <div className="max-w-[1150px] border border-white m-auto mt-5 rounded-2xl bg-transparent">
        <div
          className="max-w-[1100px] h-80 text-4xl m-5 bg-cover rounded-2xl bg-white"
          style={{
            backgroundImage: `url(${bgshadow})`,
          }}
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="md:text-4xl text-2xl font-bold mt-20">
              Subscribe to our Newsletter
            </h1>
            <p className="md:text-base text-sm text-slate-700 font-semibold">
              Get the latest updates and news right in your inbox!
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-xl text-base py-3 px-6"
            ></input>
            <span className="hover:cursor-pointer text-base font-bold bg-[#E7FE29]  py-3 px-6 rounded-xl ml-4 border hover:shadow-xl">
              Subscribe
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl m-auto">
        <img className="mt-3 m-auto" src={footerlogo} alt="logo"></img>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left mt-10">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 font-bold text-base">ABOUT US</p>
            <p className="text-slate-200 text-sm">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className="md:ml-30">
            <p className="text-gray-400 font-bold text-base">QUICK LINKS</p>
            <ul className="text-slate-200 text-sm flex flex-col gap-2 mt-2">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-gray-400 font-bold text-base">SUBSCRIBE</p>
            <p className="text-slate-200 text-sm mt-2">
              Subscribe to our newsletter for latest updates.
            </p>
            <div className="flex items-center mt-2 ml-23 md:ml-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white rounded-xl py-2 px-4 text-sm"
              ></input>
              <span className="bg-[#e7f377] hover:cursor-pointer text-sm font-semibold rounded-xl ml-1 p-2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-slate-700 border-t mt-10">
        <p className="text-sm text-white text-center py-5">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </footer>
    </div>
  );
};
