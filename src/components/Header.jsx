import Logo from "../assets/logo.png";
import Coin from "../assets/coin.png";

export const Header = () => {
  return (
    <div className="max-w-6xl flex items-center justify-between mx-auto mt-2 mb-6 ">
      <div>
        <img src={Logo} alt="CrickVerse Logo"></img>
      </div>
      <nav className="text-base">
        <span className="p-4 mr-3 text-slate-700  hover:cursor-pointer">
          Home
        </span>
        <span className="p-4 mr-3 text-slate-700 hover:cursor-pointer">
          Fixture
        </span>
        <span className="p-4 mr-3 text-slate-700 hover:cursor-pointer">
          Teams
        </span>
        <span className="p-4 mr-3 text-slate-700 hover:cursor-pointer">
          Schedules
        </span>
        <span className="text-sm py-2 px-4 mr-3 text-slate-700 hover:cursor-pointer inline-flex items-center gap-2 border border-slate-200 rounded-xl font-bold hover:shadow-xs hover:border-slate-300">
          {" "}
          5000000 coin <img className="w-6 h-6 " src={Coin} alt="coin"></img>
        </span>
      </nav>
    </div>
  );
};
