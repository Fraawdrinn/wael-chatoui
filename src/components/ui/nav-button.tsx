interface navButtonProps {
  title: string;
  clickHandler: (component: string) => void; // Modified to accept a string argument
}

const NavButton: React.FC<navButtonProps> = ({ title, clickHandler }) => {
  return (
    <button
      className="w-full h-16 hover:bg-darkened-background border-b border-t border-gray-300 active:bg-gray-300
      text-lg"
      onClick={() => clickHandler(title)} // Pass 'title' as the argument when the button is clicked
    >
      {title}
    </button>
  );
};

export default NavButton;
