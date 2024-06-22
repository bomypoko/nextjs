import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "../../data";


export default function Home() {
  return (
    <main className=" relative bg-black flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">

        {/* <FloatingNav navItems={[
          {name: "Home", link: "/" , icon: <FaHome/>}
        ]} /> */}

        <FloatingNav navItems={navItems}/>

        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
