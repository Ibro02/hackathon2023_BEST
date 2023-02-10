import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
export default function Document() {

  return (
    <Html lang="en"style={{scrollBehavior:'smooth'}}>
      <Head />
      <body>
        <Main />
 
       
        <NextScript />
      </body>
    </Html>
  )
}
