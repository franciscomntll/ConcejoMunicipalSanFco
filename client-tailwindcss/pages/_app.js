import { DefaultLayout } from "../layout/DefaultLayout";
import "swiper/css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
