interface AsideProps {
  className?: string;
}

const Aside:React.FC<AsideProps> = ({ className }) => {
  return (
    <nav className={`hidden w-0 md:block md:w-[25vw] ${className}`}>
      
    </nav>
  );
}

export default Aside;
