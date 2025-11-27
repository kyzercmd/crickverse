import BannerBg from "../assets/bg-shadow.png";
import BannerMain from "../assets/banner-main.png";

export const Banner = () => {
  return (
    <div className="relative max-w-6xl h-135 m-auto rounded-3xl bg-[#131313] overflow-hidden">
      <img className="object-cover w-full h-full" src={BannerBg}></img>
      <div className="absolute inset-0 flex items-center justify-center pb-50">
        <img className="w-auto h-auto" src={BannerMain}></img>
      </div>

      <div className="absolute inset-0 flex justify-center items-center flex-wrap z-10 flex-col mt-65">
        <span className="font-bold text-white text-4xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </span>
        <span className=" text-white/70 text-2xl mt-5">
          Beyond Boundaries Beyond Limits
        </span>

        <div className="flex justify-center items-center border border-[#E7FE29] py-2 px-2 rounded-xl mt-5">
          <span className="bg-[#E7FE29] hover:cursor-pointer py-4 px-7  rounded-xl text-sm font-bold">
            Claim Free Credit
          </span>
        </div>
      </div>
    </div>
  );
};
