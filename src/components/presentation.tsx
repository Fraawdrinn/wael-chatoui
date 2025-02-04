"use client";
import Bar from "@/components/bar";

const Presentation:React.FC = () => {

  return (
    <header className="w-screen pb-24 shadow-lg">
      <Bar />
      <div className="h-screen flex items-center justify-center">
        <div className="presentation-sentences">
          <h2 className="text-3xl md:text-4xl playwrite-in-medium pb-2">
            <i><span>Bonjour</span></i>
            <span>👋</span>
          </h2>
          <h1 className="text-4xl md:text-6xl text-[#9b4819] poppins-medium font-semibold">
            <i>
            <span>Je</span>&nbsp;
            <span>m&apos;</span>
            <span>appelle</span>&nbsp; 
            <span className="name">Wael</span>&nbsp;
            <span>!</span>
            </i>
          </h1>
          <AnimatedPath />
        </div>
      </div>
    </header>
  );
};

function AnimatedPath() {
  return (
    <svg width="900" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="30 50 450 100">
      <path
        className="path"
        d="M50,75 C100,50 200,100 250,75 C300,50 400,100 450,75"
        fill="none"
        stroke="black"
      />
    </svg>
  );
}

export default Presentation;