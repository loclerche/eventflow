import Image from "next/image";
import Hero from "./hero/page";
import Navbar from "./navbar/page";
import Events from "./events/page"
import Main from "./main/page"
import Footer from"./footer/page"

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Main/>
    <Events/>
    <Hero/>
    <Footer/>
    
   </div>
  );
}
