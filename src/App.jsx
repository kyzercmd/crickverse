import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { AvailablePlayers } from "./components/AvailablePlayers";
import { SelectedPlayers } from "./components/SelectedPlayers";

function App() {
  const [coin, setCoin] = useState(5000000);
  const [toggle, setToggle] = useState(true);
  const [pickedPlayer, setPickedPlayer] = useState([]);

  return (
    <>
      <Header coin={coin} setCoin={setCoin} />
      <Banner />
      <div className="max-w-6xl m-auto mt-20 flex justify-between items-center">
        <div className="font-bold text-2xl text-slate-800">
          {toggle
            ? "Available Players"
            : `Selected Players (${pickedPlayer.length}/6)`}
        </div>
        <div className="text-sm rounded-2xl border hover:cursor-pointer flex hover:shadow-xs hover:border-slate-300 border-slate-200 overflow-hidden ">
          <button
            onClick={() => setToggle(true)}
            className={`${
              toggle ? "bg-[#E7FE29]" : "bg-slate-50"
            } py-3 px-6 font-bold border-r border-slate-200`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${
              toggle ? "bg-slate-50" : "bg-[#E7FE29]"
            } py-3 px-6 font-bold`}
          >
            {`Selected (${pickedPlayer.length})`}
          </button>
        </div>
      </div>
      {toggle ? (
        <AvailablePlayers
          pickedPlayer={pickedPlayer}
          setPickedPlayer={setPickedPlayer}
          coin={coin}
          setCoin={setCoin}
        />
      ) : (
        <SelectedPlayers
          pickedPlayer={pickedPlayer}
          setPickedPlayer={setPickedPlayer}
          coin={coin}
          setCoin={setCoin}
          setToggle={setToggle}
        />
      )}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
