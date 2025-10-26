// import Image from "next/image";
import { Dashboard, Nav } from "./components/__organism";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen  bg-[#F7F8FD] md:px-[5.07%] md:pt-[56px] md:pb-[113px] lg:px-[11.45%] lg:pt-[94px] lg:pb-[129px] flex  justify-start">
      <div className="w-full bg-green-200 flex flex-col justify-start md:gap-10 lg:gap-[30px] lg:flex-row">
        <div className="w-full lg:w-[22.95%]">
          <Nav />
        </div>
        <div className="w-full lg:w-[74.34%] bg-red-200 px-6 md:px-0">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
