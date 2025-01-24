import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[#A217E3]">404</h1>
      <p className="text-xl mt-4 text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="mt-6 relative text-[22px] text-white font-medium no-underline ml-10 pb-1 before:content-[''] before:absolute before:top-full 
    before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-[width] before:duration-300 hover:before:w-full">
        Go back home
      </Link>
    </div>
  );
};

export default Custom404;
