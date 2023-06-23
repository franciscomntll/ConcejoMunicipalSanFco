import { useEffect } from "react";
import Swiper, { Navigation, Scrollbar } from "swiper";
import { Card } from "./Card";
import { ChevronIcon } from "./icons";

export const SectionBlock = () => {
  useEffect(() => {
    new Swiper(`.swiper`, {
      modules: [Navigation, Scrollbar],
      direction: "horizontal",
      spaceBetween: 20,
      slidesPerView: 3,
      breakpointsBase: "container",
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1536: {
          slidesPerView: 6,
        },
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: `.swiper-button-prev`,
      },

      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }, []);

  return (
    <>
      <div className="w-full flex p-6 flex-col items-center lg:items-start justify-center gap-3">
        <h2 className="font-black text-gray-700 px-6 text-2xl ">
          Noticias
        </h2>
        <div className="grid grid-cols-1">
          <div
            className="swiper w-full relative h-full"
            style={{ paddingBlock: "0.75rem", overflow: "visible" }}
          >
            <div className="swiper-wrapper w-full mb-10" style={{ height: "fit-content"}}>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
              <div className="swiper-slide">
                <Card />
              </div>
            </div>
            <div className="hidden md:flex w-full justify-between items-center absolute top-1/2 -translate-y-1/2 z-10 ">
              <button
                className="swiper-button-prev w-10 h-10 focus:outline-none rounded-full bg-white shadow items-center justify-center flex p-2 border-black text-black -translate-x-1/2 disabled:opacity-0"
              >
                <ChevronIcon className="w-full h-full rotate-180" />
              </button>
              <button className="swiper-button-next w-10 h-10 focus:outline-none rounded-full bg-white shadow items-center justify-center flex p-2 border-black text-black translate-x-1/2 disabled:opacity-0">
                <ChevronIcon className="w-full h-full" />
              </button>
            </div>
            <div className="swiper-scrollbar h-1 w-full bg-slate-50 mx-auto" style={{ width: "50%"}}/>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .swiper-scrollbar-drag {
            background-color: rgb(203 213 225);
            height: 100%;
            border-radius: 9999px;
          }
        `}
      </style>
    </>
  );
};
