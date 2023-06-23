import Image from "next/image";
import { ChevronIcon } from "./icons";

export const PrincipalBanner = ({ fullWidth, handleClickBanner }) => {
  return (
    <div
      className={`relative overflow-hidden h-[75vh] lg:h-screen w-full lg:w-[70%] lg:rounded-r-[5rem] cursor-pointer transition-all duration-[1500ms] ${
        fullWidth ? "md:-ml-[65%]" : ""
      } `}
      onClick={handleClickBanner}
    >
      <div
        className={`z-10 w-full h-full top-0 left-0 bg-gradient-to-t from-black to-gray-900 opacity-60 transition ${
          fullWidth ? "hover:opacity-80" : ""
        } absolute`}
      />
      <Image
        src="/banner.jpg"
        width={2000}
        height={2000}
        className="object-cover relative z-0 object-left top-0 left-0 w-full h-full"
      />
      {/* Layout Overlay */}
      <div className="absolute w-full h-full p-10 top-0 flex flex-col items-center lg:items-start justify-between z-20 gap-6">
        <Image
          src={"/Logo.png"}
          width={300}
          height={300}
          className="z-10 w-60"
          alct="Logo Concejo Municipal"
        />
        <div className="flex flex-col items-start justify-end gap-6">
          <h1 className="text-white font-black text-center lg:text-left text-3xl sm:text-4xl xl:text-sm 2xl:text-4xl w-full sm:w-2/3 mx-auto 2xl:w-5/6">
            AHORA el concejo municipal esta en la web
          </h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg mx-auto lg:ml-0">
            Ir a la seccion
          </button>
        </div>
      </div>
      <button
        className={`hidden md:block absolute right-3 top-1/2 transition -translate-1/2 z-10 text-white w-max ${
          fullWidth ? "opacity-100 animate animate-pulse" : "opacity-0"
        }`}
      >
        <ChevronIcon className="w-8 h-8" />
      </button>
    </div>
  );
};
