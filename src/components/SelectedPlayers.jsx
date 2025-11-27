import delicon from "../assets/DeleteIcn.svg";

export const SelectedPlayers = ({
  pickedPlayer,
  setPickedPlayer,
  coin,
  setCoin,
  setToggle,
}) => {
  const handleDelete = (delPlayer) => {
    const updatedPickedPlayer = pickedPlayer.filter(
      (player) => player.name != delPlayer.name
    );
    setPickedPlayer(updatedPickedPlayer);
    setCoin(coin + delPlayer.price);
  };

  return (
    <div className="mt-10">
      {pickedPlayer.map((player) => (
        <div key={player.id}>
          <div className="max-w-[1120px] m-auto border border-slate-300 hover:bg-gray-50 flex justify-between px-6 py-4 my-3 rounded-2xl shadow-sm">
            <div className="flex">
              <img
                className="w-20 h-20 object-cover rounded-2xl mr-5"
                src={player.photo}
                alt={player.name}
              ></img>
              <div className="flex flex-col justify-around">
                <h1 className="font-semibold text-lg">{player.name}</h1>
                <p className="opacity-70">Rating: {player.rating}</p>
              </div>
            </div>

            <img
              onClick={() => {
                handleDelete(player);
              }}
              className="hover:cursor-pointer"
              src={delicon}
              alt="remove"
            ></img>
          </div>
        </div>
      ))}
      <div className="max-w-[1120px] m-auto mt-5">
        <div className="flex h-17 w-50 items-center border border-slate-400 py-2 px-2 rounded-xl shadow-sm">
          <span
            onClick={() => {
              setToggle(true);
            }}
            className="hover:cursor-pointer text-sm font-semibold bg-[#E7FE29] py-3 px-6 rounded-xl m-auto border border-slate-200 hover:shadow-sm"
          >
            Add More Players
          </span>
        </div>
      </div>
    </div>
  );
};
