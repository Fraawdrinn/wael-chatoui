import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-[#9b4819]">404</h1>
      <p className="text-xl mt-4 text-[#a3503a]">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link 
      href="/" 
      className="mt-6 relative text-[22px] text-[#a3503a] font-medium no-underline hover:underline pb-2">
        Go back home
      </Link>
    </main>
  );
};

