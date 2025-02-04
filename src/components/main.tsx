import React from 'react';

import Aside from "@/components/aside";
import Content from "@/components/content";

const Main:React.FC = () => {
  return (
    <main className="flex h-[120vh]">
      <Aside 
      className=""
      />
      <Content 
      className="w-screen md:w-[75vw]"
      />
    </main>
  );
}

export default Main;