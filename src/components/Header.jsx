import Logo from "../assets/logo.png";
import Coin from "../assets/coin.png";

export const Header = ({ coin }) => {
  return (
    <div className="max-w-6xl flex items-center justify-between mx-auto mt-2 mb-6 ">
      <div>
        <img
          className="md:w-18 md:h-18 w-16 h-16"
          src={Logo}
          alt="CrickVerse Logo"
        ></img>
      </div>
      <nav className="md:text-base text-sm">
        <span className="md:p-4 p-2 md:mr-3 mr-0 text-slate-700  hover:cursor-pointer">
          Home
        </span>
        <span className="md:p-4 p-2 md:mr-3 mr-0 text-slate-700 hover:cursor-pointer">
          Fixture
        </span>
        <span className="md:p-4 p-2 md:mr-3 mr-0 text-slate-700 hover:cursor-pointer">
          Teams
        </span>
        <span className="md:p-4 p-2 md:mr-3 mr-0 text-slate-700 hover:cursor-pointer">
          Schedules
        </span>
        <span className="text-sm md:py-2 md:px-4 md:mr-3 text-slate-700 hover:cursor-pointer inline-flex items-center gap-2 border border-slate-200 rounded-xl font-bold hover:shadow-xs hover:border-slate-300">
          {" "}
          {coin} coin <img className="w-6 h-6 " src={Coin} alt="coin"></img>
        </span>
      </nav>
    </div>
  );
};
