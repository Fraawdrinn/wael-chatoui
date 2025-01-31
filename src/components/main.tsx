import React from 'react';

import Aside from "@/components/aside";
import Content from "@/components/content";

const Main:React.FC = () => {
  return (
    <main className="flex h-[120vh]">
      <Aside />
      <Content />
    </main>
  );
}

export default Main;