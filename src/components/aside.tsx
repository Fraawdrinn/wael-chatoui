import React from "react";

const Aside: React.FC = () => {
  return (
    <>
      <div className="lg:hidden absolute right-0 py-[-50%] translate-y-[40%]">
        <input type="checkbox" role="button" aria-label="Display the menu" className="menu" />
      </div>
    </>
  );
}

export default Aside;
