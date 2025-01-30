import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-screen h-screen">
    <div className="w-full h-[15%] bg-[#2b2b2b] flex flex-row">
      <h1 className="text-4xl ml-12 mt-4">Planit</h1>
      <Link href={"/signup"}><button className="text-2xl ml-8 mt-6 border-2 rounded-xl border-[#409ebd] bg-[#409ebd] w-[160px]">Signup</button></Link>
      <Link href={"/signup"}><button className="text-2xl ml-8 mt-6 border-2 rounded-xl border-[#409ebd] bg-[#409ebd] w-[160px]">Signin</button></Link>
    </div>
    <div className="w-full h-[85%] flex flex-col justify-center items-center">
        <h1 className="pl-32 pr-32 text-2xl text-center tracking-wider leading-loose">
        PlanIt is a modern and user-friendly community event organizer designed to simplify the way people plan, manage, and attend events. Whether you're hosting a casual meetup, a workshop, or a large-scale community event, PlanIt provides all the tools you need in one place.</h1>
        <button className="text-2xl mt-4 border-2 rounded-xl border-[#409ebd] bg-[#409ebd] w-[160px]">Lets Start</button>
        <div className="flex mt-24 w-full ">
              <div className="h-[100px] w-[33%] ml-28">
                <h1 className="text-2xl font-bold">Create events</h1>
              </div>
              <div className="h-[100px] w-[33%] ml-28">
                <h1 className="text-2xl font-bold">Invite participants</h1>
              </div>
              <div className="h-[100px] w-[33%] ml-28">
                <h1 className="text-2xl font-bold">Collaborate</h1>
              </div>   
        </div>
    </div>
    </div>
  );
}
