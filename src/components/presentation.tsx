"use client";

const scaleWhenHover = "inline-block transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer";

export default function Presentation() {

  const textElements = [
    { text: ["Bonjour", "👋,"], className: "text-4xl radley-regular-italic" },
    { text: ["Je", "m'", "appelle", "Wael", "!"], className: "text-6xl text-[#9b4819] cabin-regular font-semibold" },
  ];

  return (
    <header className="pb-24 shadow-md">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          {textElements.map((element, i) => (
            <div key={i} className={element.className}>
              {createTextWithHoverEffect(element.text)}
            </div>
          ))}
          <AnimatedPath />
        </div>
      </div>
    </header>
  );
};

// Function to create text with hover effect
function createTextWithHoverEffect(text: string[]) {
  return text.map((word, index) => (
    <span key={index} className={scaleWhenHover}>
      {word}&nbsp;
    </span>
  ));
}

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