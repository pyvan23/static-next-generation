import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui/Navbar';


interface Props {
  title?: string;
  children: React.ReactNode
}




export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>

      <Head>
        <title>{title}</title>
        <meta name="author" content="Ivan, width=device-width" />
        <meta name="description" content="info..." />
        <meta name="keywords" content="info..." />

      </Head>
      <Navbar/>
      <main>
      
          {children}

       

      </main>


    </>
  )
}
