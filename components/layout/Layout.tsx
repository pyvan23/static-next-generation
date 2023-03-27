import Head from "next/head";
import { FC } from "react";

interface Props{
  title?: string;
  children: React.ReactNode
}




export const Layout:FC<Props> = ({children,title}) => {
  return (
    <>
    
        <Head>
            <title></title>
          <meta name="author" content="Ivan, width=device-width" />
          <meta name="description" content="info..." />
          <meta name="keywords" content="info..." />
         
        </Head>
        <main>
            {children}
        </main>
    
    
    </>
  )
}
