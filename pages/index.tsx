import { Button } from "@nextui-org/react";
import { NextPage } from "next"


const HomePage: NextPage = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
      <Button color={'gradient'}>
        Next
      </Button>
    </div>
    </>
  )
}


export default HomePage;