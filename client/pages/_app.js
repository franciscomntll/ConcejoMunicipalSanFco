import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from '../layouts/DefaultLayout'
import theme from '../theme'
import '@fontsource/raleway'
import '@fontsource/open-sans'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
    return (
      <ChakraProvider theme={theme}>
          <DefaultLayout>
        <Component {...pageProps} />
        </DefaultLayout>
        <style jsx global>
        {`
          form {
            width: 100%;
          }
        `}
      </style>
        </ChakraProvider>

    )
  }

export default MyApp