import { useEffect, useRef, useState } from "react";
import { TagOnline } from "./tagOnline";

export const YoutubeBlock = ({ fullWidth }) => {
    const [widthContainer, setWidthContainer] = useState(null)
    const containerRef = useRef()
    
    useEffect(() => {
      const node = containerRef.current
      const handle = (e) => {
        const entry = e[0]
        const container = entry.target;
        if(container){
          const {width} = container.getBoundingClientRect()
          setWidthContainer(width)
        }
      }
      if(node){
        new ResizeObserver(handle).observe(node)
      }
    }, [containerRef.current])
    
  return (
    <div ref={containerRef} className={`py-10 flex ${fullWidth && widthContainer > 847   ? "" : "flex-col"} gap-10`}>
      <div className={`flex items-center w-full justify-center gap-3 ${widthContainer > 847 ? "flex-col" : ""}`}>
        <h2 className="text-gray-300 font-bold text-xl sm:text-3xl md:text-5xl font-light text-gray-400 flex items-center gap-2">
          Ve aqui nuestra sesión
        </h2>
        <TagOnline className="text-xs sm:text-lg" />
      </div>
      <iframe
        src="https://www.youtube.com/embed/5qmEHygkJdM"
        title="Video de youtube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-3xl aspect-video overflow-hidden mx-auto inset-x-0 lg:max-w-[90%] w-full"
        allowfullscreen
      ></iframe>
    </div>
  );
};
