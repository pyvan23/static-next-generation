import { Layout } from "../components/layout/Layout";
import { Button } from "@nextui-org/react";
import { NextPage } from "next"


const HomePage: NextPage = () => {
  return (
    <>
    <Layout>
   
      <Button color={'gradient'}>
        Next
      </Button>
    
    </Layout>
    
    </>
  )
}


export default HomePage;