import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = ({fullWidth}) => {
  const optionsMenu = [
    {title: "Gaceta", route: "/gaceta"},
    {title: "Noticias", route: "/noticias"},
    {title: "Concejales", route: "/concejales"},
    {title: "En vivo", route: "/en-vivo"},
  ];
  const router = useRouter()
  const isNotHomePage = router.asPath !== "/"
  return (
    <div className={`hidden lg:block w-full mx-auto inset-x-0 px-5 lg:px-0 ${isNotHomePage? "bg-primary " : ""}`}>
      <nav className= {`border-b w-full border-gray-100 mx-auto px-5 flex items-center justify-between shadow-sm px-10`}>
        <Link href={"/"} passHref>
       <Image src={isNotHomePage ? "/Logo.png" : "/Logo-gray.png"} width={300} height={300} className={`z-10 w-48 h-18 object-contain transition-all duration-1000 delay-100 ${fullWidth || isNotHomePage ? "opacity-100 -translate-x-0 " : "opacity-0 -translate-x-[100%]"}`} alct="Logo Concejo Municipal" />
        </Link>
        <ul className="flex items-center justify-between gap-12 py-6">
          {optionsMenu.map((item, idx) => (
            <Link key={idx} href={item.route}>
            <li className={`font-bold uppercase text-md relative px-3 py-1 gap-2 rounded-xl flex items-center justify-center ${item.route.includes("en-vivo") ? "bg-red-500 text-white after:w-3 after:border hover:-translate-y-1 after:border-bg-red-400 after:h-3 after:animate after:animate-pulse after:bg-white after:rounded-full after:content-['']" : `${isNotHomePage? "text-white hover:bg-white hover:text-primary" : "hover:bg-primary text-primary"} `} hover:text-white transition`}>
              {item.title}
            </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
