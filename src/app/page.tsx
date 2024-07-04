import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "../../data";
import { Fa1 } from "react-icons/fa6";


export default function Home() {
  return (
    <main className=" relative bg-black flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">


        <FloatingNav navItems={navItems}
          />

        <Hero/>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
