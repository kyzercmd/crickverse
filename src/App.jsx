import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { AvailablePlayers } from "./components/AvailablePlayers";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Banner />
      <div className="max-w-6xl m-auto mt-20 flex justify-between items-center">
        <div className="font-bold text-2xl">Available Players</div>
        <div className="text-sm rounded-2xl border hover:cursor-pointer flex hover:shadow-xs hover:border-slate-300 border-slate-200 bg-[#E7FE29] overflow-hidden">
          <button className="py-2 px-6 font-bold border-r border-slate-200">
            Available
          </button>
          <button className="bg-slate-50 py-3 px-6 font-bold">
            {`Selected (${count})`}
          </button>
        </div>
      </div>
      <button onClick={() => setCount(count + 1)}>pick player</button>
    </>
  );
}

export default App;
