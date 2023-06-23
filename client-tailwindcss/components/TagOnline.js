export const TagOnline = ({className: classNameProps}) => {
    const className ="font-bold uppercase relative px-3 py-1 gap-2 rounded-xl flex items-center justify-center bg-red-500 text-white after:w-3 after:border after:border-bg-red-400 after:h-3 after:animate after:animate-pulse after:bg-white after:rounded-full after:content-[''] w-max"
  return (
    <div className={className.concat(classNameProps)} >
      EN VIVO
    </div>
  );
};
