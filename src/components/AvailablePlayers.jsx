import { useState, useEffect } from "react";
import User from "../assets/User.svg";

export const AvailablePlayers = ({
  pickedPlayer,
  setPickedPlayer,
  coin,
  setCoin,
}) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadPlayers = async () => {
      const res = await fetch("http://localhost:3000/players");
      const data = await res.json();
      setPlayers(data);
    };

    loadPlayers();
  }, []);

  const handleChoosePlayer = (player) => {
    if (pickedPlayer.length === 6) return;
    if (player.price > coin) return;
    setPickedPlayer([...pickedPlayer, player]);
    setCoin(coin - player.price);
  };

  return (
    <div className="max-w-6xl m-auto flex flex-wrap gap-6 justify-center mt-10">
      {players.map((player) => (
        <div key={player.id}>
          <div className="h-140 w-90 border-slate-300 border rounded-2xl bg-gray-100 shadow-sm">
            <img
              className="h-60 w-80 mt-5 m-auto object-cover rounded-2xl"
              src={player.photo}
              alt="virat"
            ></img>
            <div className="flex mt-5 ml-5">
              <img src={User} alt="player"></img>
              <span className="ml-3 text-xl font-bold">{player.name}</span>
            </div>
            <div className="mt-5 flex justify-between items-center ">
              <div className="flex ml-5  items-center">
                <img
                  className="w-5 h-5 rounded-full"
                  src={player.flag}
                  alt="player"
                ></img>
                <span className="ml-3">{player.country}</span>
              </div>

              <div className=" items-center">
                <span className="text-sm mr-5 py-2 px-4 rounded-2xl border bg-gray-200 border-slate-300 hover:shadow-xs hover:border-slate-400 hover:cursor-pointer">
                  {player.role}
                </span>
              </div>
            </div>
            <div className="border-t border-slate-400 mt-7 mx-5">
              <div className="flex justify-between mt-5 mb-2">
                <span className="font-semibold">Rating</span>
                <span className="font-bold">{player.rating}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="">Batting Style</span>
                <span className="font-semibold">{player.battingStyle}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="">Bowling Style</span>
                <span className="font-semibold">
                  {player.bowlingStyle ? player.bowlingStyle : "none"}
                </span>
              </div>
              <div className="flex justify-between mt-3">
                <span className="font-semibold mt-2 font-sans">
                  Price: {player.price} coins
                </span>
                <button
                  disabled={pickedPlayer.some((p) => p.id === player.id)}
                  onClick={() => handleChoosePlayer(player)}
                  className="font-semibold text-sm py-2 px-2 rounded-2xl border bg-[#e7f377] border-slate-400 hover:shadow-xs hover:border-slate-500 hover:cursor-pointer disabled:opacity-40 disabled:bg-gray-200"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
