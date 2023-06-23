import { useRouter } from "next/router";
import { cloneElement, useState } from "react";
import { Navigation } from "../components/Navigation";
import { PrincipalBanner } from "../components/PrincipalBanner";

export const DefaultLayout = ({ children }) => {
  const router = useRouter();
  const [fullWidth, setFullWidth] = useState(false);
  const handleClickBanner = () => {
    const widthWindow = window.innerWidth;
    if(widthWindow < 1024) {
      !fullWidth && setFullWidth(false); 
    };
    setFullWidth(!fullWidth);
  };
  return (
    <div>
      <div className="w-screen flex flex-col lg:flex-row">
        {router.asPath === "/" && (
          <PrincipalBanner
            fullWidth={fullWidth}
            handleClickBanner={handleClickBanner}
          />
        )}
        <main className="relative w-full lg:h-screen overflow-auto">
          <Navigation
            fullWidth={fullWidth}
            handleClickBanner={handleClickBanner}
          />
          {cloneElement(children, { fullWidth })}
          <footer className="w-full bg-gray-600 flex flex-col sm:flex-row items-center justify-between text-white relative bg-primary md:rounded-t-full px-5 md:px-20 py-4">
            <small>
              © {new Date().getFullYear()}, Consejo Municipal de San Francisco
            </small>
            <small>Siguenos en nuestras redes sociales</small>
          </footer>
        </main>
      </div>
    </div>
  );
};
